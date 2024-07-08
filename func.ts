
//  all function detail explain all to all

import { promises } from "dns";


// Normal basic function

// function myfunc(){

//     console.log("how are you");   
// }
// myfunc()   // function ko call karna ko invoke b kehtha hai

//function with parameter and arguments

// function myName(userName:string,thisuser:string){
//     console.log(userName,thisuser);
    
// }
// myName("muhammad","osama")

// function Retrun keyword

// function student(bio:number,physics:number,chemistry:number){ // implicit types wo hota hai jo khued 
//     //     //sa infer karhai
    
//     //     //Explicit types wo hota hai jas ko hum batha hai is ka types return karna pr yah hai
//          return bio + physics + chemistry 
//      };
//     console.log(student(23,55,89));


// function Default parameter
// function add(num1:number = 78,num2:string = "osama"){ // default ka matlab hai ka hum by default 
//     // parameter ka sath hie parametr ka value assign karhai wo hota hai detault parametr
//     return (num1+num2)
// }
// console.log(add(12,"Gabol"));


//optional parameter with condition

// function movies(name:string,releaseyear?:number){ //optional parameter yah hota hai jab hum parameter dahtha
//     // tu hum questionmark lagtha hai is ka matlab hai ka humri marzi hoti hai hum argument ma value dahi yah dahai
//     if(releaseyear){
//         return `this movie name is${name}nad release year is ${releaseyear}`
//     }
//     return (`this movie name is ${name}`)
// }
// console.log(movies("Avangers",2010));

// rest parameter  ...

//  function box(name:string,...eidi1:number[]){ // rest parameter ka matlab hai parameter ma ... lagtha hai 
    
//     // tu unlimited argument pass karksaktha hai rest parameter ka yah matlab hai
    
//     return (name+eidi1)


// }
// console.log("osama","gabol",12+54+67+80+234+54);

//ARROW FUNCTION
//()=>{}


// let func= (mygift:string)=>mygift

//     console.log(func("hello function"));
    

//Anonymous function
// this function is no name


// let fastfood = function (y:string){
//     return y
// }
// console.log(fastfood("mara laya burger lakar aho"));


// Immediately invoke function expression

// yah function khued b khued apna ap ko jaildi call kardahi tha hai

// (function (m:string){  // is function ka matlab hai ap khali function ka key word lakhai then parenthesis ()
//                       // laghai then charly barket laghai then is jo value wagrah dahai is ko call na karhai
//      console.log(m);  // function or or charly barket ko closed karahai tu yah hota hai immediadely function

// }("i am immedaitely invoked function")
// )


// Recursive function
// this function call inside and outside

// function myName(a:number){
//     if(a <= 0){
//         console.log("value done");
//         return    
//     }
//     console.log(a);
//     myName(a-1);
       
// }
// myName(5)

//Async function
// console.log("1");

// setTimeout(() => console.log("2"),3000); // yah setTimeout millisecond ka delay sa value print kartrha hai

// console.log("3");

//snychrounous function 
 
// line by line function value print hona yah snychrounous function


//  console.log(1);
// let j = 0
// for(let i =0; i <1000000000; i++){
//       j =j +i

// }
//  console.log(2);
//  console.log(3);



//Asynchrounous function


// setTimeout(()=>{

//     let j = 0;
// for(let i =0; i <100000000000; i++){
//       j =j +i;
    
//   }

// },0)  // 1 second  = 1000 millisecond 

// console.log("programmming not block ");
// console.log("code is continous going");



//  console.log( "hy osama");

//  setTimeout(() => {
//     console.log(" i am fine what about you"); // code run  in parallel

//     setTimeout(() => {
//         console.log(" i am good alhumduallah");
             
//       setTimeout(() => {
//          console.log("ok bro Allah hafiz");  // this is nested asynchrounous function
                                                 
//                                                   // this is callback hell function
//            }, 5000); // 5 second  = 5000 millisecond
                                                
//      }, 4000); // 4 second  = 4000 millisecond
    
//  }, 3000); // 3 second  = 3000 millisecond 
                                           
//  console.log("how are you ");
 

function  orderPizza(prepared:any){
    console.log("placing order...");

    setTimeout(()=>{
        console.log("order placed");
        prepared()
    },3000)  
    
}
function preparePizza(){
    console.log("preparing pizza....");

    setTimeout(()=>{
        console.log("pizza is being prepared 🍕");
        
    },5000);
    
    
};
orderPizza(preparePizza)
orderPizza(preparePizza)
orderPizza(preparePizza)

