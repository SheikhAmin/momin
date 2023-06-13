const marks = [80, 80, 50];

function calculateGrade(array){
    let average = calculateAverage(array);
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A";
}

function calculateAverage(array){
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
   }

    const average = sum / marks.length;
    return average;
}



/*let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

const average = sum / marks.length;

console.log(average);
console.log(calculateGrade(average));*/

console.log(calculateGrade(marks));
