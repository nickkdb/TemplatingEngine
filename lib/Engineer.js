// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee= require('./Employee');

class Engineer extends Employee {
    constructor(input) {
        super(input);
        this.github= input.github;
        this.getGithub= () => {
            return this.gitHub;
        }
        this.getRole= () => {
            return "Engineer";
        }
    }
}

module.exports= Engineer;


