import puppeteer, { Browser, Page } from "puppeteer";
import fs from "fs";

interface VisaType {
  name: string;
  id: number;
  code: string;
  link: string;
}

interface VisaCategory {
  name: string;
  id: number;
  visaTypes: VisaType[];
}

const scrapeVisaListingStructured = async (): Promise<void> => {
  const browser: Browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  const page: Page = await browser.newPage();

  await page.goto(
    "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing",
    {
      waitUntil: "domcontentloaded",
    }
  );

  await page.waitForSelector("h2 + ha-wysiwyg ul");

  const visaCategories: VisaCategory[] = await page.$$eval("h2", (headings) => {
    let idCounter = 1;

    return Array.from(headings).map((heading) => {
      const categoryName = heading.textContent?.trim() || "";
      const categoryId = idCounter++;

      const ul = heading.nextElementSibling?.querySelector("ul");
      const liElements = ul ? ul.querySelectorAll("li a") : [];

      let visaId = 1;

      const visaTypes: VisaType[] = Array.from(liElements).map((a) => {
        const fullText = a.textContent?.trim() || "";
        const subclassMatch = fullText.match(/subclass\s*(\d+)/i);
        const code = subclassMatch ? subclassMatch[1] : "";

        const name = fullText.replace(/\(.*?\)/, "").trim();
        const link = (a as HTMLAnchorElement).href;

        return {
          name,
          id: visaId++,
          code,
          link,
        };
      });

      return {
        name: categoryName,
        id: categoryId,
        visaTypes,
      };
    });
  });

  fs.writeFileSync(
    "structured_visa_listing_withLink.json",
    JSON.stringify(visaCategories, null, 2)
  );
  console.log("✅ Structured visa listing saved!");

  await browser.close();
};

scrapeVisaListingStructured().catch((err) => {
  console.error("❌ Error:", err);
});
