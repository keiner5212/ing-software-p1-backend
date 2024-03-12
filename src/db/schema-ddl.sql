-- ddl: Data Definition Language

DROP DATABASE IF EXISTS p1_ing_software;

CREATE DATABASE p1_ing_software;

\c p1_ing_software;

CREATE TABLE Roles (
    id_rol SERIAL PRIMARY KEY,
    rol VARCHAR(30) NOT NULL DEFAULT 'Docente'
);

CREATE TABLE EstadosReservacion (
    id_er SERIAL PRIMARY KEY,
    estado VARCHAR(20) NOT NULL UNIQUE 
);

CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    doc_identidad VARCHAR(50),
    foto TEXT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    clave VARCHAR(15) NOT NULL,
    id_rol INTEGER NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);

CREATE TABLE Salas (
    id_sala SERIAL PRIMARY KEY,
    descripcion TEXT NOT NULL,
    capacidad SMALLINT NOT NULL CHECK (capacidad > 0),
    piso SMALLINT NOT NULL CHECK (piso > 0),
    ocupado BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Reservaciones (
    id_reservacion SERIAL PRIMARY KEY,
    usuario_registrador INTEGER NOT NULL,
    usuario_registrado INTEGER NOT NULL,
    id_sala INTEGER NOT NULL,
    estado INTEGER NOT NULL,
    fecha_inicio TIMESTAMP NOT NULL,
    fecha_fin TIMESTAMP NOT NULL,
    FOREIGN KEY (usuario_registrador) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (usuario_registrado) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_sala) REFERENCES Salas(id_sala),
    FOREIGN KEY (estado) REFERENCES EstadosReservacion(id_er),
    CONSTRAINT check_fecha CHECK (fecha_fin > fecha_inicio)
);