// map() , filter() , reduce() , forEach()
// some(), every(), find(), findIndex()



// map() ----(el,index,arr)
// filter()  ---->  (el,index,arr)
// reduce()   ----> (acc,el, index,arr)
// forEach()  -- (el,index,arr)
// find()  -- (el,index,arr)
// findIndex()  -- (el,index,arr)
// some()  -- (el,index,arr)
// every()  -- (el,index,arr)


// map()======return --->array
//                0    1    2     3
let birthYear = [1989, 1990, 1991, 1992]
// [34,33,32,31]
let x = birthYear.map(function (el, index, arr) {
    return 2023 - el
})
console.log(x)

// 2
let numbers = [11, 22, 33, 44, 55, 66, 77]
let q2 = numbers.map(function (el) {
    return el + 5
})
console.log(q2)

//  === filter()-----  return type array --- use for finding the element
//  find element < 0
let transactions = [11, 22, -55, -66, -77, 88, 99, -55, -44]
let x2 = transactions.filter(function (el) {
    return el < 0
})
console.log(x2)


// 4
//    el > 60
let marks = [22, 33, 44, 11, 23, 44, 55, 66, 22, 44, 55, 66, 77]
let q1 = marks.filter(function (el) {
    return el > 60
})
console.log(q1)

// program 3 
// reduce()-----> returntype === number
let total = [11, 22, 33]
let x3 = total.reduce(function (acc, el, index, arr) {
    return acc + el
})
console.log(x3)

// program 4 
//  foreach()---> retuen type none 
let cites = ["pune", "mumbai", "banglore", "kolkata"]
let q3 = cites.forEach(function (el, index, arr) {
    console.log(" welcome " + el)
})


// program 5 

// find()-----only print 1 element of starting from left side having statisfy that condition

//             0    1  2  3  4  5  6  7
let numberB = [11, 44, 33, 44, 55, 33, 66, 77]
let q6 = numberB.filter(function (el) {
    return el % 2 == 0
})

console.log(q6)
// 

let q7 = numberB.find(function (el, index, arr) {
    return el % 2 == 0
})
console.log(q7)




// findIndex() ----- only print 1 index of starting from left side having statisfy that condition
let q8 = numberB.findIndex(function (el) {
    return el % 2 == 0
})
console.log(q8)


// every() ------> cheak all element satisfy that condition
// return boolean value

let marksB = [11, 22, 33, 44, 22, 33, 44, 55, 66]
let q9 = marksB.every(function (el) {
    return el > 10
})
console.log(q9)

// some()----> cheak only one element satisfy that condition
// return boolean value

let q10 = marksB.some(function (el) {
    return el > 1000
})
console.log(q10)
















