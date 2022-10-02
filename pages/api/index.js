// Javascript
// export default async = (req, res) => {
//   res.send("Hello world!");
// };
export default function handler(req, res) {
  res.status(200).json('Hi, I am Manish Yadav')
}

// Typescript
// import { NextApiRequest, NextApiResponse } from "next";
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   res.send("Hello world!");
// };