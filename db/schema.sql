DROP DATABASE IF EXISTS listing_db;
CREATE DATABASE listing_db;
USE listing_db;

CREATE TABLE search
(
    id int NOT NULL
    AUTO_INCREMENT,
	keyword VARCHAR
    (100),
	city VARCHAR
    (100),
	PRIMARY KEY
    (id)
);

    CREATE TABLE listing
    (
        id int NOT NULL
        AUTO_INCREMENT,
    companyName VARCHAR
        (100),
    title VARCHAR
        (100),
	summary VARCHAR
        (100),
	locality VARCHAR
        (100),
    dateCreated VARCHAR
        (100),
	PRIMARY KEY
        (id)
);