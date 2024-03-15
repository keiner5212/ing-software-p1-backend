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
	id_foto: number;
	imagen: string;
	id_sala: number;

	constructor(id_foto: number, imagen: string, id_sala: number) {
		this.id_foto = id_foto;
		this.imagen = imagen;
		this.id_sala = id_sala;
	}

	getImagen() {
		return this.imagen;
	}

	getId_sala() {
		return this.id_sala;
	}

	getId_foto() {
		return this.id_foto;
	}

	getJson() {
		return {
			id_foto: this.id_foto,
			imagen: this.imagen,
			id_sala: this.id_sala,
		};
	}
}
