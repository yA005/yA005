// GLOSSARY

        // DTCIM = Dissect the code in modules

// -------------------------------------------------------------------------------------------------------------------------------------        

// let variable = 5;

// // lets code

// let quotes = "hello pick up the phone ";

// let oats = "okay I will";

// -------------------------------------------------------------------------------------------------------------------------------------------

// // example of escape character

// let okay = "I love \"sherlock holmes\"";

// -------------------------------------------------------------------------------------------------------------------------------------------

// // Most important concept in string

// let str = `This is an example of string template literals ${oats} and ${okay} `;

// ------------------------------------------------------------------------------------------------------------------------------------------------

// let goFOlunch = Math.random();

// if(goFOlunch > 0.1){

//     alert("You are going to have a lunch")
// }

// else{

//     alert("You are not going to have a lunch");
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// // code based on indexof

// let password = prompt("Please ener your password");

// if(password.indexOf(" ") == -1){
//     alert("Your password does not contain any spaces")
// }
// else{
//     alert("Your password contains space in it")
// }

// -------------------------------------------------------------------------------------------------------------------------------------

// // create a code that read/scan the visited website and matches the website with the website submitted by the user

// let websiteName = prompt("Enter a website link");

// if(websiteName === window.location.hostname){
//     alert("The name of the website is same as mentioned above")
// }
// else if(websiteName.indexOf("o") == -1){
//     let websiteName = prompt("Enter a website link");
// }
// else{
//     alert("You have not entered a correct link address. So bye bye!!!!")
// }

// ------------------------------------------------------------------------------------------------------------------------------------------

// let userArray = [];

// userArray = prompt("Enter the elemenys of array")

// let fS = userArray.split(" ");

// let declareArray = [];

// let declareObject = {};

// declareObject.name = "Name of the person";

// declareObject.age = "Age of the person";

// declareObject.address = "Address of the person";

// declareObject.emailId = "Email id of the person";

// declareObject.income = "Income of the person";

// declareArray = prompt("Enter the elements of declareObject");

// // array methods. Important array methods are join(), splice()

// let arrayOne = [1, 2, 3];

// let arrayTwo = [4, 5, 6];

// let arrayThree = arrayOne.includes(arrayTwo);

// // multidimensional array there is no need to put a "," for declaring a new array like the format [[], [], []][[], [], []]

// let multiArray = [
//                 [1, 0, 1],
//                 [1, 0, 1],
//                 [1, 0, 1]
// ][
//                 [1, 0, 1],
//                 [1, 0, 1],
//                 [1, 0, 1]
// ]

// // keywords can be used as key(name of the variable) in objects

// let keywords = {
//     if: "It is a keyword",
//     if_else: "It is a keyword",
//     switch: "It is a keyword",
//     while: "It is a keyword"
// }

// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// let pointString = `The full address of the restaurant is ${restaurant.name}. The address is ${restaurant.address}. The city is ${restaurant.city} and. The state is ${restaurant.state} and. The pincode of the restaurant is ${restaurant.zipcode}`
// let fullAddress = pointString;

// // Arrays

// let array = ["Horse", "Rabbit", "Camel", "Dog", "Giraffe"];

// for(let i = 0; i <= array.length; i++){

//     // console.log(i, array[i]);

//     console.log(`${i}:`, array[i]);
// }


// Nested loop in arrays

const seatingChart = [
    ["K", "E", "N"],
    ["G", "J", "A", "K"],
    ["Y", "S", "J", "E"]
]

// for(let i = 0; i <= seatingChart.length; i++){
    
//      const row = seatingChart[i];
//      console.log(`ROW ${(i - 1) + 1}`);
//     for(let j = 0; j <= row.length; j++){

//         console.log(row[j]);
//     }
// }


// let i = 0;

// let row = null;

// while(i <= seatingChart.length){

//      row = seatingChart[i];

//     i++;

//     let j = 0;

//     while(j <= row.length){

//         console.log(row[j]);

//         j++;
//     }
// }

// The best way to write a multi-dimensional array and if possible make use of  i < l1 and j < l2 condition 



// 1st, need to define some 1D array
var arr1 = ["ABC", 24, 18000];
var arr2 = ["EFG", 30, 30000];
var arr3 = ["IJK", 28, 41000];
var arr4 = ["EFG", 31, 28000];
var arr5 = ["EFG", 29, 35000];
// "salary" defines like a 1D array but it already contains some 1D array
var salary = [arr1, arr2, arr3, arr4, arr5]; 

// This loop is for outer array
for (var i = 0, l1 = salary.length; i < l1; i++) {

    // This loop is for inner-arrays
    for (var j = 0, l2 = salary[i].length; j < l2; j++) {

        // Accessing each elements of inner-array
        console.log( salary[i][j] ); 
    }
}

while(l1 = salary.length, i < l1)

// Do the above code by using while loop and print in the format console.log(salary[i][j])

let k = 0;

