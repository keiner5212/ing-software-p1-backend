import DbConfig from "../db/dbConfig";
import { Reservacion } from "../entities/Reservacion";
import { ReservacionesRepository } from "../repositories/ReservacionesRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class ReservacionDAO {
    protected static async getAll(): Promise<Reservacion[]> {
        const data = await db.manyOrNone(ReservacionesRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        }
        throw new Error("No data found");
    }
}
