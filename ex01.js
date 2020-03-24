//////// TYPE
console.log('////////TYPE')

var unNombre = 8.5;
console.log(typeof unNombre);

var chaine = "hello";
console.log(typeof chaine);

var array = ["hello", 8, "world"];
console.log(typeof array);

var bool = true;
console.log('bool :', bool)

var obj = {
    name : 'Leonardo',
    age : 21,
    compétences : ['C1', 'C2', 'C3']
}

console.log('object :', typeof obj)

if ('21' === 21) {
    console.log('strictement égale')
}
else if ('21' == 21) {
    console.log('égale')
}

//////// SCOPE
console.log('////////SCOPE GLOBAL VS LOCAL')

let x = 10;
let y = 9;
if (x > y) {
    let gamma = 12.7 + y;
    i = gamma * x;
}

//console.log(gamma) -> not defined because is a let variable (scope is in block if)

const myName = 'Lysa';
console.log(myName);

let globaleVar = 2;
function hello() {
    console.log('je suis la fonction hello')
    console.log(globaleVar);
    let localVariable = 'local';
    console.log(localVariable)
}

function hello2() {
    let globaleVar = 5;
    console.log('local globarVar in hello2', globaleVar)
    let localVariable = 'local2';
    console.log('local in hello2)', localVariable)
}

hello2();
console.log(globaleVar)
//console.log(localVariable) // no work because is local Variable

