import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const port = 1840;

app.use(express.json());
app.use(cors());

app.use((req: Request, res: Response) => {
  res.send("Hello World");
});

app.use();

app.get("/", (req, res) => {
  console.log("server on ✅");
});

app.listen(port, () => console.log(`Server running at port ${port} ✅`));
