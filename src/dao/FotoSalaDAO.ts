import pgPromise from "pg-promise";
import DbConfig from "../db/dbConfig";
import { FotoSala } from "../entities/FotoSala";
import { FotosSalasRepository } from "../repositories/FotosSalasRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class FotoSalaDAO {
	protected static async getAll(): Promise<FotoSala[]> {
		return await db.task(async (t: pgPromise.IDatabase<any>)  => {
			return await t.manyOrNone(FotosSalasRepository.GET_ALL);
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

