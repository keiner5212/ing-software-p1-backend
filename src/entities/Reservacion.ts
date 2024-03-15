/**
 * 
CREATE TABLE Reservaciones (
    id_reservacion SERIAL PRIMARY KEY,
    usuario_registrador INTEGER NOT NULL,
    usuario_registrado INTEGER NOT NULL,
    id_sala INTEGER NOT NULL,
    estado INTEGER NOT NULL,
    fecha_inicio TIMESTAMP NOT NULL,
    fecha_fin TIMESTAMP NOT NULL,
    FOREIGN KEY (usuario_registrador) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (usuario_registrado) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_sala) REFERENCES Salas(id_sala),
    FOREIGN KEY (estado) REFERENCES EstadosReservacion(id_er),
    CONSTRAINT check_fecha CHECK (fecha_fin > fecha_inicio)
);
 */

export class Reservacion {
	id_reservacion: number;
	usuario_registrador: number;
	usuario_registrado: number;
	id_sala: number;
	estado: number;
	fecha_inicio: Date;
	fecha_fin: Date;

	constructor(
		id_reservacion: number,
		usuario_registrador: number,
		usuario_registrado: number,
		id_sala: number,
		estado: number,
		fecha_inicio: Date,
		fecha_fin: Date
	) {
		this.id_reservacion = id_reservacion;
		this.usuario_registrador = usuario_registrador;
		this.usuario_registrado = usuario_registrado;
		this.id_sala = id_sala;
		this.estado = estado;
		this.fecha_inicio = fecha_inicio;
		this.fecha_fin = fecha_fin;
	}

	public getId_reservacion() {
		return this.id_reservacion;
	}

	public getUsuario_registrador() {
		return this.usuario_registrador;
	}

	public getUsuario_registrado() {
		return this.usuario_registrado;
	}

	public getId_sala() {
		return this.id_sala;
	}

	public getEstado() {
		return this.estado;
	}

	public getFecha_inicio() {
		return this.fecha_inicio;
	}

	public getFecha_fin() {
		return this.fecha_fin;
	}

	public getJson() {
		return {
			id_reservacion: this.id_reservacion,
			usuario_registrador: this.usuario_registrador,
			usuario_registrado: this.usuario_registrado,
			id_sala: this.id_sala,
			estado: this.estado,
			fecha_inicio: this.fecha_inicio,
			fecha_fin: this.fecha_fin,
		};
	}
}
