// lexical scope 
// function additionA() {
//     let a = 10
//     let b = 5
//     console.log(a + b)
//     function additionB() {
//         let c = 100
//         let d = 50
//         console.log(a + b + c + d)
//         function additionC() {
//             let e = 8
//             console.log(a + b + c + d + e)
//         }
//         additionC()
//     }
//     additionB()
// }
// additionA(12, 3)

// closure
// function Subtraction() {
//     let a = 10
//     let b = 5
//     return a + b
//     console.log(a + b)
// }
// let q1 = Subtraction()
// console.log(q1)

// program 2


// function multiplication() {
//     let x = 90
//     let y = 5

//     return function () {
//         console.log(x * y)
//     }

// }
// let q2 = multiplication()
// console.log(q2)

// let q2 = function(){
//     console.log(x*y)
// }

// q2()

// actual difference between arrow function and function expression

// function addition(x,y){
//     console.log(x+y)
// }
// addition(12,4)

// let additionB = function(x,y){
//     console.log(x+y)
// }
// additionB(13,4)

// let additionC = (x,y) => {
//     console.log(x+y)
// }
// additionC(13,4)

var firstName = "tushar"
var lastName = "pawase"           ///this is write in window

// let info = {
//     firstName: "anjali",
//     lastName: "pawase",
//     display: function () {
//         console.log(this)            // value of this is info
//         console.log(this.firstName + this.lastName)           // info.firstname
//         let display2=function () {
//             console.log(this)
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()




// let info = {
//     firstName: "siya",
//     lastName: "dighe",
//     display: function () {
//         //console.log(this)  -- info
//         console.log(this.firstName + this.lastName)
//         let display2 = () => {
//             //console.log(this) -- info
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

let info = {
    firstName: "rahul",
    lastName: "dighe",
    display: () => {
        //console.log(this)  --- window
        console.log(this.firstName + this.lastName)
        let display2 = () => {
            //console.log(this)  -- window
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info.display()

