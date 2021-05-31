CREATE DATABASE db_challenge_eldorado;

USE db_challenge_eldorado;

CREATE TABLE Types(
	Id integer NOT NULL AUTO_INCREMENT,
	Name char(128) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Devices(
	Id integer NOT NULL AUTO_INCREMENT,
	Category integer NOT NULL,
	Color char(16) NOT NULL,
	partNumber integer NOT NULL CHECK(partNumber > 0),
	PRIMARY KEY (id),
	CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES Types(id)
);

#INSERT INTO Types(name) VALUES ("Category 1");
#INSERT INTO Devices(category, color, partNumber) VALUES (1, "Blue", 10);

#SELECT * FROM Types t;
#SELECT * FROM Devices d;