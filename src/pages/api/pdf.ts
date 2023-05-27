import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { url } = req.body;
  const url =
    // "https://www.ted.com/talks/golshifteh_farahani_woman_life_freedom_in_iran_and_what_it_means_for_the_rest_of_the_world/c/transcript";
    "https://developer.chrome.com/articles/new-headless/";

  const browser = await puppeteer.launch({
    headless: false, // 動作確認するためheadlessモードにしない
    slowMo: 500, // 動作確認しやすいようにpuppeteerの操作を遅延させる
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  // await page.waitForSelector("div.mx-auto.mb-10.w-full");

  const pdf = await page.pdf();
  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=converted.pdf");
  res.send(pdf);
}
