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
const dogeArray = [];
const reverse_dogeArray = dogeArray.reverse();

const dog1 = prompt("Give first dog name:");
const dog2 = prompt("Give second dog name:");
const dog3 = prompt("Give third dog name:");
const dog4 = prompt("Give fourth dog name:");
const dog5 = prompt("Give fifth dog name:");
const dog6 = prompt("Give sixth dog name:");
dogeArray.push(dog1)
dogeArray.push(dog2)
dogeArray.push(dog3)
dogeArray.push(dog4)
dogeArray.push(dog5)
dogeArray.push(dog6)

let reverse_doge = document.getElementById(reverseDoge);
reverse_dogeArray.forEach((item)=>{
    let dogee = document.createElement("reverseDoge");
    dogee.innerText = item;
    reverse_doge.appendChild(li);
})
//2.4 2p
function numbers(){
    var numbers = 0;
    const outmsg = "";
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
    //2.5 2p
function numbersrep(){
    var number = 0;
    const outmsg = "";
    const numberArray = new Array(number);
    continuing = true

    while (continuing) = true {
        numbersrep = prompt
    }
}

  //  do {
  //      number = prompt('press 0 to cancel', 0);
 //       if (numberArray.includes(number)) {
           // console.log(numberArray);
         //   break;
       // } else {
     //       numberArray.push(number);
   //     }
 //   }while(!(isNaN(numbersrep)));}

//2.10 - palautuksen jälkeen lisätty
let ehdokkaat = [] //tyhjä taulukko

let ehdokasLkm = +prompt("Kuinka monta ehdokasta?") //kysytään ehdokasmäärä

//for-rakenteessa kysytään ehdokkaan nimi
//luodaan uusi ehdokas-tietorakenne ja lisätään se ehdokkaat-taulukkoon
for (let i = 1; i <= ehdokasLkm; i++) {
    let nimi = prompt("Anna ehdokkaan nro "+i+"nimi:")
    //luodaab uusi tietorakenne ehdokasta varten
    let ehdokas = {
        name: nimi,
        votes: 0,
    }
    ehdokkaat.push(ehdokas) //lisätään luotu ehdokas taulukkoon
}