import cors from "cors";
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import { SalaController } from "./controllers/SalaController";
import { RolController } from "./controllers/RolController";
import { EstadosReservacionController } from "./controllers/EstadosReservacionController";
import { UsuarioController } from "./controllers/UsuarioController";
import { FotosSalasController } from "./controllers/FotosSalasController";
import { ReservacionController } from "./controllers/ReservacionController";

export class App {
	private app: Application;
	private prefix = "/api/v1";


	constructor() {
		this.app = express();
	}

	private configuation() {
		// CONFIG
		this.app.disable("x-powered-by");
	}

	private midlewares() {
		// MIDDLEWARE
		this.app.use(morgan("dev"));
		this.app.use(cors());
		this.app.use(express.json());
	}

	private generalRoutes() {
		// ROUTES
		this.app.get("/", (req: Request, res: Response) => {
			res.send({
				message: "Welcome to the App",
				endpoints: {
					salas: `GET ${this.prefix}/salas`,
					roles: `GET ${this.prefix}/roles`,
					estados_reservacion: `GET ${this.prefix}/estados_reservacion`,
					usuarios: `GET ${this.prefix}/usuarios`,
					fotos_salas: `GET ${this.prefix}/fotos_salas`,
					reservaciones: `GET ${this.prefix}/reservaciones`,
				}
			});
		});
	}

	private controllerRoutes() {
		// Controllers ROUTES
		this.app.use(this.prefix + "/salas", new SalaController().routes());
		this.app.use(this.prefix + "/roles", new RolController().routes());
		this.app.use(this.prefix + "/estados_reservacion", new EstadosReservacionController().routes());
		this.app.use(this.prefix + "/usuarios", new UsuarioController().routes());
		this.app.use(this.prefix + "/fotos_salas", new FotosSalasController().routes());
		this.app.use(this.prefix + "/reservaciones", new ReservacionController().routes());
	}

	private NotFound() {
		// 404 PAGE
		this.app.use((req: Request, res: Response) => {
			res.status(404).send("Page not found");
		});
	}

	public config(): Application {
		this.configuation();
		this.midlewares();
		this.generalRoutes();
		this.controllerRoutes();
		this.NotFound();

		return this.app;
	}
}
