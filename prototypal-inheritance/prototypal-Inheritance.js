
Function.prototype.inherits = function(superClass) { 
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inheritsV2 = function(superClass) { 
    this.prototype = Object.create(superClass.prototype);
    this.prototype.constructor = this;

}


//          TESTING:

function MovingObject (speed) {
    this.speed = speed
}

MovingObject.prototype.speedUp = function() {
    this.speed *= Math.floor(Math.random() * 10);

}

function Ship (speed) {
    this.speed = speed;
}

Ship.prototype.hello = function() {
    return 'hello'
}

// function Asteroid () {
//     function hello() {
//         return 'goodbye'
//     }
    
// }

Ship.inherits(MovingObject);
// Asteroid.inherits(MovingObject);


ship = new Ship;
// asteroid = new Asteroid;
moving = new MovingObject;

console.log(ship.speed);
console.log(ship.speedUp());





// You should be able to define methods/attributes on MovingObject that ship and asteroid instances can use.
// Defining a method on Asteroid's prototype should not mean that a ship can call it.
// Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.
// The Ship and Asteroid prototypes should not be instances of MovingObject.