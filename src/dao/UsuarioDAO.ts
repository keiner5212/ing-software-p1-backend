import db from "../db/dbConfig";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioDAO {
    public static async getAll() {
        const data = await db.manyOrNone(UsuarioRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        }
        throw new Error("No data found");
    }
}