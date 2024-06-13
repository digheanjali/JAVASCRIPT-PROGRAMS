
// =====Array=======

//               0          1        2       3         4 

let names = ["anjali", "vaibhvi", "rohini", "aarchana", "chitra"]
// console.log(names[0])

// ===Retrive()----use to find value by index
// console.log(names[1])

//===== update()----use to update the array element
names[2] = "tanmay"
console.log(names)
//
// ======add()-----use to add value in array
// ====push()-----add value at the end
// ====unshift()----add value at the first
names.push("siya")
names.unshift("ovi")
console.log(names)

// =======delette()
// pop()----delete last element
// shift()----delete first element

names.pop()
names.shift()
console.log(names)


// length 
//              0          1          2        3
let cities = ["mumbai", "banglore", "chennai", "wardha"]
let q1 = cities.length
console.log(q1)
console.log(cities[2])

// using for loop
for (let i = 0; i < cities.length; i++) {
    console.log(i)
    console.log(cities[i])
}

// using while loop
// program 2 
//               0       1       2         3
let flowers = ["lily", "rose", "jasmine", "marrygold"]

let q2 = flowers.length - 1
while (q2 >= 0) {
    console.log(flowers[q2])
    q2--
}



let s1 = 0
while (s1 < flowers.length) {
    //console.log(s1)
    console.log(flowers[s1])
    s1++
}
