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

		//get blcoked users
		this.router.get("/blocked", async (req: any, res: any) => {
			try {
				const data = await UsuarioDAO.getBlockedUsers();
				res.status(200).send(data);
			} catch (error: any) {
				res.status(400).send(error.message);
			}
		});

		// get users by document
		this.router.get("/document", async (req: any, res: any) => {
			try {
				const data = await UsuarioDAO.GetUsersByDocument();
				res.status(200).send(data);
			} catch (error: any) {
				res.status(400).send(error.message);
			}
		});

		return this.router;
	}
}
