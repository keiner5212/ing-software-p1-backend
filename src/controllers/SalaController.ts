
import { Router, Request, Response } from "express";
import { SalaDAO } from "../dao/SalaDAO";
import { verifyToken } from "../middlewares/jwt";

export class SalaController extends SalaDAO {
    private router: Router;

    constructor() {
        super();
        this.router = Router();
    }

    public routes(): Router {
        //routes
        this.router.get("/", async (req: Request, res: Response) => {
            res.status(200).send({
                endpoints: {
                    getAll: "GET /get-all: get all rooms",
                }
            })
        })
        //get all
        this.router.get("/get-all", verifyToken, async (req: Request, res: Response) => {
            try {
                const data = await SalaDAO.getAll();
                res.status(200).send(data);
            } catch (error: any) {
                res.status(200).send({
                    message: error.message,
                });
            }
        });

        return this.router;
    }
}