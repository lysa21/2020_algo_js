//Fonction

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