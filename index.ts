#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)

let mybalance: number = 0

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type:"input",
            message:"Enter student name:",
            validate: function (value) {
                if (value.trim() !== ""){
                    return true;
                }
                return "please enter a non-empty value.";
            }
        },
        {
            name:"courses",
            type: "list",
            message:"select the course to enrolled",
            choices:["MS.Office" , "HTML" , "Javascript" , "Typescript" , "Python"]
        }
    ]   
);

const tutionfees: {[key: string] : number} ={
    "MS.Office": 3000,
    "HTML": 3500,
    "Javascript": 4000,
    "Typescript": 5000,
    "Python": 8000
};

console.log(`\nTution fees: ${tutionfees[answer.courses]}\n`);
console.log(`Balance: ${mybalance})\n`);

let paymentType = await inquirer.prompt(
    [
       {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank Transfer" , "Easypaisa" , "Jazzcash"]
       },
       {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function(value){
            if (value.trim() !=="") {
                return true;
            }
            return "please enter a non-empty value";    
        }
       }
    ]
);

console.log(`\nYou select payment method ${paymentType.payment}`);

const tutionFees = tutionfees[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees ===paymentAmount) {
    console.log(`congratulations, you have successfully enrolled in ${answer.courses}.\n`);

    let ans = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            messsage: "What would you like to do next?",
            choices: ["view status","Exit"]

        }
    ]
)

if (ans.select === "view status"){
    console.log("\n******status******\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`course: ${answer.courses}`);
    console.log(`Tution fees paid: ${paymentAmount}`);
    console.log(`balance: ${mybalance += paymentAmount}`);
    
} else {
    console.log("\n Exiting Student Managment System\n")
}

}else {
    console.log("invalid amount due to course\n");   
}
