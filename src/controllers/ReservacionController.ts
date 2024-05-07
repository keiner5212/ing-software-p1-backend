import { Request, Response, Router } from "express";
import { ReservacionDAO } from "../dao/ReservacionDAO";
import { verifyToken } from "../middlewares/jwt";

export class ReservacionController extends ReservacionDAO {
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
					getAll: "GET /get-all: get all reservations",
				}
			})
		})
		//get all
		this.router.get("/get-all", verifyToken, async (req: Request, res: Response) => {
			try {
				const data = await ReservacionDAO.getAll();
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
