//Fonction

//ES5
function getTrue() {
    return true;
}

getTrue();
let resultat = getTrue();
console.log(getTrue())
console.log(resultat)

// ES6
const helloWorldES6 = () => {
    return 'Hello World';
}


resultat = helloWorldES6();
console.log(resultat)


const getString = (str) => {
    return str;
}

let name = 'toto';
let myNam = getString(name);
console.log(myNam);

const concatenate = (str, nombre, str2) => {
    return str + nombre + str2;
}

let conca = concatenate("j'ai ", 28, " ans");
console.log(conca)

let text = 'Hello World';
let text1 = 'Hello World1';
let text2 = 'Hello World2';

const displayText = (text) => {
    console.log(text)
}

displayText(text);




displayText(text2);



const compareNb = (nb, nb2) => {
    if (nb > nb2) {
        return ("Le premier nombre est plus grand");
    } else if (nb < nb2) {
        return ("Le premier nombre est plus petit");
    } else if (nb === nb2) {
        return ("Les deux nombres sont identiques");
    } else {
        return ("error");
    };
}

let result = compareNb(10, 5);
console.log(result);
 console.log(compareNb(2, 8));
console.log(compareNb(2, 2));
console.log(compareNb(2, 'de'));