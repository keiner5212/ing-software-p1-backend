import DbConfig from "../db/dbConfig";
import { Reservacion } from "../entities/Reservacion";
import { ReservacionesRepository } from "../repositories/ReservacionesRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class ReservacionDAO {
    protected static async getAll(): Promise<Reservacion[]> {
        return await db.task(async (t) => {
            return await t.manyOrNone(ReservacionesRepository.GET_ALL);
        }).then((data => {
            if (data && data.length > 0) {
                return data;
            }
            throw new Error("No data found");
        })).catch((err) => {
            console.log(err);
            throw err;
        })
    }
}
