import db from "../db/dbConfig";
import { Reservacion } from "../entities/Reservacion";
import { ReservacionesRepository } from "../repositories/ReservacionesRepository";

export class ReservacionDAO {
    protected static async getAll(): Promise<Reservacion[]> {
        const data = await db.manyOrNone(ReservacionesRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        }
        throw new Error("No data found");
    }
}