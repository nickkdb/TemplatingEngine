const Employee= require("./Employee");

class Intern extends Employee {
    constructor(input) {
        super(input);
        this.school= input.school;
        this.getSchool= () => {
            return this.school;
        }
        this.getRole= () => {
            return "Intern";
        }
    }
}

module.exports= Intern;