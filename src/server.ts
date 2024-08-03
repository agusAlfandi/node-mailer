import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routers/index.js";
const app: Application = express();
const port = 1840;

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.use(router);

app.use((req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/", (req, res) => {
  console.log("server on ✅");
});

app.listen(port, () => console.log(`Server running at port ${port} ✅`));
