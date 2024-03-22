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
				res.status(200).send({
					message: error.message,
				});
			}
		});

		//get blcoked users
		this.router.get("/blocked", async (req: any, res: any) => {
			try {
				const data = await UsuarioDAO.getBlockedUsers();
				res.status(200).send(data);
			} catch (error: any) {
				res.status(400).send({
					message: error.message,
				});
			}
		});

		// get users by document
		this.router.get("/document/:document", async (req: any, res: any) => {
			try {
				const { document } = req.params;
				const data = await UsuarioDAO.GetUsersByDocument(document);
				res.status(200).send(data);
			} catch (error: any) {
				res.status(400).send({
					message: error.message,
				});
			}
		});

		return this.router;
	}
}
