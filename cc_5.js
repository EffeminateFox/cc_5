// Defines employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }

    // Method to calculate and return the normal annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Manager subclass
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    // Overrides the annual salary calculation to include a 15% bonus with salary
    calculateAnnualSalary() {
        const annualSalary = super.calculateAnnualSalary();
        const bonus = annualSalary * 0.15;
        const totalSalaryWithBonus = annualSalary + bonus;
        console.log(`Salary: ${annualSalary}, Bonus: ${bonus}, Total Salary with Bonus: ${totalSalaryWithBonus}`);
        return totalSalaryWithBonus;
    }
}

// Instantiate Managers with test data
const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
const manager2 = new Manager('Debbie Little', 7205, 'Finance');

// Calculate and log their annual salaries and as well as including bonuses
manager1.calculateAnnualSalary();
manager2.calculateAnnualSalary();
