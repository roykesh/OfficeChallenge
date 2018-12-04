class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }
    work(office) {
        for (let i = 0; i < 10; i++) {
            let doc = new Document(this.name);
            office.documents.push(doc)
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name;
        this.employees = []
    }

    hireEmployee(name) {
        const e = new Employee(name)
        this.employees.push(e)
    }

    askEmployeesToWork(office) {
        this.employees.forEach(e => e.work(office))
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }

    clean() {
        console.log('Clean')
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireManager(name) {
        let m = new Manager(name);
        this.managers.push(m);
    }
    hireCleaner(name) {
        let c = new Cleaner(name);
        this.cleaners.push(c);
    }

    startWorkDay() {
        this.managers.forEach(m => m.askEmployeesToWork(this));
        this.cleaners.forEach(c => c.clean())
    }
}