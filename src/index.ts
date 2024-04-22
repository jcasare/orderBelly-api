import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  return res.json({ msg: "Welcome to orderbelly" });
});

app.listen(9000, () => {
  console.log("server started on port localhost:9000");
});
