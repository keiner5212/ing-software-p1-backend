
export const SalaRepository = {
    "GET_ALL": "SELECT id_sala, descripcion, capacidad, piso, ocupado FROM Salas ORDER BY id_sala ASC;",
    //insert
    "ADD": "INSERT INTO Salas(descripcion, capacidad, piso, ocupado) VALUES($1, $2, $3, $4) RETURNING id_sala;",
    //update
    "UPDATE": "UPDATE Salas SET descripcion = $1, capacidad = $2, piso = $3, ocupado = $4 WHERE id_sala = $5;",
    //delete
    "DELETE": "DELETE FROM Salas WHERE id_sala = $1;"
}