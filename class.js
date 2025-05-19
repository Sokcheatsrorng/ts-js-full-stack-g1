
/**
 * @param {number} x - this is x number
 * @param {number} y - this is y number
*/

// create class object in js
class Student{
    // constructor parameter
    constructor(name, position){
        this.name= name;
        this.position = position;
    }

    // getter and setter 
    getName(){
        return this.name;
    }

    getPosition(){
        return this.position;
    }

    // setter to name and position;
    setName(name){
        this.name = name;
    }

    setPosition(position){
        this.position = position;
    }
}

let student1 = new Student("Sokcheat", "Full Stack Developer"); // assign value to constructor
console.log(student1);

// using setter to set new value
student1.setName("Vannthoung");
student1.setPosition("Backend developer");

// get value from the new set 
console.log(`This is the new init value of Name: ${student1.getName()}`);
console.log(`This is the new init value of Position: ${student1.getPosition()}`);