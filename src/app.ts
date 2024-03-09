import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";

// CONFIGURATION
const app = express();

app.disable("x-powered-by");

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Welcome to the App",
    });
});

// Controllers ROUTES
// coming soon

// 404 PAGE
app.get("*", (req: Request, res: Response) => {
    res.status(404).send("Page not found");
});

// EXPORT
export default app;
