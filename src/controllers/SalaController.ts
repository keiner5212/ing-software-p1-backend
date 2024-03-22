
import { Router, Request, Response } from "express";
import { SalaDAO } from "../dao/SalaDAO";

export class SalaController extends SalaDAO {
    private router: Router;

    constructor() {
        super();
        this.router = Router();
    }

    public routes(): Router {
        //get all
        this.router.get("/", async (req: Request, res: Response) => {
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