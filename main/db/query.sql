SELECT * FROM employees AS employee, position.department
FROM position
LEFT JOIN employees
ON position.employee_id = employees.id
ORDER BY employee.first_name;