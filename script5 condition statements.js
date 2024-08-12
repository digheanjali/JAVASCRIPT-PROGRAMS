
// condition statements 

// one input  and multiple outcome

// concern 

let numT = 17

// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("10 % discount")
// }
// if(numT > 10){
//     console.log("15 % discount")
// }


// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// else if(numT > 5 && numT <= 10){
//     console.log("10 % discount")
// }
// else if(numT > 10){
//     console.log("15 % discount")
// }
// else {
//     console.log("incorrect input")
// }


let marks = 56

// if(marks >= 90){
//     console.log("Grade A")
// }
// if(marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }

// if(marks >= 90){
//     console.log("Grade A")
// }
// else if(marks >= 75){
//     console.log("Grade B")
// }
// else if(marks >= 65){
//     console.log("Grade C")
// }
// else {
//     console.log("please try again")
// }

let a = 10
let b = 50

// if(a > b){
//     console.log("a is greater")
// }
// else {
//     console.log("b is greater")
// }

a > b ? console.log("a is greater") : console.log("b is greater")
let age = 17
let q1 = age >= 18 ? "can drive" : "cannot drive"
console.log(q1)

// swith statment -Evaluates an expression, then executes the case statement that matches the expression’s value.
// switch case without break ---> print all case  statement after case match  or also defauilt case find element

// let city = "indore"
// switch (city) {
//     case "pune":
//         console.log("MH")

//     case "indore":
//         console.log("MP")

//     case "jaipur":
//         console.log("RJ")

//     default:
//         console.log("incorrect cityName")
// }



// switch case with break -- only print match case statment


// let city2 = "Indore"
// switch (city2) {
//     case "pune":
//         console.log("MH")
//         break
//     case "Indore":
//         console.log("MP")
//         break

//     case "jaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("incorrect cityName")
// }
// // switch case with multiple case

let city3 = "bhopal"
switch (city3) {
    case "pune":
    case "nagpur":
        console.log("MH")
        break

    case "indore":
    case "bhopal":
        console.log("MP")
        break

    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect cityName")
}
