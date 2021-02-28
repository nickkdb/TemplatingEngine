const Employee= require("./Employee");

class Manager extends Employee {
    constructor(input) {
        super(input);
        this.officeNumber= input.office;
        this.getRole= () => {
            return "Manager";
        }
        this.getOfficeNumber = () => {
            return this.officeNumber;
        }
    }
}

module.exports= Manager;