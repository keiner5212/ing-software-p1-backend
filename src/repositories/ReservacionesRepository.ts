export const ReservacionesRepository = {
	GET_ALL:
		"SELECT id_reservacion, usuario_registrador, usuario_registrado, id_sala, estado, fecha_inicio, fecha_fin FROM Reservaciones ORDER BY id_reservacion ASC;",
		//insert
		"ADD": "INSERT INTO Reservaciones(usuario_registrador, usuario_registrado, id_sala, estado, fecha_inicio, fecha_fin) VALUES($1, $2, $3, $4, $5, $6) RETURNING id_reservacion;",
		//update
		"UPDATE": "UPDATE Reservaciones SET usuario_registrador = $1, usuario_registrado = $2, id_sala = $3, estado = $4, fecha_inicio = $5, fecha_fin = $6 WHERE id_reservacion = $7;",
		//delete
		"DELETE": "DELETE FROM Reservaciones WHERE id_reservacion = $1;"
};
