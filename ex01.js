var unNombre = 8.5;
console.log(typeof unNombre);

var chaine = "hello";
console.log(typeof chaine);

var array = ["hello", 8, "world"];
console.log(typeof array);

var bool = true;

var obj = {
    name : 'Leonardo',
    age : 21,
    compétences : ['C1', 'C2', 'C3']
}

console.log('object :', typeof obj)

if ('21' === 21) {
    console.log('strictement égale')
}
else if('21' == 21) {
    console.log('égale')
}

console.log(bool)

let x = 10;
let y = 9;
if (x > y) {
    let gamma = 12.7 + y;
    i = gamma * x;
}
//console.log(gamma)

const myName = 'Lysa';

console.log(myName);



//////// SCOPE

let globaleVar = 2;

function hello() {
    console.log('je suis la fonction hello')
    console.log(globaleVar);
    let localVariable = 'local';
    console.log(localVariable)
}

function hello2() {
    let globaleVar = 5;
    console.log(globaleVar)
    let localVariable = 'local2';
    console.log(localVariable)
}

hello2();


console.log(globaleVar)
//console.log(localVariable)


///// CONDITION
let isLogin = false;

if (isLogin == true) {
    console.log('Connected')
}
else if (isLogin == 0)
{
    console.log('Not Authorized')
}
else {
    console.log('Not value boolean')
}

// Ternaire
//isLogin ? console.log('connected') : console.log('Not connected')

let a = 8;

let b = a + 1;
a = a + 1; //a += 1
a = a * 2; // a *= 2;
b = b - 5; // b -= 5
b = b * b; //b *= b;
a = a + 3 //a +=3;

console.log('a', a)
if (a == 1)
{
   a = a + 2;
}
else {
  a = a + 3;
}
console.log('result', a)

// Boucle

let variable = 0;

while (variable <= 10)
{
    console.log(variable);
   // variable++;
    variable++;
   // variable += 1
}

let tab = ['Yoram', 'Andreia', 'Yassin', 'Miguel'];


let myDiv = document.querySelector('.names');
console.log(myDiv);
tab.forEach((name) => {
    console.log(name)
    myDiv.append(name)


})


//
let helloWorld =  "      Hello world; Montrouge   ";
console.log(helloWorld)

console.log(helloWorld = helloWorld.trim())
console.log(helloWorld)

helloWorld = helloWorld.split(" ");
console.log(helloWorld)


// Fonction
//ES5
function helloW() {

    return true;

}

helloW();

let resultat = helloW();
console.log(helloW())
console.log(resultat)

// ES6

const helloWorldES6 = () => {
    return ['ly', 'lu'];
}

resultat = helloWorldES6();
console.log(resultat)

const stringReturn = (str) => {
    return str;
}

let name = 'toto';

let myNam = stringReturn(name);
console.log(myNam);

const concatenation = (str, nombre, str2) => {
    return str + nombre + str2;
}

let conca = concatenation("j'ai ", 28, " ans");
console.log(conca)


let text = 'Hello World';
let text1 = 'Hello World1';
let text2 = 'Hello World2';

const displayText = (tex) => {
    console.log('unText')
}

//displayText();


displayText(text2);