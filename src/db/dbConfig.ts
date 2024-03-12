import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const pgp = pgPromise();
const cn = {
	host: process.env.PG_HOST ?? '',
	port: Number(process.env.PG_PORT) || 5432,
	database: process.env.PG_DATABASE ?? '',
	user: process.env.PG_USER ?? '',
	password: process.env.PG_PASSWORD ?? '',
};

const db = pgp(cn);

// print if the conection is successful
db.connect()
	.then((obj) => {
		console.log(
			"Conected to the database:",
			obj.client.database
		);
		obj.done();
	})
	.catch((error) => {
		console.error(
			"Error connecting to the database:",
			error.message || error
		);
	});

export default db;
