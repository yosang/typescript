import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

// Middlewares
app.use((req: Request, res: Response, next: Function) => {
  console.log(`Request from ${req.url}`);
  next();
});

// GET / route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript and Express");
});

app.listen(port, () => console.log("Server is running on localhost, port 3000"));
