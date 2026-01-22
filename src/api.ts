import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

interface Book {
  id: number;
  title: string;
  author: string;
}

const books: Book[] = [];

app.post("/", (req: Request, res: Response) => {
  // const book: Book = req.body // Can also declare a variable but we have to use the type
  books.push(req.body as Book);
  res.status(201).end();
});

app.get("/", (req: Request, res: Response) => {
  res.send(books);
});

app.listen(port, () => console.log("App is running on localhost port: ", port));
