import { sign } from "jsonwebtoken";
import DbConfig from "../db/dbConfig";
import { RolRepository } from "../repositories/RolRepository";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { ComparePassword, EncriptPassword, decryptContent } from "../utils/encrypt";
import { RolesConstants } from "../utils/constants/Roles";
import dotenv from "dotenv";

dotenv.config();

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class UsuarioDAO {

	protected static async userExists(email: string, doc_identidad: string) {
		await db.task(async (t) => {
			return await t.manyOrNone(UsuarioRepository.GET_BY_EMAIL, [email]);
		}).then((user) => {
			if (user && user.length > 0) {
				throw new Error("Error in sign in: User Email already exists");
			}
		}).catch((err) => {
			throw err;
		});

		await db.task(async (t) => {
			return await t.manyOrNone(UsuarioRepository.GET_BY_DOC_IDENTIDAD, [doc_identidad]);
		}).then((user) => {
			if (user && user.length > 0) {
				throw new Error("Error in sign in: User Document already exists");
			}
		}).catch((err) => {
			throw err;
		});
	}

	/**
	 * Get all users
	 * @returns Promise<Usuario[]>
	 */
	public static async getAll() {
		await db.task(async (t) => {
			return await t.manyOrNone(UsuarioRepository.GET_ALL);
		}).then((data) => {
			if (data && data.length > 0) {
				return data;
			}
		}).catch((err) => {
			console.log(err);
		})
		throw new Error("No data found");
	}

	/**
	 * Get blocked users
	 * @returns Promise<Usuario[]>
	 */
	public static async getBlockedUsers() {
		await db.task(async (t) => {
			return await t.manyOrNone(UsuarioRepository.GET_BLOCKED_USERS);
		}).then((data) => {
			if (data && data.length > 0) {
				return data;
			}
		}).catch((err) => {
			console.log(err);
		})
		throw new Error("No data found");
	}


	/**
	 * Get users by document
	 * @param document string - document
	 * @returns Promise<Usuario[]>
	 */
	public static async GetUsersByDocument(document: string) {
		await db.task(async (t) => {
			return await t.manyOrNone(UsuarioRepository.GET_BY_DOC_IDENTIDAD, [document]);
		}).then((data) => {
			if (data && data.length > 0) {
				return data;
			}
		}).catch((err) => {
			console.log(err);
		})
		throw new Error("No data found");
	}

	/**
	 * Sign up a new user
	 * @param doc_identidad string
	 * @param nombre string
	 * @param apellido string
	 * @param email string
	 * @param clave string
	 * @returns Promise<Usuario[]>
	 * @throws Error
	 * */
	public static async signUp(doc_identidad: string, nombre: string, apellido: string, email: string, clave: string) {
		await db.task(async (t) => {
			//set default teacher role
			const TeacherRole = await t.oneOrNone(RolRepository.GET_BY_ROLE, [RolesConstants.TEACHER]);
			if (!TeacherRole) {
				throw new Error("Error in sign in: Teacher role not found");
			}
			//check if user exists (call userExists function)
			await this.userExists(email, doc_identidad);
			//decrypt password using crypto
			const claveDecrypted = decryptContent(clave);
			//encrypt password using Bcrypt
			const password = await EncriptPassword(claveDecrypted);
			//add user
			return await db.oneOrNone(UsuarioRepository.ADD,
				[doc_identidad, nombre, apellido, email, password, TeacherRole.id_rol]);
		}).then((data) => {
			if (data && data.length > 0) {
				return data;
			}
		}).catch((err) => {
			console.log(err);
		})
		throw new Error("Error in sign in: User not created");
	}


	/**
	 * Sign in a user
	 * @param email string
	 * @param clave string
	 * @returns Promise<Usuario[]>
	 * @throws Error
	 * */
	public static async signIn(email: string, clave: string) {
		return await db.task(async (t) => {
			//get user
			const user = await t.oneOrNone(UsuarioRepository.GET_BY_EMAIL, [email]);
			if (!user) {
				throw new Error("Error in sign in: User not found");
			}
			//get user role
			const role = await db.oneOrNone(RolRepository.GET_BY_ID, [user.id_rol]);

			//decrypt password using crypto
			const claveDecrypted = decryptContent(clave);

			//compare password
			const passwordMatch = await ComparePassword(claveDecrypted, user.clave);
			if (!passwordMatch) {
				throw new Error("Error in sign in: Password incorrect");
			}

			// create token and return it
			const token = sign({ id: user.id, email, doc_identidad: user.doc_identidad, rol: role.rol }, process.env.JWT_SECRET as string, {
				expiresIn: process.env.JWT_EXPIRATION_TIME,
			});
			return token;
		}).then((token) => {
			return token;
		}).catch((err) => {
			console.log(err);
			throw new Error("Error in sign in");
		})

	}
}
