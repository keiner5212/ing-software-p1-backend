import db from "../db/dbConfig";
import { Error } from "../entities/Error";
import { Sala } from "../entities/Sala";
import { SalaRepository } from "../repositories/SalaRepository";

export class SalaDAO {
    protected static async getAll(): Promise<Sala[] | Error> {
        const data = await db.manyOrNone(SalaRepository.GET_ALL);
        if (data && data.length > 0) {
            return data;
        } else {
            return new Error("No data found");
        }
    }
}