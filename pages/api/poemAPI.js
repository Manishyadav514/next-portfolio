import * as fs from 'fs';

export default async function handler(req, res) {
  let data = await fs.promises.readFile("data/PoemData.json/", "utf-8");
  data = JSON.parse(data)
  res.status(200).json(data);
}
