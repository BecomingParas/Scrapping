import fs from "fs";
import puppeteer, { Browser, Page } from "puppeteer";

interface OccupationData {
  occupation: string;
  anzscoCode: string;
  anzscoLink: string;
  visas: Record<string, string>; // key = code, value = name
  list: string;
  assessingAuthority: string[];
  assessingAuthorityLink: string[];
}

const scrapeOccupations = async (): Promise<void> => {
  const browser: Browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  const page: Page = await browser.newPage();

  await page.goto(
    "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
    { waitUntil: "domcontentloaded" }
  );

  await page.waitForSelector("table.table-hover tbody tr td", {
    timeout: 60000,
  });

  const allData: OccupationData[] = [];
  const expectedCount = 674;

  while (allData.length < expectedCount) {
    const data: OccupationData[] = await page.$$eval(
      'table.table-hover tbody tr[tabindex="-1"]',
      (rows) => {
        return Array.from(rows).map((row) => {
          const cells = row.querySelectorAll("td");

          const visas: Record<string, string> = {};
          if (cells[2]) {
            const visaListItems = cells[2].querySelectorAll(
              "ul.table-search-skill li"
            );

            visaListItems.forEach((li) => {
              const text = li.textContent?.trim() || "";
              const match = text.match(/^(\d+)\s*-\s*(.+)$/);

              if (match) {
                const code = match[1];
                const name = match[2];
                visas[code] = name;
              }
            });
          }

          const authorityCell = cells[4];
          let assessingAuthority: string[] = [];
          let assessingAuthorityLink: string[] = [];

          if (authorityCell) {
            const links = authorityCell.querySelectorAll("a");

            links.forEach((link) => {
              const text = link.textContent?.trim() || "";
              const href = link.getAttribute("href");

              if (href?.startsWith("javascript:")) {
                if (text) assessingAuthority.push(text);
              } else {
                if (href) assessingAuthorityLink.push(href);
              }
            });

            if (links.length === 0) {
              const plainText = authorityCell.textContent?.trim() || "";
              if (plainText) assessingAuthority = [plainText];
              assessingAuthorityLink = [""];
            }

            if (assessingAuthority.length === 0) assessingAuthority = [""];
            if (assessingAuthorityLink.length === 0)
              assessingAuthorityLink = [""];
          }

          return {
            occupation: cells[0]?.textContent?.trim() || "",
            anzscoCode: cells[1]?.textContent?.trim() || "",
            anzscoLink: cells[1]?.querySelector("a")?.href || "",
            visas,
            list: cells[3]?.textContent?.trim() || "",
            assessingAuthority,
            assessingAuthorityLink,
          };
        });
      }
    );

    allData.push(...data);
    console.log(`Collected: ${allData.length} / ${expectedCount}`);

    if (allData.length >= expectedCount) break;

    const nextButtonDisabled = await page
      .$eval("ul.pagination li:last-child", (li) =>
        li.classList.contains("disabled")
      )
      .catch(() => true);

    if (nextButtonDisabled) break;

    await Promise.all([
      page.click("ul.pagination li:last-child a"),
      page.waitForNavigation({ waitUntil: "domcontentloaded" }),
      page.waitForSelector("table.table-hover tbody tr td", { timeout: 60000 }),
    ]);
  }

  fs.writeFileSync(
    "occupation_data_structured_updated.json",
    JSON.stringify(allData, null, 2)
  );
  console.log("✅ Final structured data saved!");

  await browser.close();
};

scrapeOccupations().catch((error) => {
  console.error("❌ Error scraping data:", error);
});
