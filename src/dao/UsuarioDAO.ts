import db from "../db/dbConfig";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioDAO {
    /**
     * Get all users
     * @returns Promise<Usuario[]>
     */
	public static async getAll() {
		const data = await db.manyOrNone(UsuarioRepository.GET_ALL);
		if (data && data.length > 0) {
			return data;
		}
		throw new Error("No data found");
	}

    /**
     * Get blocked users
     * @returns Promise<Usuario[]>
     */
	public static async getBlockedUsers() {
		const data = await db.manyOrNone(UsuarioRepository.GET_BLOCKED_USERS);
		if (data && data.length > 0) {
			return data;
		}
		throw new Error("No data found");
	}

    
    /**
     * Get users by document
	 * @param document string - document
     * @returns Promise<Usuario[]>
     */
	public static async GetUsersByDocument(document: string) {
		const data = await db.manyOrNone(UsuarioRepository.GET_BY_DOC_IDENTIDAD, [document]);
		if (data && data.length > 0) {
			return data;
		}
		throw new Error("No data found");
	}
}
