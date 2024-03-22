/**
 * 
CREATE TABLE FotosSalas (
    id_foto SERIAL PRIMARY KEY,
    id_sala INTEGER NOT NULL,
    imagen TEXT NOT NULL,
    FOREIGN KEY (id_sala) REFERENCES Salas(id_sala)
)
 */
export class FotoSala {
	public id_foto: number;
	public imagen: string;
	public id_sala: number;

	constructor(id_foto: number, imagen: string, id_sala: number) {
		this.id_foto = id_foto;
		this.imagen = imagen;
		this.id_sala = id_sala;
	}

}
