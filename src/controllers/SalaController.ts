
import { Router, Request, Response } from "express";
import { SalaDAO } from "../dao/SalaDAO";
import { Error } from "../entities/Error";

export class SalaController extends SalaDAO {
    private router: Router;

    constructor() {
        super();
        this.router = Router();
    }

    public routes(): Router {
        //get all
        this.router.get("/", async (req: Request, res: Response) => {
            const data = await SalaDAO.getAll()
            if (data instanceof Error) {
                res.status(400).send(data.getJson());
            }else{
                res.status(200).send(data);
            }
        });

        return this.router;
    }
}