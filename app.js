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
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
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
    console.log("file succesfully written! Please copy file to another directory before using program again, as it will overwrite your file.");
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
        if (data.choice=== "Yes Please!") {
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
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
