const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees= [];

const open= () => {
    inquirer.prompt([
        {
            type: "list",
            name: "open",
            message: "Welcome to the Employee Engine. What would you like to do?",
            choices: ["Build my team!", "Exit Program"]
        }
    ]).then(data => {
        if (data.open === "Exit Program") {
            console.log("Goodbye");
            exitProgram();
        } else {
            buildTeam();
        }
    })
}

const buildTeam= () => {
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "First you must add a Manager to your team. Input name: ",
    },
    {
        type: "input",
        name: "id",
        message: "Input id number: "
    },
    {
        type: "input",
        name: "email",
        message: "Input Email: "
    },
    {
        type: "input",
        name: "office",
        message: "Input office number: "
    }
]).then(data => {
let manager= new Manager(data);
employees.push(manager);

addEmployee();
})
}

const addEmployee= () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "What type of Employee would you like to add next?",
            choices: ["Engineer", "Intern", "Im finished adding employees!"]
        }
    ]).then(data => {
        if (data.employeeType === "Engineer") {
            addEngineer();
        } else if (data.employeeType=== "Intern") {
            addIntern();
        } else {
            checkEmployeeCount();
        }
    })
}

const addEngineer= () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "You've chosen to add an Engineer. Input name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Input id number: "
        },
        {
            type: "input",
            name: "email",
            message: "Input Email: "
        },
        {
            type: "input",
            name: "github",
            message: "Input GitHub username: "
        }
    ]).then(data => {
        let engineer= new Engineer(data);
        employees.push(engineer);
        addEmployee();
    })
}

const addIntern= () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "You've chosen to add an Intern. Input name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Input id number: "
        },
        {
            type: "input",
            name: "email",
            message: "Input Email: "
        },
        {
            type: "input",
            name: "school",
            message: "What school does this intern attended/previously attended?"
        }
    ]).then(data => {
        let intern= new Intern(data);
        employees.push(intern);
        addEmployee();
    })
}

const checkEmployeeCount= () => {
    if (employees.length < 2) {
        console.log('\n', "You must add atleast 2 employees to the engine!", '\n');
        addEmployee();
    } else {
        createHTML();
    }
}

const createHTML= () => {
    let html= render(employees);
    fs.writeFileSync(outputPath, html, (err) => {if (err) throw err;})
    console.log('\n', "file succesfully written! Please copy file to another directory before using program again, as it will overwrite your file.", '\n');
    closing();
}

const closing= () => {
    inquirer.prompt([
        {
            type: "list",
            name: "continue",
            message: "Would you like to build another team?",
            choices: ["Yes Please!", "No, exit program"]
        }
    ]).then(data => {
        if (data.continue=== "Yes Please!") {
            open();
        } else {
            exitProgram();
        }
    })
}

const exitProgram= () => {
    process.exit();
}

open();
