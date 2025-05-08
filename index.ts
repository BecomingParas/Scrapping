import { PrismaClient, Prisma } from "./generated/prisma";
import { readFile } from "fs/promises";

const prisma = new PrismaClient();

async function main() {
  // Load scraped JSON
  const raw = await readFile(
    "./occupation_data_structured_updated.json",
    "utf-8"
  );
  const occupations: any[] = JSON.parse(raw);

  for (const occ of occupations) {
    console.log(`→ Processing ${occ.occupation} (${occ.anzscoCode})`);

    // Normalize visas array
    const visaList: string[] = Array.isArray(occ.visas)
      ? occ.visas
      : occ.visas && typeof occ.visas === "object"
      ? Object.values(occ.visas)
      : [];

    // Normalize authorities
    const authNames = occ.assessingAuthority || [];
    const authLinks = occ.assessingAuthorityLink || [];

    try {
      const upserted = await prisma.occupation.upsert({
        where: { anzscoCode: occ.anzscoCode },
        create: {
          occupation: occ.occupation,
          anzscoCode: occ.anzscoCode,
          anzscoLink: occ.anzscoLink,
          list: occ.list,
          // state is omitted → stays NULL

          visas: {
            create: visaList.map((v) => ({ visaName: v })),
          },
          assessingAuthorities: {
            create: authNames.map((name: string, i: number) => ({
              name,
              assessingAuthorityLink: {
                create: authLinks[i] ? [{ link: authLinks[i] }] : [],
              },
            })),
          },
        },
        update: {
          // **Only** update the top‐level scalars—leave nested relations untouched
          occupation: occ.occupation,
          anzscoLink: occ.anzscoLink,
          list: occ.list,
          // state still omitted → left NULL
        },
      });

      console.log(
        `  ✓ Upserted: ${upserted.occupation} (state=${
          upserted.state ?? "NULL"
        })`
      );
    } catch (e: unknown) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      ) {
        console.warn(`  ⚠️ Duplicate ANZSCO code ${occ.anzscoCode}, skipping.`);
      } else {
        console.error(`  ❌ Error on ${occ.anzscoCode}:`, (e as Error).message);
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
