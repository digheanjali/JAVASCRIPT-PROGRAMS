// program 1

//======== slice(startIndex,endIndex(not included))========

//              0       1         2         3         4
let cities = ["pune", "mumbai", "banglore", "kolkata", "chennai"]
//             -5      -4      -3           -2         -1
//cities.slice(startIndex,endIndex(not included))
console.log(cities.slice(1)) // array
console.log(cities.slice(1, 4))
console.log(cities.slice(0, 4))
console.log(cities.slice(-5, 4))
console.log(cities.slice(1, -1))
console.log(cities.slice(-4))
console.log(cities.slice(-1, -3))

//========= splice()-->splice(indexValue, number of Element To Be Deleted)
// program 2
//        0         1          2          3
city2 = ["mumbai", "banglore", "chennai", "madras"]
// city.pop() // removes the last element
// city.shift() // removes the firstElement
// console.log(city)

//city2.splice(indexValue, numberofElementToBeDeleted)
// example 1
city2.splice(1, 2)
console.log(city2)

// example 2
city2.splice(2, 1)
console.log(city2)

// example
city2 = ["mumbai", "banglore", "chennai", "madras"]
city2.splice(1, 2, "wardha", "nagpur")
console.log(city2)

// program 3
// concat()----> two arry join 
let n = [11, 22, 33]
let e = [31, 23, 33]
let q4 = n.concat(e)
console.log(q4)

// join()---> join the string using this symbol

let info = ["chinmay", "shirish", "deshpande"]
let q5 = info.join("-")
let q6 = info.join("@")
let q7 = info.join(" ")
console.log(q5)
console.log(q6)
console.log(q7)
