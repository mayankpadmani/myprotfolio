import { NextApiRequest, NextApiResponse } from "next";

// pages/api/login.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;
    if (username === process.env.U_NAME && password === process.env.U_PASS) {
      res.status(200).json({ isAdmin: true });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  }
  