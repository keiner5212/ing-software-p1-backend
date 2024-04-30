import { Request, Response, Router } from "express";
import { UsuarioDAO } from "../dao/UsuarioDAO";
import { validateUser } from "../middlewares/Usuario.validator";

export class UsuarioController extends UsuarioDAO {
	public router: Router;

	constructor() {
		super();
		this.router = Router();
	}

	public routes(): Router {
		//routes
		this.router.get("/", async (req: Request, res: Response) => {
			res.status(200).send({
				endpoints: {
					getAll: "GET /get-all: get all users",
					getBlocked: "GET /blocked: get blocked users",
					getByDocument: "GET /document/:document: get users by document",
					signUp: "POST /signup: sign up",
					signIn: "POST /signin: sign in",
				}
			})
		})

		//get all
		this.router.get("/get-all", async (req: Request, res: Response) => {
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
		this.router.get("/blocked", async (req: Request, res: Response) => {
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
		this.router.get("/document/:document", async (req: Request, res: Response) => {
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

		//sign up
		this.router.post("/signup", validateUser, async (req: Request, res: Response) => {
			try {

				const { doc_identidad, nombre, apellido, email, clave } = req.body;

				const data = await UsuarioDAO.signUp(
					doc_identidad,
					nombre,
					apellido,
					email,
					clave
				);
				res.status(201).send(data);
			} catch (error: any) {
				res.status(400).send({
					message: error.message,
				});
			}
		});

		//sign in
		this.router.post("/signin", validateUser, async (req: Request, res: Response) => {
			try {
				const { email, clave } = req.body;
				const data = await UsuarioDAO.signIn(email, clave);
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
