DROP DATABASE IF EXISTS p1_ing_software;

CREATE DATABASE p1_ing_software;

\c p1_ing_software;

CREATE TABLE Roles (
    id SERIAL PRIMARY KEY,
    rol VARCHAR(30) NOT NULL DEFAULT 'Docente'
);

CREATE TABLE EstadosReservacion (
    id SERIAL PRIMARY KEY,
    estado VARCHAR(20) NOT NULL UNIQUE 
);

CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    doc_identidad VARCHAR(50),
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    clave VARCHAR(15) NOT NULL,
    idRol INTEGER NOT NULL,
    FOREIGN KEY (idRol) REFERENCES Roles(id)
);

CREATE TABLE Salas (
    id SERIAL PRIMARY KEY,
    descripcion TEXT NOT NULL,
    capacidad SMALLINT NOT NULL CHECK (capacidad > 0),
    piso SMALLINT NOT NULL CHECK (piso > 0),
    ocupado BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Reservaciones (
    id SERIAL PRIMARY KEY,
    usuarioRegistrador INTEGER NOT NULL,
    usuarioRegistrado INTEGER NOT NULL,
    idSala INTEGER NOT NULL,
    estado INTEGER NOT NULL,
    fechaInicio TIMESTAMP NOT NULL,
    fechaFin TIMESTAMP NOT NULL,
    FOREIGN KEY (usuarioRegistrador) REFERENCES Usuarios(id),
    FOREIGN KEY (usuarioRegistrado) REFERENCES Usuarios(id),
    FOREIGN KEY (idSala) REFERENCES Salas(id),
    FOREIGN KEY (estado) REFERENCES EstadosReservacion(id),
    CONSTRAINT check_fecha CHECK (fechaFin > fechaInicio)
);