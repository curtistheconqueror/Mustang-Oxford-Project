import playwrightCore from "file:///C:/Users/curti/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright-core@1.60.0/node_modules/playwright-core/index.js";

const { chromium } = playwrightCore;

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const messages = [];

page.on("console", (msg) => messages.push(`${msg.type()}: ${msg.text()}`));
page.on("pageerror", (err) => messages.push(`pageerror: ${err.message}`));

await page.goto("http://127.0.0.1:5182/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.locator('[data-gear="R"]').click();
await page.waitForTimeout(600);
await page.locator('[data-view="linkage"]').click();
await page.waitForTimeout(400);
await page.locator('[data-view="cutaway"]').click();
await page.waitForTimeout(400);

const result = {
  selected: await page.locator("#selectedGear").textContent(),
  step: await page.locator("#currentStep").textContent(),
  canvas: await page.locator("#scene").boundingBox(),
  labelCount: await page.locator(".scene-label").count(),
  webgl: await page.evaluate(() => !!document.querySelector("#scene")?.getContext("webgl")),
  messages,
  screenshot: "C:/Users/curti/performance-build-visualizer/preview.png",
};

await page.screenshot({ path: result.screenshot, fullPage: true });
await browser.close();
console.log(JSON.stringify(result, null, 2));
