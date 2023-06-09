// Cloning an Object
 //i)old school approach

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

 const another = {};

 for (let key in circle ) {
  another[key] = circle[key]
 }

 console.log(another);

 //ii)Modern approach

 const anotherOne = Object.assign({},circle);

 console.log(anotherOne);

 ///iii)Spread operator for cloning an object

 const anotherTwo = {...circle};
 console.log(another);