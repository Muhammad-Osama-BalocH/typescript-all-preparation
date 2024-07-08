//Abstract Class

// Abstract class Animal, jo ek abstract method makeSound() declare karti hai
abstract class Animal {

    abstract makeSound(): void; // Abstract method

    move(): void {
        console.log("Roaming the earth..."); // Common method for all animals
    }
}

// Dog class jo Animal class ko extend karti hai aur makeSound() method ki implementation deti hai
class Dog extends Animal {

    makeSound(): void {
        console.log("Bark!"); // Dog ka sound
    }
}

// Dog class ka instance create karte hain
let myDog = new Dog();

myDog.makeSound(); // Bark!

myDog.move(); // Roaming the earth...

//Encapsulation

// Person class jisme private aur public properties hain
class Person {
    private ssn: string; // Private property, sirf is class ke andar access ho sakti hai
    public name: string; // Public property, har jagah se access ho sakti hai

    constructor(ssn: string, name: string) {
        this.ssn = ssn; // Constructor ke zariye ssn set kiya jata hai
        this.name = name; // Constructor ke zariye name set kiya jata hai
    }

    public getSsn(): string {
        return this.ssn; // Getter method jo private property ko access karne ka tareeqa provide karta hai
    }
}

// Person class ka instance create karte hain
let person = new Person("123-45-6789", "John Doe");
console.log(person.name); // John Doe
console.log(person.getSsn()); // 123-45-6789

//Inheritance

// Vehicle class jo move() method define karti hai
class Vehicle {
    move(): void {
        console.log("The vehicle is moving..."); // Common method for all vehicles
    }
}

// Car class jo Vehicle class ko extend karti hai
class Car extends Vehicle {
    move(): void {
        console.log("The car is driving..."); // Car ki specific implementation
    }
}

// Car class ka instance create karte hain
let myCar = new Car();
myCar.move(); // The car is driving...


//Polymorphism

// Shape class jo area() method define karti hai
class Shape {
    area(): void {
        console.log("Calculating area..."); // Base method for calculating area
    }
}

// Circle class jo Shape class ko extend karti hai aur area() method ki implementation deti hai
class Circle extends Shape {
    area(): void {
        console.log("Area of circle: πr²"); // Circle ki specific implementation
    }
}

// Square class jo Shape class ko extend karti hai aur area() method ki implementation deti hai
class Square extends Shape {
    area(): void {
        console.log("Area of square: side²"); // Square ki specific implementation
    }
}

// Different shapes ka array create karte hain
let shapes: Shape[] = [new Circle(), new Square()];
shapes.forEach(shape => shape.area()); // Har shape ka area method call karte hain


//public 


// Car class jisme public property brand hai
// class Car {
//     public brand: string; // Public property, har jagah se access ho sakti hai

//     constructor(brand: string) {
//         this.brand = brand; // Constructor ke zariye brand set kiya jata hai
//     }
// }

// // Car class ka instance create karte hain
// let myCar = new Car("Toyota");
// console.log(myCar.brand); // Toyota

//projected

// Vehicle class jisme protected property speed hai
// class Vehicle {
//     protected speed: number = 60; // Protected property, sirf class aur subclasses me access ho sakti hai
// }

// // Bike class jo Vehicle class ko extend karti hai
// class Bike extends Vehicle {
//     showSpeed(): void {
//         console.log(this.speed); // Speed property ko access kar rahi hai
//     }
// }

// // Bike class ka instance create karte hain
// let myBike = new Bike();
// myBike.showSpeed(); // 60

//private

// Employee class jisme private property salary hai
class Employee {
    private salary: number; // Private property, sirf class ke andar access ho sakti hai

    constructor(salary: number) {
        this.salary = salary; // Constructor ke zariye salary set ki jati hai
    }

    public getSalary(): number {
        return this.salary; // Getter method jo private property ko access karne ka tareeqa provide karta hai
    }
}

// Employee class ka instance create karte hain
let employee = new Employee(50000);
console.log(employee.getSalary()); // 50000




