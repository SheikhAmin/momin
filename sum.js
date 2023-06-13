function multipleOf(limit){
  let multipliterForThree = [];
  let multipliterForFive = [];
  let result = 0;

  for(let i=1; i<=limit;i++){
    if(i % 3 == 0 || i % 5 ==0){
        result += i;}
    }
  
return result;
}

console.log(multipleOf(10));
