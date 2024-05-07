import DbConfig from "../db/dbConfig";
import { Rol } from "../entities/Rol";
import { RolRepository } from "../repositories/RolRepository";

const dbInstance = DbConfig.getInstance();
const db = dbInstance.getDb();

export class RolDAO {

    protected static async getAll(): Promise<Rol[]> {
        return await db.task(async (t) => {
            return await t.manyOrNone(RolRepository.GET_ALL);
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
