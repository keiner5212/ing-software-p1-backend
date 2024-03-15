import { Router } from "express";
import { UsuarioDAO } from "../dao/UsuarioDAO";

export class UsuarioController extends UsuarioDAO {
	public router: Router;

	constructor() {
		super();
		this.router = Router();
	}

	public routes(): Router {
		//get all
		this.router.get("/", async (req: any, res: any) => {
			try {
				const data = await UsuarioDAO.getAll();
				res.status(200).send(data);
			} catch (error: any) {
				res.status(400).send(error.message);
			}
		});

		return this.router;
	}
}
