let q1 = 10
let q2 = 5

console.log(q1 + q2)
console.log(q1 - q2)
console.log(q1 * q2)
console.log(q1 / q2)
console.log(q1 % q2)

let q3 = 8
let q4 = 4

console.log(q3 + q4)
console.log(q3 - q4)
console.log(q3 * q4)
console.log(q3 / q4)
console.log(q3 % q4)
// when the operation perform again and again that time we use functon calculators()

function Calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
Calculator(12, 4)
Calculator(4, 2)


// function without parameter (addA()) and without return type 
function addA() {
    console.log(6 + 3)
}
addA()
addA()
addA()
addA()
addA()

//function with parameter(addB(12,4)) and with return type
function addB(x, y) {
    console.log(x + y)
}
addB(12, 4)
addB(4, 2)
addB(14, 7)

// function with parameter(addC(x,y)) and with return ---->in this we store parameter in variable then print
// 100 --- show 
// 100 - given ---- 100 + 100 , 100 - 50 , 100 / 20 , 100 * 0.10

function addC(x, y) {
    return x + y
}
let q11 = addC(12, 3)
console.log(q11)
console.log(q11 + q11)
console.log(q11 / 5)
console.log(q11 * 0.10)
