import DbConfig from "../db/dbConfig";
import { FotoSala } from "../entities/FotoSala";
import { FotosSalasRepository } from "../repositories/FotosSalasRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class FotoSalaDAO {
	protected static async getAll(): Promise<FotoSala[]> {
		const data = await db.manyOrNone(FotosSalasRepository.GET_ALL);
		if (data && data.length > 0) {
			return data;
		}
		throw new Error("No data found");
	}
}

