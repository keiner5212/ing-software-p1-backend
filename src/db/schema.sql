DROP DATABASE IF EXISTS p1_ing_software;

CREATE DATABASE p1_ing_software;

\c p1_ing_software;

CREATE TABLE Usuarios (
    cedula INTEGER(20) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(15) NOT NULL,
    idRol INTEGER NOT NULL,
    FOREIGN KEY (idRol) REFERENCES Roles(id)
);

CREATE TABLE Salas (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT NOT NULL,
    capacidad TINYINT NOT NULL CHECK (capacidad > 0),
    piso TINYINT NOT NULL CHECK (piso > 0),
    ocupado BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Reservaciones (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    usuarioRegistrador INTEGER NOT NULL,
    usuarioRegistrado INTEGER NOT NULL,
    idSala INTEGER NOT NULL,
    estado INTEGER NOT NULL,
    fechaInicio DATETIME NOT NULL,
    fechaFin DATETIME NOT NULL,
    FOREIGN KEY (usuarioRegistrador) REFERENCES Usuarios(cedula),
    FOREIGN KEY (usuarioRegistrado) REFERENCES Usuarios(cedula),
    FOREIGN KEY (idSala) REFERENCES Salas(id),
    FOREIGN KEY (estado) REFERENCES EstadosReservacion(id)
);

CREATE TABLE Roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    Rol VARCHAR(30) NOT NULL DEFAULT 'Docente'
);

CREATE TABLE EstadosReservacion (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(20) NOT NULL UNIQUE 
);

ALTER TABLE Reservaciones ADD CONSTRAINT check_fecha CHECK (fechaFin > fechaInicio);