
export const FotosSalasRepository = {
    "GET_ALL": "SELECT id_foto_sala, imagen, id_sala FROM FotosSalas ORDER BY id_foto_sala ASC;",
    //insert
    "ADD": "INSERT INTO FotosSalas(imagen, id_sala) VALUES($1, $2) RETURNING id_foto_sala;",
}