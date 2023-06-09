//Basic Object_oriented Programing(OOP)
// if a function is a part of an object in js it is called method. 
 const circle = {
   radious: 2,
   laocation: {
    x: 1,
    y: 1
   },
   isVisible: true,
   draw: function() {
    console.log("Draw");
   }
 };

 circle.draw();//method
//Camel Notation: oneTwoThree
//Pascal Notation: OneTwoThree

 //Factory Function(Use Camel Notation)
 function createCircle(radious) {
    return {
        radious,
        isVisible: true,
        draw() {
         console.log("Draw");
        }
      };
 }

  const circle1 = createCircle(1);
  console.log(circle1);

 //Constructor Function(Use Pascal Notation)

 function Circle(radious) {
    this.radious = radious;
    this.draw = function() {
        console.log("Draw");
    }
 }

 const MyCircle = new Circle(1);
 MyCircle.draw();
 //console.log(MyCircle.radious);

 // Premitives are copied by their values and Objects are copied by their reference

 //Enumerating properties of object
 for (let key in Circle) {
  console.log(key,circle[key]);
 }

