import { PrismaClient } from "./generated/prisma";
import { readFile } from "fs/promises";

const prisma = new PrismaClient();

const main = async () => {
  try {
    const data = await readFile(
      "./occupation_data_structured_updated.json",
      "utf-8"
    );
    const occupations = JSON.parse(data);

    for (const occupation of occupations) {
      console.log(`Processing occupation: ${occupation.occupation}`);

      // Process visas
      let visaList: string[] = [];
      if (Array.isArray(occupation.visas)) {
        visaList = occupation.visas;
      } else if (
        typeof occupation.visas === "object" &&
        occupation.visas !== null
      ) {
        visaList = Object.values(occupation.visas);
      }

      const assessingAuthorities = occupation.assessingAuthority || [];
      const assessingAuthorityLinks = occupation.assessingAuthorityLink || [];

      const createdOccupation = await prisma.occupation.create({
        data: {
          occupation: occupation.occupation,
          anzocoCode: occupation.anzscoCode,
          anzocoLink: occupation.anzscoLink,
          list: occupation.list,

          visas: {
            create: visaList.map((visaName) => ({
              visaName: visaName,
            })),
          },

          assessingAuthorities: {
            create: assessingAuthorities.map(
              (authority: any, index: number) => ({
                name: authority,
                assessingAuthorityLink: {
                  create: assessingAuthorityLinks[index]
                    ? [{ link: assessingAuthorityLinks[index] }]
                    : [],
                },
              })
            ),
          },
        },
      });

      console.log(`Created occupation: ${createdOccupation.occupation}`);
    }
  } catch (error) {
    console.error("Error during occupation data insertion:", error);
  } finally {
    await prisma.$disconnect();
  }
};

main()
  .catch((e) => {
    console.error("Unexpected error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