while(k <= salary.length){

    k++;

    let l = 0;

    while(l <= salary.length[k]){

        console.log(salary[k][l]);

        l++;
    }


}


// example of while loop

// let number  = prompt("Enter a number");

// while(number>0)!{

//     number  = prompt("Enter a number")
// }

// console.log("Yes, you have entered a positive number");


let no = prompt("Enter a number");

if(no!>0){

    no = prompt("Enter a number")
}

// ------------------------------------------------------------------------------------------------------------------------------------------

// Writing a guessing game

// ---Pseudocode

// Step: 1

// Ask the user for his maximum number

// Step: 2

// Check if the number entered by the user is not a falsey value i.e NaN

// Step: 3

// Ask the user to enter his guess Number

// Step: 4

// If the guess number is greater than the target number then send a message that your guess is to high and vice-versa with the low guess

let maximum = parseInt(prompt("Enter the maximum number"));

// This loop will run only when maximum is falsey 

while(!maximum){

    maximum = parseInt(prompt("Enter the maximum number"));
}

const targetNum = Math.floor(Math.random * maximum) + 1;
console.log(targetNum);

let guess  = parseInt(prompt("Enter your first guess"));

let attempt = 1;
while(parseInt(guess) !=== targetNum){

    if(guess === "q"){

        break;
    }

    attempt++;
    
    if(guess > targetNum){

        guess = prompt("Too high. Enter a new guess");
    }

    else{

        guess = prompt("Too low. Entera new guess");
    }

    if(guess === "q"){

        console.log("Ok you quit");
    }

    else{

        console.log("You win");
    }


}
console.log(`You got it. It took you ${attempt} guesses`);

//------------------------------------------------------------------------------------------------------------------------------------------


// >------FUNCTIONS CODES---------<                                    

function repeat(str, numTimes){

    let result = "";

    for(let i = 0; i < numTimes; i++){

        result += str;

        // >--------THE PLACEMENT OF THE RESULT CAN CHANGE THE OUPTUT VERY MUCH--------<
        
        console.log(result);
    }

    //    console.log(result);  

   
}

// BLOCK SCOPE FUNCTION

let radius = 10;



if(radius > 0){

    console.log(radius);

//    VARIABLE DECLARTION WITH VAR KEYWORD

    var rainbow = 50;

}

// FUNCTION EXECRISE

const square = function(num){
    
    // RETURN SQUARE OF THE GIVEN NUMBER

    return num*num;
}

// CALLING SQUARE FUNCTION

square();


let highScore = 50;

if(highScore !== 100){

    console.log("You are not a high scorer");
}

// EXERCISE 

let sqaure = {

    area: function(n){

        return n*n;
    },

    perimeter: function(side){

        return side * 4;
    }

}

// THIS KEYWORD VIDEO NUMBER 217

let define = {

    name: "Hello World",
    age: 10,
    city: "new york",
    useOFthis: function(){

        console.log(`The name is ${this.name} and his age is ${this.age} and he lives in ${this.city} city`)
    }
}

// EGG LAYING EXERCISE

// DEFINE AN OBJECT CALLED HEN

// IT SHOULD CONTAIN THREE PROPERTIES NAME, EGGCOUNT, AND LAYANEGG AS A FUNCTION

let hen = {

    name: "Helen",
    eggCount: 0,
    layAnEgg: function(){

        this.eggCount += 1;

        return "EGG";
    }
}

// TRY CATCH BLOCK VIDEO NUMBER 218

try{
    // THE SPELLING OF CONSOLE IS WRONG

    conosle.log("The spelling is wrong");
}

catch(e){

    console.log(e);
    console.log("PLEASE SPELL PROPERLY");
}

// METHODS THAT ARE FUNCTIONS ARE DECLARED INSIDE OF AN OBJECT

let anMethod = {

    add: function(x, y){

        a = x;
        b = y;
        let c = a + b;
        console.log(`The addition of ${a} and ${b} is ${c}`);


    },

    subtraction: function(e, f, g){

        console.log("PLEASE ENTER THE THREE VALUES THAT SHOULD BE NUMBER");
        let z = e - f - g;
        console.log(z);

    },

    stringObject: function(name, lastname){

        console.log("Please enter your fullname");
        alert(`The user's fullname is ${name + lastname}`);
    },

    henry: "Is an actor",
    movies: ["Superman", "Batman vs Superman", "Luther", "Mission Impossible"],
    rating: "5 - stars",
    saying: "Amazing actor",

    dataBaseofActor: function(){

        console.log(`The name of the actor is ${this.henry} his movies are ${this.movies} and what rated actor is he ${this.rating}`);
    }    




}

// FOREACH VIDEO NUMBER 221

let exapmle = [1, 2, 3, 4, 5];

exapmle.forEach(element => {
    console.log(element);
});

// THE MAP METHOD VIDEO NO 222

const texts = ["a", "b", "c", "d"];

const caps = texts.map(function (t){

    return t.toUpperCase();
}) 

