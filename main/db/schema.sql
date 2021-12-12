DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE position (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    department VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    FOREIGN KEY (employee)
    REFERENCES employees(id)
    ON DELETE SET NULL
);
