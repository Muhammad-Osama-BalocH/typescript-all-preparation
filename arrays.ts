//numbers arrays
// let num:number [] =[1,2,3,4,6,7,8,];
// let num1:boolean[] =[true,false]
// let num3:string[]=["mango","banana","kiwi","apple","grapes"]

// let person1 :(string|boolean|number)[] =["osama",16,true]

// //multidimentail arrays
// let marks =[
//     //class 1  //index number
//     [
//         [23.45,78],//student1  //0

//         [22,45,67], //student2 // 1

//         [90,78,56] //students3 // 2
//     ],
//    // class 2   index number
//     [
//         [23,456,87], //student1  //0

//         [47,89,71],// students2  // 1

//         [34,86,90] //students3   // 2
//     ],

// ];




//Arrays all to methods

// let aar1 = [true,"osama",97]
// console.log(aar1);


// let arr:string[] =["karachi","lahore","panjab"]

// let msg:string[] = ["I love"]
// console.table(arr[2]);


// console.log(`${msg} ${arr[0]}`);
// console.log(`${msg} ${arr[1]}`);
// console.log(`${msg} ${arr[2]}`);


//push method
// let numberss: number[] = [1, 2, 3];
// // arrays ka last ma element add kartha hai
// let num = numberss.push(4); 
// // or return new length kartha hai

// console.log(numberss); // Output: [1, 2, 3, 4]

// //  arrays ka new length return kartha hai
// console.log(num); // Output: 4


// //  pop method
// let numbers1: number[] = [1, 2, 3];

// // Arrays ka last  element ko nakaltha hai
// let poppedElement = numbers1.pop(); 

// console.log(numbers1); // Output: [1, 2]

// // return ya wahi kartha hai jo nikala gya hai
// console.log(poppedElement); // Output: 3


// // shift method
// let numbers2: number[] = [1, 2, 3];
// //arrays ka 1st ekement ko nakaltha hai

// let shiftedElement = numbers2.shift(); 
// //return wahie element kartha hai jo nakala gaya hai

// console.log(numbers2); // Output: [2, 3]
// console.log(shiftedElement); // Output: 1

// //unshift method
// let numbers3: number[] = [2, 3];
// // arrays ka start ma element add kartha hai

// let newLength = numbers3.unshift(1);
// //return  arrays ka new length kartha hai

// console.log(numbers3); // Output: [1, 2, 3]
// console.log(newLength); // Output: 3


// // concat method
// let array1: number[] = [1, 2];
// let array2: number[] = [3, 4];
// // yah method do yah is sa zayada ka arrays ko new array banatha hai
// let newArray = array1.concat(array2); 
// console.log(newArray); // Output: [1, 2, 3, 4]


// // slice method\
// let numbers: number[] = [1, 2, 3, 4];
// // // yah ek element sa dosra element tak ek new array bantha hai

//  let newArray1 :number[] = numbers.slice(3,10); 
// // // ya return length  wahie kartha hai jo new array banhow hota hai

// // console.log(numbers);
// console.log(newArray1); // Output: [2, 3]

// // //splice method
// let numbers4: number[] = [1, 2, 3, 4];
// // yah method  index ka element  ko  nakaltha hai
// let removedElements = numbers4.splice(1, 2 ,10);
// // bacha howa element return kartha hai 
 
// console.log(numbers4); // Output: [1, 4]
// console.log(removedElements); // Output: [2, 3]


// // forEach method
// let numbers5: number[] = [1, 2, 3];

// yah method array ma function bantha hai or arrays ka undar ka number ko multiply 
// yah plus kartha hai

// numbers5.forEach((num) => {
//     console.log(num + 2);
// });  // Output: 3, 4, 5


// //map method
// let numbers6: number[] = [1, 2, 3];

// let newArray7 = numbers6.map((num) => num * 10); 
// // ya method hurma arrays arrow function lagtha hai or is  ma arrys ka value ka sath hr number ko multiply 
// // kartha hai
// console.log(newArray7); // Output: [10,20,30]


// ARRAYS ALL METHOD EXPLAIN
// let numbers: number[] = [1, 2, 3];
// // Adds one or more elements to the end of the array
// // Returns the new length of the array
// let newLength = numbers.push(4); 
// console.log(numbers); // Output: [1, 2, 3, 4]
// console.log(newLength); // Output: 4

// // pop method

// let numbers1: number[] = [1, 2, 3];
// // Removes the last element from the array
// // Returns the removed element
// let poppedElement = numbers1.pop(); 
// console.log(numbers1); // Output: [1, 2]
// console.log(poppedElement); // Output: 3

