//2.1 2p
const nums = [];
const first = prompt("Give first number");
const second = prompt("Give second number");
const third = prompt("Give third number");
const fourth = prompt("Give fourth number");
const fifth = prompt("Give fifth number");
nums.push(first)
nums.push(second)
nums.push(third)
nums.push(fourth)
nums.push(fifth)
for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]);
}
//2.3 2p
const doge = [];
const dog1 = prompt("Give first dog name:");
const dog2 = prompt("Give second dog name:");
const dog3 = prompt("Give third dog name:");
const dog4 = prompt("Give fourth dog name:");
const dog5 = prompt("Give fifth dog name:");
const dog6 = prompt("Give sixth dog name:");
doge.push(dog1)
doge.push(dog2)
doge.push(dog3)
doge.push(dog4)
doge.push(dog5)
doge.push(dog6)
//2.4 2p
function numbers(){
    var numbers = 0;
    const outMessage = "";
    const numbersArray = new Array(numbers);

    do{
        numbers = prompt('press 0 to cancel', 0);
        if(numbers != 0) {
        	numbersArray.push(numbers);
        } else {
        		break;
        }
    }while(!(isNaN(numbers)));

    console.log(numbersArray);
    }