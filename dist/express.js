"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Middlewares
app.use((req, res, next) => {
    console.log(`Request from ${req.url}`);
    next();
});
// GET / route
app.get("/", (req, res) => {
    res.send("Hello from TypeScript and Express");
});
app.listen(port, () => console.log("Server is running on localhost, port 3000"));
//# sourceMappingURL=express.js.map