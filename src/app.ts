import express, { Request, Response } from "express";
import { json } from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`API sucessfully started on port ${port}`);
});

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("Olá mundo!");
});
