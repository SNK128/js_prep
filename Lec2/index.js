//object ke andhar collection of key value pair hota hai

console.log("connecting..");


//object creation
// let rectangle= {
//     //property
//     length:1,
//     breadth:2,

//     //behaviour
//     draw: function() {
//         console.log('Drawing rectangle');
//     }
// };



//its a oop










//factory function --yaha pe object create hote hai upon object creation request through a function call
function createRectangle() {
    return rectangle= {
        length:1,
        breadth:2,

        // draw: function() {
        //     console.log("drawing rectangle");
        // }
        draw() {
            console.log("drawng rectangle");
        }
    };
   // return rectangle;
}

    let rectangleObj=createRectangle(); 
//   keyword  variableName    createObject();



function createRectangle(l,b) {
    return rectangle= {
        l,// length:l,  
        b,// breadth:b,

        // draw: function() {
        //     console.log("drawing rectangle");
        // }
        draw() {
            console.log("drawng rectangle");
        }
    };
   // return rectangle;
}


let rectangleObj1=createRectangle(5,4);









//Constructor Function ->pascal notation
//Constructor Function ->properties/methods -> initialise/Define
function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;
    this.draw=function() {
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObject= new Rectangle(4,6);
rectangleObject.color='yellow';
console.log(rectangleObject);
delete rectangleObject.color;

console.log(rectangleObject);


///////////////////////////////////////////////////
//Dynamic nature of Objects
let a={
    l:1,
    b:2,
    draw() {
        console.log("drawng rectangle");
    }
    
};
a.c=10;
delete a.draw;



//every obj has a constructor....rectangleObject's constructor function-> Rectangle.......Rectangle's constructor function-> Function


//back-tick character``...used to pass entire code
let Rectangle1=new Function(
    'length','breadth',
    `this.length=length;
    this.breadth=breadth;
    this.draw=function() {
        console.log('drawing');
    }`);

    let rect=new Rectangle1(2,3);







    //functions are oject

    //Types in JS
    // Primitive or value types -- Number,string,Boolean,undefined,null    (copy by value)
    // Reference types or Objects -- functions,objects,Array                (copied by address)


    // let a1=10;
    // function inc(a1) {
    //     a1++;
    // }
    // inc(a1);
    // console.log(a1);



    let a2={value:10};
    function inc2(a2) {
        a2.value++;
    }
    inc2(a2);
    console.log(a2);





    //For in

    let square= {
        s1:10,
        s2:20
    };
    for(let key in square) {
        console.log(key,square[key]);
    }


    //For of/.....mostly used for iterables like arrays and maps



    //throws error as rectangle is not iterable
    //for(let key of rectangle)
    // console.log(key);


    for(let key of Object.entries(rectangle)) {
        console.log(key);
    }

    if('s1' in square) {
        console.log('Present');
    }
    else{
        console.log('Absent')
    }
    




    //object cloning...iteration,Assign,Spread

    //iteration
    let src= {
        a:10,
        b:20,
        c:30
    };
    let dest= {};
    for(let key in src) {
        dest[key]=src[key];
    }


    //assign
    let dest1= Object.assign({},src);

    //spread
    let dest3={...src};


    //Garbage Collection

    //garbage collector is tool in js which finds out the memory that are not in use and deallocate their memory
    //we have no contro1 in garbage collector
    //automatically

