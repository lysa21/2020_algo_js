let prenoms = ["Thomas", "Sarah", "Alexandre", "Alexandre", "Mélodie", "Jonathan", "Laure"];



console.log(prenoms.length);
for (let i = 0; i < prenoms.length; i++) {
    console.log(prenoms[i])
}


console.time('start')

function removeDuplicates(array) {
    let x = {};
    array.forEach(function (i) {
        console.log('object', x[i])
        console.log('x ', x)

        if (!x[i]) {
            console.log(x)
            x[i] = true
        }
    })
    return Object.keys(x)
};



console.log(removeDuplicates(prenoms))


console.timeEnd('start')

console.time('ES6')

const uniqueSet = new Set(prenoms);
console.log(uniqueSet)
prenoms = Array.from(uniqueSet);


console.timeEnd('ES6')


console.log(prenoms.join(", "));



// const prenoms = ["Thomas", "Sarah", "Mélodie", "Alexandre", "Alexandre", , "Mélodie", "Jonathan", "Laure", "Sarah"]
// for (let i = 0; i < prenoms.length; i++) {
//     for (let j = 0; j < prenoms.length; j++) {
//         if (prenoms[i] == prenoms[j] && i != j) {
//             prenoms.splice(i, 1)
//         }
//     }
// }
// var prenoms2 = prenoms.join(',')
// console.log(prenoms2)