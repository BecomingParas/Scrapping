# 🇦🇺 Australian Skilled Occupation List Scraper

A Puppeteer-based web scraping project that extracts structured data from the Australian Skilled Occupation List. Written in **TypeScript**.

---

## 📁 Project Structure

```
📦scrapping
 ┣ 📜scrape.ts               # Main TypeScript scraper script
 ┣ 📜occupation_data_structured.json  # Output data file
 ┣ 📜package.json            # NPM config and dependencies
 ┣ 📜tsconfig.json           # TypeScript configuration
 ┣ 📜.gitattributes          # Line ending normalization
 ┣ 📜.gitignore              # Ignore build and dependency files
```

---

## 🚀 Setup Instructions

```bash
# Clone the repo
$ git clone https://github.com/BecomingParas/Scrapping.git
$ cd Scrapping

# Install dependencies
$ npm install

# Install TypeScript globally if not done
$ npm install -g typescript

# Compile TypeScript
$ tsc

# Run the scraper
$ node scrape.js
```

---

## 🧠 Line-by-Line Code Explanation (scrape.ts)

```ts
import fs from "fs";
import puppeteer from "puppeteer";
```
- Imports Node's file system module and Puppeteer for web automation.

```ts
(async () => {
```
- Begins an Immediately Invoked Async Function Expression (IIFE).

```ts
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
```
- Launches a visible browser with slow motion to visualize scraping.

```ts
  const page = await browser.newPage();
```
- Opens a new tab in the browser.

```ts
  await page.goto("https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list", { waitUntil: "domcontentloaded" });
```
- Navigates to the Skilled Occupation List page and waits for content.

```ts
  await page.waitForSelector("table.table-hover tbody tr td", { timeout: 60000 });
```
- Ensures the table data is loaded before scraping begins.

```ts
  const allData = [];
  const expectedCount = 674;
```
- Initializes an array to store data and sets how many entries to collect.

```ts
  while (allData.length < expectedCount) {
```
- Starts pagination loop until all data is collected.

```ts
    const data = await page.$$eval('table.table-hover tbody tr[tabindex="-1"]', (rows) => {
```
- Selects all rows in the table.

```ts
      return rows.map((row) => {
        const cells = row.querySelectorAll("td");
```
- Loops through each row and grabs all its cells.

```ts
        const visaContent = cells[2]?.innerText.trim() || "";
        const visas = visaContent.split("\n").filter((v) => v.trim() !== "");
```
- Parses visa types as an array.

```ts
        const authorityCell = cells[4];
        let assessingAuthority = [];
        let assessingAuthorityLink = [];
```
- Targets the authority column and sets up arrays for name and link.

```ts
        if (authorityCell) {
          const links = authorityCell.querySelectorAll("a");
```
- Checks if links exist inside the authority cell.

```ts
          links.forEach((link) => {
            const text = link.innerText.trim();
            const href = link.getAttribute("href");
```
- Extracts text and href from anchor tags.

```ts
            if (href && href.startsWith("javascript:")) {
              if (text) assessingAuthority.push(text);
            } else {
              if (href) assessingAuthorityLink.push(href);
            }
          });
```
- Differentiates between JavaScript-based links and normal links.

```ts
          if (links.length === 0) {
            const plainText = authorityCell.innerText.trim();
            if (plainText) assessingAuthority = [plainText];
            assessingAuthorityLink = [""];
          }

          if (assessingAuthority.length === 0) assessingAuthority = [""];
          if (assessingAuthorityLink.length === 0) assessingAuthorityLink = [""];
        }
```
- Handles cases where there are no links, or empty arrays.

```ts
        return {
          occupation: cells[0]?.innerText.trim() || "",
          anzscoCode: cells[1]?.innerText.trim() || "",
          anzscoLink: cells[1]?.querySelector("a")?.href || "",
          visa: visas,
          list: cells[3]?.innerText.trim() || "",
          assessingAuthority,
          assessingAuthorityLink,
        };
      });
    });
```
- Extracts structured data into an object format.

```ts
    allData.push(...data);
    console.log(`Collected: ${allData.length} / ${expectedCount}`);
```
- Pushes current page’s data and logs progress.

```ts
    if (allData.length >= expectedCount) break;
```
- Breaks the loop if we've collected all data.

```ts
    const nextButtonDisabled = await page
      .$eval("ul.pagination li:last-child", (li) => li.classList.contains("disabled"))
      .catch(() => true);
```
- Checks if the "next" button is disabled (no more pages).

```ts
    if (nextButtonDisabled) break;

    await Promise.all([
      page.click("ul.pagination li:last-child a"),
      page.waitForNavigation({ waitUntil: "domcontentloaded" }),
      page.waitForSelector("table.table-hover tbody tr td", { timeout: 60000 }),
    ]);
```
- If more pages exist, clicks next and waits for content to load.

```ts
  }
```
- End of `while` loop.

```ts
  fs.writeFileSync("occupation_data_structured.json", JSON.stringify(allData, null, 2));
  console.log("✅ Final structured data saved!");
```
- Saves the data to a JSON file and confirms.

```ts
  await browser.close();
})();
```
- Closes the browser and ends the IIFE.

---

## 📄 Output

A file `occupation_data_structured.json` with all structured records.

---

## 🌐 License

MIT — Feel free to use or adapt this project.

---

## 🧑‍💻 Author

👋 Made with ❤️ by [Paras](https://github.com/BecomingParas)

---

Let me know if you want to deploy this or turn it into an API!