// // shift method
// let numbers2: number[] = [1, 2, 3];
// // Removes the first element from the array
// // Returns the removed element
// let shiftedElement = numbers2.shift(); 
// console.log(numbers2); // Output: [2, 3]
// console.log(shiftedElement); // Output: 1

// // unshift method
// let numbers3: number[] = [2, 3];
// // Adds one or more elements to the beginning of the array
// // Returns the new length of the array
// let newLength1 = numbers3.unshift(1); 
// console.log(numbers3); // Output: [1, 2, 3]
// console.log(newLength1); // Output: 3

// // concat method
// let array1: number[] = [1, 2];
// let array2: number[] = [3, 4];
// // Merges two or more arrays
// // Returns a new array
// let newArray = array1.concat(array2); 
// console.log(newArray); // Output: [1, 2, 3, 4]

// // slice method
// let numbers4: number[] = [1, 2, 3, 4];
// // Returns a shallow copy of a portion of the array
// // Does not modify the original array
// let newArray1 = numbers4.slice(1, 3); 
// console.log(newArray1); // Output: [2, 3]

// //splice method
// let numbers5: number[] = [1, 2, 3, 4];
// // Adds/Removes elements from the array
// // Returns the removed elements (if any)
// let removedElements = numbers5.splice(1, 2); 
// console.log(numbers5); // Output: [1, 4]
// console.log(removedElements); // Output: [2, 3]

// // forEach method 
// let numbers6: number[] = [1, 2, 3];
// // Executes a provided function once for each array element
// // Does not return anything
// numbers6.forEach((num) => {
//     console.log(num * 2);
// });
// // Output: 2, 4, 6

// //map method
// let numbers7: number[] = [1, 2, 3];
// // Creates a new array with the results of calling a provided function on every element
// // Returns the new array
// let newArray2 = numbers7.map((num) => num * 2); 
// console.log(newArray2); // Output: [2, 4, 6]


// // filter method
// let numbers8: number[] = [1, 2, 3, 4];
// // Creates a new array with all elements that pass the test implemented by the provided function
// // Returns the new array
// let newArray3 = numbers8.filter((num) => num > 2); 
// console.log(newArray3); // Output: [3, 4]

// // reduce method
// let numbers9: number[] = [1, 2, 3];
// // Applies a function against an accumulator and each element to reduce it to a single value
// // Returns the accumulated result
// let total = numbers9.reduce((acc1, num) => acc1 + num, 0); 
// console.log(total); // Output: 6

// // find method
// let numbers11: number[] = [1, 2, 3, 4];
// // Returns the first element that satisfies the provided testing function
// // Returns undefined if no elements satisfy the testing function
// let found = numbers11.find((num) => num > 2); 
// console.log(found); // Output: 3

// // findIndex method
// let numbers12: number[] = [1, 2, 3, 4];
// // Returns the index of the first element that satisfies the provided testing function
// // Returns -1 if no elements satisfy the testing function
// let index = numbers12.findIndex((num) => num > 2); 
// console.log(index); // Output: 2

// // sort method
// let numbers13: number[] = [3, 1, 4, 2];
// // Sorts the elements of the array in place and returns the sorted array
// // The default sort order is ascending
// numbers13.sort(); 
// console.log(numbers13); // Output: [1, 2, 3, 4]


// // reverse method
// let numbers14: number[] = [1, 2, 3, 4];
// // Reverses the array in place
// // Returns the reversed array
// numbers14.reverse(); 
// console.log(numbers14); // Output: [4, 3, 2, 1]

// // includes method
// let numbers15: number[] = [1, 2, 3, 4];
// // Determines whether the array includes a certain element
// // Returns true or false
// let hasThree = numbers15.includes(3); 
// console.log(hasThree); // Output: true

//indexof method
let numbers16: number[] = [1, 2, 3, 4];
// Returns the first index at which a given element can be found
// Returns -1 if the element is not found
let index1 = numbers16.indexOf(0); 
console.log(index1); // Output: 2

// // join method
// let numbers17: number[] = [1, 2, 3, 4];
// // Joins all elements of an array into a string
// // Returns the resulting string
// let star = numbers17.join('-'); 
// console.log(star); // Output: "1-2-3-4"
 
// // ever method
// let numbers18: number[] = [1, 2, 3, 4];
// // Tests whether all elements pass the provided function
// // Returns true or false
// let all = numbers18.every((num) => num < 5); 
// console.log(all); // Output: true

// let numbers19: number[] = [1, 2, 3, 4];
// // Tests whether at least one element passes the provided function
// // Returns true or false
// let some = numbers19.some((num) => num > 3); 
// console.log(some); // Output: true

























































