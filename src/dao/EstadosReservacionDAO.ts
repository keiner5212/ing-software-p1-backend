import pgPromise from "pg-promise";
import DbConfig from "../db/dbConfig";
import { EstadosReservacion } from "../entities/EstadosReservacion";
import { EstadosReservacionRepository } from "../repositories/EstadosReservacionRepositor";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class EstadosReservacionDAO {
    protected static async getAll(): Promise<EstadosReservacion[]> {
        return await db.task(async (t: pgPromise.IDatabase<any>)  => {
            return await t.manyOrNone(EstadosReservacionRepository.GET_ALL);
        }).then((data) => {
            if (data && data.length > 0) {
                return data;
            }
            throw new Error("No data found");
        }).catch((err) => {
            console.log(err);
            throw err;
        })
    }
}