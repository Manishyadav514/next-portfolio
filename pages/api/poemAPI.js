import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readFile("data/poemData/poemData.json", "utf-8");
  data = JSON.parse(data);
  // console.log("poem",data);
  res.status(200).json(data);
}
