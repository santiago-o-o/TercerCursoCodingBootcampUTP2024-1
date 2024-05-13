CREATE DATABASE TiendaOnline;

USE TiendaOnline;

CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Email VARCHAR(100),
    Telefono VARCHAR(15)
);
CREATE TABLE Productos (
    ProductoID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Precio DECIMAL(10,2),
    ProveedorID INT,
    FOREIGN KEY (ProveedorID) REFERENCES Proveedores(ProveedorID)
);
CREATE TABLE Proveedores (
    ProveedorID INT PRIMARY KEY AUTO_INCREMENT,
    NombreEmpresa VARCHAR(100),
    Contacto VARCHAR(50),
    Telefono VARCHAR(15)
);
CREATE TABLE Ventas (
    VentaID INT PRIMARY KEY AUTO_INCREMENT,
    ClienteID INT,
    ProductoID INT,
    FechaVenta DATE,
    Cantidad INT,
    PrecioUnitario DECIMAL(10,2),
    TotalVenta DECIMAL(10,2),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);
INSERT INTO Clientes (Nombre, Apellido, Email, Telefono)
VALUES ('Juan', 'Perez', 'juan@utp.com', '1234567890'),
       ('María', 'García', 'maria@utp.com', '0987654321'),
       ('favian' , 'ordonez', 'favian@utp.com', '3456787890'),
       ('johana', 'ortiz', 'johana@utp.com', '3221456789'),
       ('ramon' , 'cordoba', 'favian@utp.com', '3456787890'),
       ('santiago', 'diaz', 'johana@utp.com', '3221456789'),
       ('segundo' , 'hermosa', 'segundo@utp.com', '3456723850'),
       ('lorena', 'palacios', 'lorena@utp.com', '3425457579'),
       ('alba' , 'vellota', 'alba@utp.com', '32557728580'),
       ('anderson', 'morales', 'anderson@utp.com', '3421352379');
       
INSERT INTO Proveedores (NombreEmpresa, Contacto, Telefono)
VALUES ('prendas adodas', 'Carlos', '3224563246'),
       ('zapatos niqe', 'Ana', '324521665'),
       ('set zapatos', 'edison', '32458735446'),
       ('drop predas', 'pablo', '324557345'),
       ('x gorras', 'pepito', '3548935446'),
       ('z relojes', 'juanita', '3426877445'),
       ('good guantes', 'antonio', '3248632346'),
       ('top joyeria', 'malcom', '3236327545'),
       ('nice medias', 'carola', '3223433446'),
       ('visual gafas', 'hector', '3647823490');
select * FROM Proveedores;
INSERT INTO Productos (Nombre, Precio, ProveedorID)
VALUES ('busoBad', 120.00, 1),
       ('yordanuno', 375.00, 2),
       ('camisaSet', 90.00, 3),
       ('offwhite', 250.00, 4),
       ('xbeisbol', 160.00, 5),
       ('dijitalWhact', 300.00, 6),
       ('guantesGood', 60.00, 7),
       ('cadenaDorada', 380.00, 8),
       ('abrigadas', 10.00, 9),
       ('whactblack', 89.00, 10);
select * from productos;
INSERT INTO Ventas (ClienteID, ProductoID, FechaVenta, Cantidad, PrecioUnitario, TotalVenta)
VALUES (1, 1, '2024-05-10', 2, 120.00, 240.00),
       (2, 2, '2024-05-11', 1, 375.00, 375.00),
       (3, 3, '2024-05-10', 3, 90.00, 270.00),
       (4, 4, '2024-05-11', 2, 250.00, 500.00),
       (5, 5, '2024-05-10', 5, 160.00, 800.00),
       (6, 6, '2024-05-11', 1, 300.00, 300.00),
       (7, 7, '2024-05-10', 2, 60.00, 120.00),
       (8, 8, '2024-05-13', 1, 380.00, 380.00),
       (9, 9, '2024-05-10', 6, 10.00, 60.00),
       (9, 9, '2024-05-13', 1, 89.00, 89.00);
select * from ventas;
SELECT V.VentaID, V.FechaVenta, C.Nombre AS Cliente, P.Nombre AS Producto, V.Cantidad, V.PrecioUnitario, V.TotalVenta
FROM Ventas V
JOIN Clientes C ON V.ClienteID = C.ClienteID
JOIN Productos P ON V.ProductoID = P.ProductoID
WHERE V.VentaID = 1;

INSERT INTO Clientes (Nombre, Apellido, Email, Telefono)
VALUES ('Pedro', 'López', 'pedro@utp.com', '3422334455');

UPDATE Clientes
SET Telefono = '5555555555'
WHERE ClienteID = 3;

SELECT * FROM Clientes WHERE Nombre LIKE '%María%';

SELECT * FROM Proveedores WHERE Contacto LIKE '%pablo%';

SELECT SUM(TotalVenta) AS VentasUltimoDia
FROM Ventas
WHERE FechaVenta = CURDATE();

SELECT SUM(TotalVenta) AS VentasUltimaSemana
FROM Ventas
WHERE FechaVenta BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 WEEK) AND CURDATE();

SELECT SUM(TotalVenta) AS VentasUltimoMes
FROM Ventas
WHERE FechaVenta BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 MONTH) AND CURDATE();

SELECT SUM(TotalVenta) AS IngresosTotales
FROM Ventas;

SELECT P.Nombre AS Producto, SUM(V.Cantidad) AS TotalVendido
FROM Ventas V
JOIN Productos P ON V.ProductoID = P.ProductoID
GROUP BY P.ProductoID
ORDER BY TotalVendido DESC
LIMIT 5;

