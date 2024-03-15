/**
 * 
CREATE TABLE EstadosReservacion (
    id_er SERIAL PRIMARY KEY,
    estado VARCHAR(20) NOT NULL UNIQUE 
);
 */

export class EstadosReservacion {
	private id_er: number;
	private estado: string;

	constructor(id_er: number, estado: string) {
		this.id_er = id_er;
		this.estado = estado;
	}

	public getId_er() {
		return this.id_er;
	}

	public getEstado() {
		return this.estado;
	}

	public getJson() {
		return {
			id_er: this.id_er,
			estado: this.estado,
		};
	}
}
