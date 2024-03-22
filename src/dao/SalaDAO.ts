import DbConfig from "../db/dbConfig";
import { Sala } from "../entities/Sala";
import { SalaRepository } from "../repositories/SalaRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class SalaDAO {
    protected static async getAll(): Promise<Sala[]> {
        const data = await db.manyOrNone(SalaRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        } 
        throw new Error("No data found");
    }
}
