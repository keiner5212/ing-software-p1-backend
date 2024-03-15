/**
 * class for table:
 * 
CREATE TABLE Salas (
    id_sala SERIAL PRIMARY KEY,
    descripcion TEXT NOT NULL,
    capacidad SMALLINT NOT NULL CHECK (capacidad > 0),
    piso SMALLINT NOT NULL CHECK (piso > 0),
    ocupado BOOLEAN NOT NULL DEFAULT FALSE
);

 */

export class Sala {
	private id_sala: number;
	private descripcion: string;
	private capacidad: number;
	private piso: number;
	private ocupado: boolean;

	// constructor
	constructor(
		id_sala: number,
		descripcion: string,
		capacidad: number,
		piso: number,
		ocupado: boolean
	) {
		this.id_sala = id_sala;
		this.descripcion = descripcion;
		this.capacidad = capacidad;
		this.piso = piso;
		this.ocupado = ocupado;
	}

	// methods
	public getId_sala() {
		return this.id_sala;
	}

	public getCapacidad() {
		return this.capacidad;
	}

	public getPiso() {
		return this.piso;
	}

	public getOcupado() {
		return this.ocupado;
	}

	public getDescripcion() {
		return this.descripcion;
	}

	//get json
	public getJson() {
		return {
			id_sala: this.id_sala,
			descripcion: this.descripcion,
			capacidad: this.capacidad,
			piso: this.piso,
			ocupado: this.ocupado,
		};
	}
}
