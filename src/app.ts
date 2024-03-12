import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import { SalaController } from "./controllers/SalaController";

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
app.use("/sala", new SalaController().routes());

// 404 PAGE
app.use((req: Request, res: Response) => {
    res.status(404).send("Page not found");
});

// EXPORT
export default app;
