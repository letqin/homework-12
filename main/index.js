const inquirer = require('inquirer')
const cTable = require('console.table')

    // might be needed but might be for internet based application
// const path = require("path")
// require("dotenv").config({
//     path:path.resolve(__dirname, "./")
// })

function promptUser() {
    // view all departments
    // view all roles
    // view all employees
    // add a department
    // add a role
    // add an employee
    // update an employee role
    // quit
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'quit'],
        },
    ])
    .then((answers) => {
        switch (answers.options) {
        case 'view all positions':
        viewAllPositions()
        break
        case 'view all departments':
        console.log('view all departments')
        promptUser()
        break
        case 'view all employees':
        console.log('view all employees')
        promptUser()
        break
        case 'add a department':
        console.log('add a department')
        promptUser()
        break
        default:
        console.log('default')
        console.log('quit')
        process.exit(0)
        }
    });
};

function viewAllPositions() {
    const employeeRoles = [
    {
    name: 'foo',
    age: 10,
    },
    {
    name: 'bar',
    age: 20,
    },
    ]

    setTimeout(() => {
    console.log('view all roles');

    console.log('the users roles displayed in a fancy table here, but I dont know how to do that yet');
    console.log('-------------------------------------------------------');
    console.log('Imagine this is the roles table below...:nerd_face:');
    console.table(employeeRoles);
    console.log('-------------------------------------------------------');

    promptUser();
    }, 3000);
};

promptUser();