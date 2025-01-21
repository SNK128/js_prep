console.log("Namaste Duniya version 3");

//let is locally scoped and var is globally scoped


var b=9;
console.log(b);
//redeclaration of var is possible
var b=10;
console.log(b);
{
    b="change num b to string b";
}
console.log(b);


let a="SNK";
console.log(a);
// can redeclare 'a' as  let a ="SNKK"
a=95;
console.log(a);
a="SNK";
console.log(a);

//constant
//neither be re-declared nor be re-initialized
const num=9;


//dynamic typing
let demo=9;
 demo="sunny";

 //reference types: Object,arrays,functions

 //object
 let person={  // object name
    firstName: "love", //property name
    age:24
 };

 console.log(person['age']);
 console.log(person.age);

 //arrays- data structure used to contain list of items not necesarily of same data type
let names=['love','rahul','sangram'];
console.log(names[3]); //undefined
names[3]='apoorva';
console.log(names[3]);

//operators
//precedence
//control statement  if-else,switch


// LOOPS

// for
for(let i=1;i<=5;i++)
    console.log("SNK"+i);
// while
let j=1;
while(j<=5) {
    console.log("SNK"+j);
    j++;
}
// do-while
let k=1;
do {
    console.log("SNK"+k);
    k++;

}while(k<=5)