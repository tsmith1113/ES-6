class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
   
 // The getFullName() method returns a string that combines
 // the first and last names
 getFullName(){
    return this.firstName + " " + this.lastName;
    }
    //Method to update the job title
    updateJobTitle(newJobTitle){
        this.jobTitle = newJobTitle;
    }

    //Method to update the pay rate
    updatePayRate(newPayRate){
        this.payRate = newPayRate;
    }

    //Method to update the intro
    getIntro(){
        return `Hello, my name is ${this.getFullName()}, and I am a ${this.jobTitle}.`;
    }
}
   let employee1 = new Employee(
 1, "Ian", "Auston", "Graphic Artist", 42.50);
// Add fullName property by calling getFullNamme method
employee1.fullName = employee1.getFullName();
console.log(`Employee ${employee1.fullName} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log("-----------------------------------");

employee1.updateJobTitle("Senior Graphic Artist");
employee1.updatePayRate(46.75);

console.log(`Update job title is ${employee1.jobTitle}`);
console.log(`Update pay rate is $${employee1.payRate}`);

console.log("--------------------------");

//display introduction
console.log(employee1.getIntro());

 