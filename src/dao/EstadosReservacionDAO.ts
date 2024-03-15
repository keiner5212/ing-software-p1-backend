import db from "../db/dbConfig";
import { EstadosReservacion } from "../entities/EstadosReservacion";
import { EstadosReservacionRepository } from "../repositories/EstadosReservacionRepositor";

export class EstadosReservacionDAO {
    protected static async getAll(): Promise<EstadosReservacion[]> {
        const data = await db.manyOrNone(EstadosReservacionRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        }
        throw new Error("No data found");
    }
}