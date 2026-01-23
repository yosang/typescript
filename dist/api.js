"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const books = [];
app.post("/", (req, res) => {
    // const book: Book = req.body // Can also declare a variable but we have to use the type
    books.push(req.body);
    res.status(201).end();
});
app.get("/", (req, res) => {
    res.send(books);
});
app.listen(port, () => console.log("App is running on localhost port: ", port));
//# sourceMappingURL=api.js.map