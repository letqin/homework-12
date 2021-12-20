const mysql = require('mysql12');

// connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: `root`,
      password: `root`,
      database: 'employees_db'
    },
    console.log(`Connected to the TracSmart Employee Management System`)
  );

  connection.connect(function (err) {
    if (err) throw err;
  });

  module.exports = db;
