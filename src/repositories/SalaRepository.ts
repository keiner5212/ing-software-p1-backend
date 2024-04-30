
export const SalaRepository = {
    "GET_ALL": "SELECT id_sala, descripcion, capacidad, piso, ocupado FROM Salas ORDER BY id_sala ASC;",
    //insert
    "ADD": "INSERT INTO Salas(descripcion, capacidad, piso, ocupado) VALUES($1, $2, $3, $4) RETURNING id_sala;",
}