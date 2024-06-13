// program 1
//                0     1   2     3
let birthYear = [1989, 1990, 1991, 1992]
let ages = [] // [34,33,32,31]
// [34,33,32,31]

for (let i = 0; i < birthYear.length; i++) {
    // console.log(i)
    // console.log(birthYear[i])
    // console.log(2023 - birthYear[i])
    let x = 2023 - birthYear[i]
    ages.push(x)
}
console.log(ages)


// find above40

// program 2

//              0  1 2   3 4  5  6   7 8  9
let numbers = [11, 22, 33, 44, 55, 66, 22, 33, 44, 55]
let above40 = [] // [44,55,66,44,55]

for (let i = 0; i <= numbers.length; i++) {
    // console.log(i)
    // console.log(numbers[i])
    if (numbers[i] > 40) {
        console.log(numbers[i])
        above40.push(numbers[i])

    }

}
console.log(above40)



// // program 3
//            0  1  2
let marks = [11, 22, 33] // 66
let total = 0

for (let i = 0; i < marks.length; i++) {
    // console.log(i)
    // console.log(marks[i])

    total = total + marks[i]

}
console.log(total)

// print "welcome" start of city
// program 4
//               0          1         2
let cities = ["mumbai", "bangalore", "kolkata"]
for (let i = 0; i < cities.length; i++) {
    // console.log(i)
    console.log(" welcome " + cities[i])
}
