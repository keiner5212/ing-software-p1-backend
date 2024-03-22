/**
 * 
CREATE TABLE Roles (
    id_rol SERIAL PRIMARY KEY,
    rol VARCHAR(30) NOT NULL DEFAULT 'Docente'
);
 */

export class Rol {
	public id_rol: number;
	public rol: string;

	constructor(id_rol: number, rol: string) {
		this.id_rol = id_rol;
		this.rol = rol;
	}


}
