class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
        this.owner = null;
    }

    checkOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        }
    }

    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Plate: ${this.plate}`);
        if(this.owner) {
            console.log(`Owner: Name: ${this.name}, age: ${this.age}`);
        } else {
            console.log("Too young to own a car!");
        }
    }
}

const person_1 = new Person("Duck Newcame", 17);
const person_2 = new Person("Harley Wight", 19);
const person_3 = new Person("Darmie Bin", 67);


const car_1 = new Car("Ford", "Mustang", 2019, "ABC-123");
const car_2 = new Car("Chevrolet", "Camaro", 2018, "DEF-456");
const car_3 = new Car("Dodge", "Charger", 2017, "GHI-789");

car_1.checkOwner(person_1);
car_2.checkOwner(person_2);
car_3.checkOwner(person_3);

console.log(`Car 1: `);
car_1.displayInfo();

console.log(`Car 2: `);
car_2.displayInfo();

console.log(`Car 3: `);
car_3.displayInfo();