INSERT INTO department (department_name)
VALUES  ("Aerospace"),
        ("Finance"),
        ("Legal"),
        ("Janitorial"),
        ("Public Relations");

INSERT INTO position (title, salary, department_id)
VALUES  ("Crash Test Dummy", 200000.00, 1),
        ("Accountant", 200000.00, 5),
        ("Lawyer", 1500000.00, 4),
        ("Static Fire Cleanup", 80000.00, 2),
        ("Public Relations Manager", 150000.00, 3);

INSERT INTO employees (first_name, last_name, position_id, manager_id)
VALUES  ("Buster", "Brown",),
        ("Finance"),
        ("Legal"),
        ("Janitorial"),
        ("Public Relations");
