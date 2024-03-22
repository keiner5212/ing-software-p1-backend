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
	public id_usuario: number;
	public doc_identidad: string;
	public nombre: string;
	public apellido: string;
	public email: string;
	public clave: string;
	public id_rol: number;

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


}
