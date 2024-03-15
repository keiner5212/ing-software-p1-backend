/**
 * 
CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    doc_identidad VARCHAR(50),
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    clave VARCHAR(15) NOT NULL,
    id_rol INTEGER NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);
 */

export class Usuario {
	private id_usuario: number;
	private doc_identidad: string;
	private nombre: string;
	private apellido: string;
	private email: string;
	private clave: string;
	private id_rol: number;

	constructor(
		id_usuario: number,
		doc_identidad: string,
		nombre: string,
		apellido: string,
		email: string,
		clave: string,
		id_rol: number
	) {
		this.id_usuario = id_usuario;
		this.doc_identidad = doc_identidad;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.clave = clave;
		this.id_rol = id_rol;
	}

	getId_usuario() {
		return this.id_usuario;
	}
	getDoc_identidad() {
		return this.doc_identidad;
	}
	getNombre() {
		return this.nombre;
	}
	getApellido() {
		return this.apellido;
	}
	getEmail() {
		return this.email;
	}
	getClave() {
		return this.clave;
	}
	getId_rol() {
		return this.id_rol;
	}

	getJson() {
		return {
			id_usuario: this.id_usuario,
			doc_identidad: this.doc_identidad,
			nombre: this.nombre,
			apellido: this.apellido,
			email: this.email,
			clave: this.clave,
			id_rol: this.id_rol,
		};
	}
}
