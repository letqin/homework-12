const { prompts } = require("inquirer");
const inquirer = require("inquirer");
const db = require("./db/connection");
require("console.table");

// declare arrays for the database information
let depts = [];
let roles = [];
let managers = [ {name: "None", value: "NULL"} ];
let positions = [];

function promptUser() {
    inquirer 
      // initial set of questions for the user
    .prompt([
        {
        type: 'list',
        name: 'options',
        message: 'what would you like to do?',
        choices: [
        'view all departments',
        'view all positions',
        'view all employees',
        'add a department', 
        'add a position',
        'add an employee',
        'quit'
        ],
        },
    ])
    // second menu based on initial command
    .then((answers) => {
        switch (answers.options) {
        case 'view all employees':
        console.log("back")
        break
        case 'view all departments':
        console.log('view all departments')
        break
        case 'view all positions':
        viewAllPositions()
        break
        case 'add a department':
        console.log('add a department')
        promptUser([
            {
            type: 'list',
            name: 'options',
            message: 'what would you like to name the new department?'
            }
        ])
        break
        default:
        console.log('default')
        console.log('quit')
        process.exit(0)
        }
    })
}

// functions to perform the specified command

const getDepartments = () => {
    db.query(`SELECT * FROM department`, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.table(results);
            prompts();
        }
    })
}

const getEmployees = () => {
    db.query(`SELECT id,
    concat(employee.first_name, " ", employee.last_name) AS full_name
    FROM employee`, (err, results) => {
        results.forEach(e => {
            employees.push({name: e.full_name, })
        })
    })
}

promptUser();