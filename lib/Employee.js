class Employee {
    constructor(input) {
        this.name= input.name;
        this.id= input.id;
        this.email= input.email;
        this.getName= () => {
            return this.name
        }
        this.getId= () => {
            return this.id
        }
        this.getEmail= () => {
            return this.email
        }
        this.getRole= () => {
            return "Employee"
        }
    }
}

module.exports= Employee;