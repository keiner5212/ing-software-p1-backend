-- dml: Data Manipulation Language

\c p1_ing_software;

INSERT INTO Roles (Rol) VALUES ('Docente'), ('Administrador');

INSERT INTO EstadosReservacion (estado) VALUES 
('Cancelado'), 
('Ausentado'), 
('Finalizado'), 
('Registrado'), 
('Terminado');

INSERT INTO Usuarios (nombre, apellido, email, clave, id_rol, doc_identidad, foto) VALUES
    ('John', 'Doe', 'john.doe@email.com', 'password1', 1, '12345', 'https://randomuser.me/api/portraits/men/1.jpg'),
    ('Jane', 'Smith', 'jane.smith@email.com', 'password2', 2, '12345', 'https://randomuser.me/api/portraits/women/2.jpg'),
    ('Alice', 'Johnson', 'alice.johnson@email.com', 'password3', 2, '12345', 'https://randomuser.me/api/portraits/women/3.jpg'),
    ('Bob', 'Williams', 'bob.williams@email.com', 'password4', 1, '12345', 'https://randomuser.me/api/portraits/men/4.jpg'),
    ('Charlie', 'Brown', 'charlie.brown@email.com', 'password5', 2, '12345', 'https://randomuser.me/api/portraits/men/5.jpg');

INSERT INTO Salas (descripcion, capacidad, piso, ocupado) VALUES
    ('Sala de Reuniones A', 10, 2, FALSE),
    ('Sala de Conferencias B', 20, 3, FALSE),
    ('Sala de Entrevistas C', 6, 1, FALSE),
    ('Sala de Presentaciones D', 15, 4, FALSE),
    ('Sala de Capacitación E', 30, 2, FALSE),
    ('Sala de Juntas F', 8, 5, FALSE);

INSERT INTO Reservaciones (usuario_registrador, usuario_registrado, id_sala, estado, fecha_inicio, fecha_fin) VALUES
    (1, 2, 1, 1, '2024-02-14 10:00:00', '2024-02-14 12:00:00'),
    (2, 3, 2, 2, '2024-02-15 14:00:00', '2024-02-15 16:00:00'),
    (3, 1, 3, 1, '2024-02-16 09:00:00', '2024-02-16 11:00:00'),
    (1, 2, 4, 2, '2024-02-17 13:00:00', '2024-02-17 15:00:00'),
    (2, 3, 5, 1, '2024-02-18 11:00:00', '2024-02-18 13:00:00'),
    (3, 1, 6, 2, '2024-02-19 10:30:00', '2024-02-19 12:30:00');