// ARROW FUNCTIONS IMPLICIT RETURN VIDEO NO 224

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// NORMAL FUNCTION SYNTAX

function add(x, y){

    return x + y;
}

// ARROW FUNCTIONS SYNTAX

const add = (x, y) => {

    return x + y;
}

let objecTwo = {

    add: function(x, y){

        return x + y;
    },

    
}

// AN EXAMPLE FOR SORTING

let arr = [1, 2, 1000, 800, 300];

let check = null;

check = arr[0];

for(let i = 1; i < arr.length; i++){

        if(check > arr[i]){

                check = arr[i];
        }

        console.log(check);
}

function fun(x, y){

    return x - y;
}

// DEFAULT PARAMETER VIDEO NO: 232

// numSides = null;

// if(numSides == undefined){

//         numSides = 6;
// }

// console.log(`The value of numsides now is ${numSides}`);

function numberMultiply(x = 1, y = 5){

    return `The value of ${x} and ${y}`;
}

// SPREAD IN FUNCTION CALLS VIDEO 233

    const spreadNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 200, 300];

    // NOW MAKE USE OF SPREAD FUNCTION IN MATH FUNCTION

    Math.max(...spreadNum);

// SPREAD ARRAY VIDEO NO 234

    // DECLARE TO ARRAY

    const array_one = ["cats", "dogs", "animals"];

    const array_two = ["a", "b", "c"];

    let combine = [...array_one, ...array_two];

// SPREAD WITH OBJECTS NO 235

    const spread_object = {

    name: "Yash",
    city: "kalyan"
    state: "Maharashtra"
    }

const newSpreadObject = {...spread_object, id: 1234, pincode: 421301}

// SPREAD IN FUNCTION VIDEO NO 236

    // MAKE A FUNCTION THAT CONTAINS THREE AGRUMRNTS IN IT

        function raceResult(gold, silver, ...everyone){

            console.log(`Gold medal is won by ${gold} `);
            console.log(`Silver medal is won by ${silver}`);
            console.log(`A a big thanks to everyone for paticipating ${everyone}`);

        }
        



// JSON VIDEO NO 284

        // GET AN API 
        
        let dataJson = {"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}
       
        // CONVERT THAT API(JSON) INTO AN OBJECT

        JSON.parse(dataJson)

        
// WHILE LOOP AND ARRAY MIXTURE

    let todos = ["Learn python"];

    let input = prompt("What would you like to do");

    while(input !=== "quit"){

        // HANDLE INPUT

        if(input === "list"){

            console.log(todos);

    }

    else if(input === "new"){

            let newTodo = prompt("What would you like to add");

            todos.push(newTodo);
    }

    // ASK FOR INPUT AGAIN FROM THE USER

        let input = prompt("What would you like to do");




}

console.log("Okay you are done, and you have exited");

// ---------------------------------------------------------------------------------------------------------------------------------

// CONSTRUCTION FUNCTION IN JS

    // BY USING CONSTRUCTOR WE CAN CREATE OBJECTS SAME AS WE CREATE NORMALLY WITH THIS { } BRACKETS
    
        function Alien(name, tech){

                this.name = name;
                this.tech = tech;
                this.work = function(){

                        console.log("You are using a constructor function");
                }
        }

// ----------------------------------------------------------------------------------------------------------------------------------        

        // NOW WE CREATE  A CONSTRUCTOR THAT WILL MAKE A NEW OBJECT AND WILL PROVIDE VALUES FOR THE ABOVE FUNCTION
        
            let alien_one = new Alien("Yash", "JS");

            let alien_two = new Alien("XYZ", "Java");

            console.log(alien_one);

            console.log(alien_two.work());
   
// -------------------------------------------------------------------------------------------------------------------------------------            

// INTRO TO AXIOS VIDEO NO 289

        // TO USE AXIOS WE HAVE TO INCLUDE THE AXIOS CDN IN THE .HTML FILE

        // DTCIM

            // FIRST THE .get METHOD WILL GET THE CONTENTS OF THE API IN IT

        axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
            
            // HERE .then IS THE FUNCTION AND .res IS AN OBJECT OF THE FUNCTION (FIRST GET THE API THEN GET ME THE PRICE OF THE BITCOIN)

            .then(res =>{
                    console.log(res.data.ticker.price);
            })

            .catch(err =>{
                    console.log("ERROR", err);
            })

            // CODE THAT IS TO BE USE/REFER FOR AXIOS

                // BELOW ASYNC IS A FUNCTION

                const fetchBitcoinPrice = async() =>{
                    
                    try{
                        
                        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
                        console.log(res.data.ticker.price);

                    }
                    
                    catch(e){
                        
                        console.log("ERROR", e);

                    }
                }

                const fetchVolume = async() =>{
                    
                    try{
                        
                        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
                        console.log(res.data.ticker.volume);

                    }
                    
                    catch(e){
                        
                        console.log("ERROR", e);

                    }
                }

// ------------------------------------------------------------------------------------------------------------------------------






