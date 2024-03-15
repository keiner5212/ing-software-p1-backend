import db from "../db/dbConfig";
import { Sala } from "../entities/Sala";
import { SalaRepository } from "../repositories/SalaRepository";

export class SalaDAO {
    protected static async getAll(): Promise<Sala[]> {
        const data = await db.manyOrNone(SalaRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        } 
        throw new Error("No data found");
    }
}