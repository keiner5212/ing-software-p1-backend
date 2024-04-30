export const ReservacionesRepository = {
	GET_ALL:
		"SELECT id_reservacion, usuario_registrador, usuario_registrado, id_sala, estado, fecha_inicio, fecha_fin FROM Reservaciones ORDER BY id_reservacion ASC;",
		//insert
		"ADD": "INSERT INTO Reservaciones(usuario_registrador, usuario_registrado, id_sala, estado, fecha_inicio, fecha_fin) VALUES($1, $2, $3, $4, $5, $6) RETURNING id_reservacion;",
};
