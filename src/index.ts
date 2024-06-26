import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./config/dbConnect";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  return res.json({ msg: "Welcome to orderbelly" });
});

app.listen(9000, async () => {
  await dbConnect();
  console.log("server started on port localhost:9000");
});
