import cors from "cors";
import express, { Request, Response } from "express";
import morgan from "morgan";
import { SalaController } from "./controllers/SalaController";

export class App {
    private app: express.Application;

    constructor() {
        this.app = express();
    }

    public start() : express.Application {
        // CONFIG
        this.app.disable("x-powered-by");

        // MIDDLEWARE
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());

        // ROUTES
        this.app.get("/", (req: Request, res: Response) => {
            res.send({
                message: "Welcome to the App",
            });
        });

        // Controllers ROUTES
        this.app.use("/sala", new SalaController().routes());

        // 404 PAGE
        this.app.use((req: Request, res: Response) => {
            res.status(404).send("Page not found");
        });

        return this.app;
    }
}