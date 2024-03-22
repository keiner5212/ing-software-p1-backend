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
	public id_reservacion: number;
	public usuario_registrador: number;
	public usuario_registrado: number;
	public id_sala: number;
	public estado: number;
	public fecha_inicio: Date;
	public fecha_fin: Date;

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


}
