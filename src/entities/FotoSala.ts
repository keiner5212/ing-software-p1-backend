/**
 * 
CREATE TABLE FotosSalas (
    id_foto_sala SERIAL PRIMARY KEY,
    id_sala INTEGER NOT NULL,
    imagen TEXT NOT NULL,
    FOREIGN KEY (id_sala) REFERENCES Salas(id_sala)
)
 */
export class FotoSala {
	public id_foto_sala: number;
	public imagen: string;
	public id_sala: number;

	constructor(id_foto_sala: number, imagen: string, id_sala: number) {
		this.id_foto_sala = id_foto_sala;
		this.imagen = imagen;
		this.id_sala = id_sala;
	}

	/* json example
	 {
		"imagen": "url",
		"id_sala": 1
	 }
	*/


}
