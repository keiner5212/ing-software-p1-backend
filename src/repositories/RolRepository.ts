export const RolRepository = {
    "GET_ALL": "SELECT id_rol, rol FROM Roles ORDER BY id_rol ASC;",
    //insert
    "ADD": "INSERT INTO Roles(rol) VALUES($1) RETURNING id_rol;",
    //search by role
    "GET_BY_ROLE": "SELECT id_rol, rol FROM Roles WHERE rol = $1;"
}