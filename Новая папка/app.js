function sumOfAll (arr) {
     let sum = 0;
     for(let a of arr)
     sum += a;
   return sum;
}

console.log(sumOfAll([10, 5, 21]))