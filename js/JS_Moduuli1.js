//1.1 1p
console.log("I'm printing to console!");
//1.2 2p
const name = prompt('Type your name.');
console.log(name);
//1.3 3p
const first = prompt("Give first number");
console.log(first);
const second = prompt("Give second number");
console.log(second);
const third = prompt("Give third number");
console.log(third);
const sum = +first + +second + +third;
console.log(sum);
const product = +first * +second * +third;
console.log(product);
const average = +first + +second + +third / 3;
console.log(average);
//1.5 3p
const year = prompt("Give year:");
var booleanYear = false;
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        booleanYear = true;
        console.log(year + ' is a leap year');
    } else {
        booleanYear = false;
        console.log(year + ' is not a leap year');
    }

