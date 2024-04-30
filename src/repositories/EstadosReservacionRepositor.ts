
export const EstadosReservacionRepository = {
    "GET_ALL": "SELECT id_er, estado FROM EstadosReservacion ORDER BY id_er ASC;",
    //insert
    "ADD": "INSERT INTO EstadosReservacion(estado) VALUES($1) RETURNING id_er;",
}