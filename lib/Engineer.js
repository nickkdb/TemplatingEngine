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


