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
	public id_sala: number;
	public descripcion: string;
	public capacidad: number;
	public piso: number;
	public ocupado: boolean;

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

}
