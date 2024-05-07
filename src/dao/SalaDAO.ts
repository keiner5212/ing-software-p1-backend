import pgPromise from "pg-promise";
import DbConfig from "../db/dbConfig";
import { Sala } from "../entities/Sala";
import { SalaRepository } from "../repositories/SalaRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class SalaDAO {
    protected static async getAll(): Promise<Sala[]> {
        return await db.task(async (t: pgPromise.IDatabase<any>)  => {
            return await t.manyOrNone(SalaRepository.GET_ALL);
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
