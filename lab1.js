// COMP3133 Lab 1 Practice Questions
// Thomas Carlberg 101155271

// Ex 1
function greeter(myArray, counter) {
    const greetText = "Hello ";

    myArray.forEach(element => {
        console.log(greetText + element.toString());
    });
}
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3); // wait what is the point of counter


// Ex 2
//const capitalize = (word) => { return word[0].toUpperCase() + word.substring(1); }  // without spread operator ...
const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
}

console.log(capitalize('foobar'));
console.log(capitalize('lower'));


// Ex 3
const colours = ['red', 'green', 'blue'];
const capitalizedColours = colours.map(colour => capitalize(colour));

console.log(capitalizedColours);


// Ex 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(x => x < 20);
console.log(filterLessThan20);


// Ex 5
var array = [1, 2, 3, 4]
const sum = (accumulator, current) => accumulator + current;
const product = (accumulator, current) => accumulator * current;
let calculateSum = array.reduce(sum);
let calculateProduct = array.reduce(product);

console.log(calculateSum);
console.log(calculateProduct);


// Ex 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return "Model: " + this.model + " " + this.year;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return this.model + " has a balance of $" + this.balance.toLocaleString();
    }
}

const car = new Car("Pontiac Firebird", 1976);
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(car.details());
console.log(sedan.info());