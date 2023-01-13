import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("data/blogData");
  // data = data.slice(0, parseInt(req.query.count))
  console.log(data);
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("data/blogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  // allBlogs = data.map((item) => {
  //   myfile = fs.promises.readFile("data/blogData/" + item, "utf-8");
  //   allBlogs.push(JSON.parse(myfile));
  //   return allBlogs;
  // });
  // console.log("allBlogs",allBlogs)
  res.status(200).json(allBlogs);
}
