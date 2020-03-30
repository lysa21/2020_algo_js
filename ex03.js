console.log('////////CALCUL')

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