/**
 * 
CREATE TABLE EstadosReservacion (
    id_er SERIAL PRIMARY KEY,
    estado VARCHAR(20) NOT NULL UNIQUE 
);
 */

export class EstadosReservacion {
	public id_er: number;
	public estado: string;

	constructor(id_er: number, estado: string) {
		this.id_er = id_er;
		this.estado = estado;
	}


}
