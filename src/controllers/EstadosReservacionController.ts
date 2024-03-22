import { Request, Response, Router } from "express";
import { EstadosReservacionDAO } from "../dao/EstadosReservacionDAO";

export class EstadosReservacionController extends EstadosReservacionDAO {

    private router: Router;

    constructor() {
        super();
        this.router = Router();
    }

    public routes(): Router {
        //get all
        this.router.get("/", async (req: Request, res: Response) => {
            try {
                const data = await EstadosReservacionDAO.getAll();
                res.status(200).send(data);
            } catch (error: any) {
                res.status(200).send(error.message);
            }
        });

        return this.router;
    }
}