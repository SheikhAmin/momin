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

 //Factory Functio
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