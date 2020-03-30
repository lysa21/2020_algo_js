
//////// BOUCLE
console.log('////////BOUCLE')

let variable = 0;
while (variable < 10)
{
    console.log(variable);
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
