import { Request, Response, Router } from "express";
import { ReservacionDAO } from "../dao/ReservacionDAO";

export class ReservacionController extends ReservacionDAO {
	public router: Router;

	constructor() {
		super();
		this.router = Router();
	}

	public routes(): Router {
		//get all
		this.router.get("/", async (req: Request, res: Response) => {
			try {
				const data = await ReservacionDAO.getAll();
				res.status(200).send(data);
			} catch (error: any) {
				res.status(400).send(error.message);
			}
		});

		return this.router;
	}
}
