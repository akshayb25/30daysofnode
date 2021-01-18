let arr1 = [1,2,3,4,5];
let arr2 = [2,4,6,8];

// array.every()
let res = arr1.every((obj)=> obj%2 == 0);
let res2 = arr2.every((obj)=> obj%2 == 0);
console.log(res);
console.log(res2);

//array.fitler()
let resArr = arr1.filter((obj)=> obj%2);
console.log(resArr);

//array.find()
let res3 = arr1.find((obj)=>obj%2==0);
console.log(res3);

//array.forEach();
arr1.forEach((obj) => {
    console.log('FE: '+obj);
})

//array.reduce();
let total = 0;
let res4 = arr1.reduce((obj,total)=> total += obj);
console.log(res4);

