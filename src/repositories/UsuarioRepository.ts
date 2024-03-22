export const UsuarioRepository = {
	GET_ALL:
		"SELECT id_usuario, doc_identidad, nombre, apellido, email, clave, id_rol FROM Usuarios ORDER BY id_usuario ASC;",
	GET_BY_DOC_IDENTIDAD:
		"SELECT id_usuario, doc_identidad, nombre, apellido, email, clave, id_rol FROM Usuarios WHERE doc_identidad = $1 ORDER BY id_usuario ASC;",
	GET_BLOCKED_USERS: `
        SELECT usuarios_fallas.id_usuario
        FROM (SELECT u.id_usuario, count(*) as fallas
            FROM reservaciones as rs INNER JOIN usuarios as u ON rs.usuario_registrado=u.id_usuario
            WHERE estado IN (2, 1)
            GROUP BY id_usuario) as usuarios_fallas
        WHERE fallas>2
    `,
};
