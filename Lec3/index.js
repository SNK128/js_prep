//MATH Object
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(1.5));
console.log(Math.max(2,4,2,2,5,3));
console.log(Math.abs(-90));

//Strings.......primitive and object string

let firstName="Sagnik"; // primitive string
let lastName= new String("Nayak");  // object
console.log(typeof(firstName) + typeof(lastName))


// console.log(firstName.length);
// console.log(lastName[0]);
// console.log(lastName.includes('ya'));
// console.log(firstName.startsWith('Sa'));
// console.log(lastName.endsWith('K'));
// console.log(firstName.toUpperCase());

// lastName.trim();//deletes the starting and ending spaces    ..there is also trimStart and trimEnd

// console.log(lastName.replace('Nay','Ni'))

let message="My name is Sagnik Nayak";
let words=message.split(' '); // split the string around the characters provided
console.log(words)


//TEMPLATE LITERAL(read online)

let text=`This is my \n first string
and this is second
and my name is ,${firstName}`; //place holdeer
console.log(text)


//Date-Time
let date=new Date();
console.log(date);

let date1=new Date('June 20 1998 07:15');
console.log(date1);

let date2=new Date(1998, 11, 20, 7);
console.log(date2);


date2.setFullYear(1947);
console.log(date2);


//Array

let arr=[1,2,3,4];
console.log(arr);
//insertion
arr.push(9);//end
arr.unshift(0);//begin
arr.splice(2,0,'a','c');//in between
console.log(arr);


//searching
console.log(arr.indexOf('c'));

console.log(arr.indexOf('q'));


//we want to check if a number exist in an array
if(arr.indexOf(4)!=-1)
    console.log("present");

//or
console.log(arr.includes('a'));

//set the starting index of a search
console.log(arr.indexOf(1,2));








//object array
let courses= [
    {no:1, naam:'sunny'},
    {no:2, naam:'sagnik'}
];

console.log(courses)

//cant use includes,indexOF etc as they are object ,,,,not primitive array
//it can be done by using callBack function

let course2=courses.find(function(course2) {
    return course2.naam=='kilvish'
});// wrong name leads to undefined error
//let course=courses.find(predicate function);
console.log(course2)
//arrow function
// let course1=courses.find(function(course1) {
//     return course1.naam=='sunny'
// });
let course1=courses.find((course1)=>course1.naam=='sunny');
console.log(course1)


//removing element in an array
//end...pop()
//begin...shift()
//middle...splice(starting index,no, of elements)


let numbers=[1,2,3,4,5,6,7,8,9];
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(2,3);
console.log(numbers);

//emptying an array

// concept ..arrays are object...a=b means addr is copied not values
//let a=[1,2,3]
//let b=a
//both a=b=[1,2,3] means both a&b will point to [1,2,3]
//now a=[] means a will point to []
//b will still point to [1,2,3]
//if we do a.length()=0..now both a and b will be []
//another way is a.splice(0,a.length())...now both a and b will be []
//another way using loop, keep poping till end


// //combining and slicing the array
// let first=[1,2,3]
// let second=[4,5,6,7,8,9];

// let combined=first.concat(second);
// console.log(combined);

// let marks=[10,20,30,40,50,60,70];
// let sliced=marks.slice(2,6);  //slice(startingIndex[included],endingIndex[excluded])
// console.log(sliced);

// let sliced1=marks.slice(2);
// console.log(sliced1);

// let sliced2=marks.slice();
// console.log(sliced2);






//spread operator
let first=[1,2,3];
let second=[4,5,6];

let combined=[...first,...second]
console.log(combined)

let combined1=[...first,'a',false,...second,true,'c']
console.log(combined1)





//iterate an array..
//for of
let array=[1,2,3,4,5];
for(let value of array) {
    console.log(value)
}

//forEach loop
array.forEach(number => console.log(number));


//joning and spliting arrays

let aaa=[1,2,3,4,5,6,0]
const joined=aaa.join(',');
console.log(joined) //converted into a single string
 let msg='This is my first string';
 let parts=msg.split(' ');
 console.log(parts);
 console.log(parts.join('_'))



//sort  ..first converts the elements into strigng and then sort im=n accroding to UTF-16
aaa.sort();
aaa.reverse()
console.log(aaa);




//fitering
let store=[1,-9,31,-90,-43];
let filtered=store.filter(function(value) {
    return value>=0;
});
console.log(filtered)


//mapping....maps each element of array to something else
let mpp=[7,8,9,10];
console.log(mpp);
let items=mpp.map(function(value) {
    return 'student_no'+value;
});
console.log(items)



//mapping an object
// let item1=mpp.map(num => {value:num});
// console.log(item1)

let nn=[1,2,-6,-9];
let items2=nn
.filter(value=>value>=0)
.map(num=>{value:num});

console.log(items2)


