import type { NextApiRequest, NextApiResponse } from "next";
import cheerio from "cheerio-httpcli";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;
  const client = cheerio;
  const result = client.fetchSync(url);
  const jsonScript = result.$('script[type="application/ld+json"]').text();
  const parsedJson = JSON.parse(jsonScript);
  res.status(200).json({ transcript: parsedJson.transcript });
}
