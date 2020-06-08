let myVariable = false;
if (myVariable === true) {
    console.log("the conditions has been ebaluated to true");} else {
    console.log(false);
}

let lastline = "This is the last line"
    console.log(lastline)

 let a = 7;    
 if (a < 5) {
      console.log(a / 2);
    } else {
      console.log(a * 2);
    }

let b = 2;    
if (b < 5) {
    console.log(b / 2);
} else {
    console.log(b * 2);
}
let bookCount = 10

for (let i = 0; i < bookCount; i++) {
    console.log(i)}

for (let x=0; x<10; x++) {
    console.log(x);}
    //prints the number from 0-9

let breaktext = "break between exercise"
console.log(breaktext)

for (let x=1; x<=10; x++) {
    console.log(x);}
    //prints the number from 1-10

console.log(breaktext)

for (let i = 0; i <= 20; i += 2){
    console.log(i)}
    //prints even numbers between 0-20
    //az i+=2 olyan mintha az lenne kiirva hogy i=i+2
    
console.log(breaktext)


let printNumbersTill = (numbers) => {
    for (let i = 0; i <= numbers; i ++){
        console.log(numbers)}} 

printNumbersTill(20)


function greet(name) {
    console.log("Hello, " + name + "!");
    }
      
greet("Bob");

console.log(breaktext)

let getGreetingTo = (name) => {
    console.log("Hello, " + name + "!")
}
getGreetingTo("Monyo")

console.log(breaktext)

let getGreetingToAdvance = (name) => {
    return "Hello " + name;  // the return keyword will give you back the result
  };
console.log(getGreetingToAdvance("Mark")) 

console.log(breaktext)

//let myNumbers = [10, 20, 30, 50, 12];


let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log([10, 20, 30, 50, 12][i]);}
};


let text = "This is the last line"
    console.log(text)