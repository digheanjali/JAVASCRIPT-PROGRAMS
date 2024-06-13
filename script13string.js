// =============string=====
// program 1
let first_name = "anjali"
let last_name = 'rahul'
let middleName = `siya`


// string concat
// program 2
let fn = "anjli"
let ln = "pawase"
console.log("My firstName is " + fn + " My lastName is " + ln)
console.log(`My firstName is ${fn} My lastName is ${ln}`)

// program 3
//number + number ----> number 
//string + number ----> string 
//number + string ----> string 
//string + string ----> string 
let a = 10
let b = 20
let c = "hello"
console.log(a + b + c)

// number + number + string
//number + string
//string // "30 hello"
console.log(c + b + a)
// string + number + number  // hello + 20
// string + number  // "hello20"
// string // "hello2010"

console.log(a + c + b)

// program4 

let city = "chandrapur"
console.log(typeof city)

// String stores the value by index 

//  0   1   2   3    4   5   6  7  8  9
//  c   h   a   n    d   r   a  p  u   r
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

for (let i = 0; i < 10; i++) {
    //console.log(i)
    console.log(city[i])
}

// program 5 
// print the character of string in reverse
for (let i = 9; i >= 0; i--) {
    console.log(city[i])
}