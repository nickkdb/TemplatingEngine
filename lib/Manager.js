const Employee= require("./Employee");

class Manager extends Employee {
    constructor(input) {
        super(input);
        this.officeNumber= input.office;
        this.getRole= () => {
            return "Manager";
        }
    }
}

module.exports= Manager;