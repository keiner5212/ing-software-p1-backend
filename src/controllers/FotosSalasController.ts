import { Request, Response, Router } from "express";
import { FotoSalaDAO } from "../dao/FotoSalaDAO";

export class FotosSalasController extends FotoSalaDAO {
	private router: Router;

	constructor() {
		super();
		this.router = Router();
	}

	public routes(): Router {
		//get all
		this.router.get("/", async (req: Request, res: Response) => {
			try {
				const data = await FotoSalaDAO.getAll();
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
