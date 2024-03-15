export const ReservacionesRepository = {
	GET_ALL:
		"SELECT id_reservacion, usuario_registrador, usuario_registrado, id_sala, estado, fecha_inicio, fecha_fin FROM Reservaciones ORDER BY id_reservacion DESC;",
};
