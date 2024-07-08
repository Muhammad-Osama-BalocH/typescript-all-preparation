// import chalk from "chalk"

// import { promises } from "dns";

// import { log } from "console";

// //  Eid wishing project
// for(let num = 0; num <= 10 ; num++){  // for loop condition

//     if(num % 2 === 0){
//         console.log(chalk.gray(`${num}Eid Mubarak`));

//     }else{
//         console.log(chalk.blue(`${num}Khair Mubarak`));

//     };

// };

// Greeting with time project
// import inquirer from "inquirer";
// import chalk from "chalk";

// while (true) {
//     // Step 1: Prompt the user for the current time.
//     let { time } = await inquirer.prompt({
//         name: "time",
//         type: "number",
//         message: chalk.blue("Enter your current time to receive a Greeting")
//     });

//     // Step 2: Determine the appropriate greeting based on the time.
//     if (time >= 4.5 || time <= 12) {
//         console.log(chalk.green("Good Night"));
//     } else if (time >= 5 && time <= 11) {
//         console.log(chalk.yellow("Good Morning"));
//     } else if (time >= 12 && time <= 17) {
//         console.log(chalk.blue("Good Afternoon"));
//     } else if (time >= 18 && time <= 21) {
//         console.log(chalk.red("Good Evening"));
//     }else{
//         console.log("invalid time");

//     };

//     // Step 3: Prompt the user to see if they want to enter another time.
//     let { confirm } = await inquirer.prompt({
//         name: "confirm",
//         type: "confirm",
//         message: "Do you want to enter more time?",

//     });

//     // Step 4: Break the loop if the user does not want to continue.
//     if (!confirm) {
//         break;
//     };
// };

// let x :number = 10
// x /= 2;
// console.log(x);

// let count = 2;

// while(count < 40){    //basic while loop condition
//     count++
//     console.log(count);

// }

//while loop and unquirer question
// import inquirer from "inquirer";
// import chalk from "chalk";

// while(true){
//     let answer = await inquirer.prompt([
//         {
//             name:"name",
//             type:"input",
//             message:chalk.green("what is your name"),

//         }
//     ]);
//     let repeatanswer = await inquirer.prompt([
//         {
//             name:"repeatanswer",
//             type:"confirm",
//             message:"do you want to enter your name again",
//         }
//     ]);

//     if(repeatanswer.repeatanswer === false){
//         console.log(chalk.blue(`your name is ${answer.name}`));
//         break;

//     }
// };

// do while loop

// import inquirer from "inquirer";  // cammad line ma question pouctha hai inquirer
// import chalk from "chalk";        // code ko styles or color full banatha hai

//Asynchrounos function deleration setTimeout
// setTimeout(() => { console.log(5)}, 5000);
// console.log(200);
// console.log(300);
// console.log(400);
// console.log(500);

//  Enum

// enum Traffic_Light_Color {    to acsess value only string value // enums constant value of set this enums not modify

//     color1 = "red",
//     color2 = "yellow",
//     color3 =  "blue"

// }
// console.log(Traffic_Light_Color.color2,Traffic_Light_Color.color1);

//Numeric enum
// enum Direction { // numeric  value only access only number value
//   North,
//   East,
//   West,
//   South,
// }
// console.log(Direction.North);
// console.log(Direction.East);
// console.log(Direction.West);
// console.log(Direction.South);

// Arrays method
// jonit method of all value mix

// let fruite : string [] = ["apple","mango","kivi",]
// console.log(fruite);

// console.log(fruite.join("😍") );


// for loop basic to  advance

// loop jo hai multiple time use hota hai jab ma is ma condition daltha hai 
//jab tak chalatha hai jab tak condition true na hojaya

//for(statement,expression,expression)

// let a = 4  // declaring without calculation/ comparsion

// let b = a++ // operation,addition,exparsion

// // initialization // condition // iteration
// for(let  i = 0; i <= 6; i++ ){
//     console.log("paper is staring");
// };

// table creating for loop 

// for (let i =1; i <=10 ; i++){
// let b = 2

//     console.log(`2 x ${i} = ${b *i}`);
    
// };







