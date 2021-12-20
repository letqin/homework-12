const inquirer = require("inquirer");
const db = require("./db");
require("console.table");


function promptUser() {
    inquirer
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


promptUser();