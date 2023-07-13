
function Animal (name){
    this.name = name;
};

Animal.prototype.eat = function () {
    console.log(this.name + ' is eating.');
};

function Cat (name){
    Animal.call(this, name);    // ES5's way of doing super
};

// //                  BAD SOLUTIONS TO INHERIT FROM ANIMAL'S PROTOTYPE
// // bad solution 1
// Cat.prototype.__proto__ = Animal.prototype; // bad practice to set __proto__ directly!
// // it works but is very taxing under the hood!

// // bad solution 2
// Cat.prototype = Animal.prototype;   // making the cat's prototype the same as the cats! (not distinct)
// //(notCat.meow would now work)

// // bad solution 3
// Cat.prototype = new Animal();   // have to do all the Animal constructor logic to create an Animal instance which could be expensiv
// Cat.prototype.constrtuctor = Cat;
// // it works but we don't want to run all the extra constructors, just want to inherit the prototypes


//                  ACTUAL GOOD SOLUTION TO INHERIT PROTOTYPES

// good method 1 (in test)
function Surrogate() {} // dummy constructor
Surrogate.prototype = Animal.prototype;     // Makes Surrogate and Animal Share the same prototype object
Cat.prototype = new Surrogate();     // this point's to the animal's prototype. Also has no expensive constructor function being run
Cat.prototype.constructor = Cat;

// good method 2
Cat.protoype = Object.create(Animal.protoype);
Cat.prototype.constructor = Cat;


Cat.prototype.meow = function(){
    console.log('Meow!');
}

const garfield = new Cat('Garfield')
const notCat = new Animal('bob')


garfield.meow()
garfield.eat()
notCat.meow()   // should error



