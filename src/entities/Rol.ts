/**
 * 
CREATE TABLE Roles (
    id_rol SERIAL PRIMARY KEY,
    rol VARCHAR(30) NOT NULL DEFAULT 'Docente'
);
 */

export class Rol {
	private id_rol: number;
	private rol: string;

	constructor(id_rol: number, rol: string) {
		this.id_rol = id_rol;
		this.rol = rol;
	}

	// methods
	getId_rol() {
		return this.id_rol;
	}

	getRol() {
		return this.rol;
	}

	// get json
	getJson() {
		return {
			id_rol: this.id_rol,
			rol: this.rol,
		};
	}
}
