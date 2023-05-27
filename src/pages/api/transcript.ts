import type { NextApiRequest, NextApiResponse } from "next";
import cheerio from "cheerio-httpcli";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;
  const client = cheerio;
  const result = client.fetchSync(url);
  const jsonScript = result.$('script[id="__NEXT_DATA__"]').text();
  const parsedJson = JSON.parse(jsonScript);
  const title = parsedJson.props.pageProps.videoData.title;
  const transcript = parsedJson.props.pageProps.transcriptData.translation.paragraphs.map((paragraph: any) => {
    return {
      time: paragraph.cues[0].time,
      cues: paragraph.cues.map((cue: any) => cue.text).join(" "),
    };
  });
  res.status(200).json({ title: title, transcript: transcript });
}
