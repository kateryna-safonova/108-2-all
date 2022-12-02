console.log("Klasy - Dziedziczenie")


// ES6

// class Line {
//     constructor(lenght = 0){
//         this.lenght = lenght;
//     }
//     setLenght(lenght = 0){
//         this.lenght = lenght;
//     }
// }

// let linia = new Line(108);
// linia.setLenght(110);
// console.log(linia);

// class Rectangle extends Line {
//     constructor(width = 0, length = 0) {
//          super(length);
//          this.width = width;
//     }
    
//     setWidth(width = 0) {
//         this.width = width;
//     }
// }
    
// let prostokat = new Rectangle(10, 20);
// prostokat.setWidth(100);
// prostokat.setLenght(200);
// console.log(prostokat);

// class Cuboid extends Rectangle{
//     constructor(height = 0, width = 0, lenght = 0){
//         super(width, lenght)
//         this.height = height;
//     }
//     setHeight(height = 0){
//         this.height = height;
//     }
// }
// let prostopadloscian = new Cuboid(40, 50, 60)
// prostopadloscian.setHeight(400);
// prostopadloscian.setWidth(500);
// prostopadloscian.setLenght(600);

// console.log(prostopadloscian)


// ES5


function Line(lenght = 0) {
    this.lenght = lenght
}

Line.prototype.setLenght = function(lenght = 0){
    this.lenght = lenght
}

var linia = new Line(20)
linia.setLenght(100);
console.log(linia)

function Rectangle(width = 0, length = 0){
    Line.call(this, length);
    this.width = width;
}

Rectangle.prototype = Object.create(Line.prototype);
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.setWidth = function(width = 0){
    this.width = width
}

let prostokat = new Rectangle(10,20);
prostokat.setWidth(100);
// prostokat.setLenght(200);
console.log(prostokat);

function Cuboid(height = 0, width = 0, length = 0) {
    Rectangle.call(this, width, length);
    this.height = height;
}

Cuboid.prototype = Object.create(Rectangle.prototype);
Cuboid.prototype.constructor = Cuboid;

Cuboid.prototype.setHeight = function(height = 0) {
    this.height = height;
}

var prostopadloscian = new Cuboid(10, 20, 30);
prostopadloscian.setHeight(100);
prostopadloscian.setWidth(200);
prostopadloscian.setLenght(300);
console.log(prostopadloscian);