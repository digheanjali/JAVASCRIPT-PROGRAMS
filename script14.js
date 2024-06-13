
// toUpperCase()
// toLowerCase()
// replace()
// startsWith()
// endsWith()
// trim()
// trimStart()
// trimEnd()
// concat()
// includes()


// methods  and properties 

let first_name = "anjali"
let w1 = first_name.length
console.log(w1)    //6

// method 

// program 2 

let middleName = "santosh"

// UpperCase()
// Action - convert to character to UpperCase()
// Return - type 

let q11 = middleName.toUpperCase()
console.log(q11)

// convert to character to lowercase()

// program 3
let lastName = "pawase"
let q12 = lastName.toLowerCase()
console.log(q12)

// program 4
let city1 = "pune"
let city2 = city.toUpperCase().toLowerCase().length
// "PUNE"--> "pune" -----> 4.toUpperCase()
console.log(city2)

// program 5
let info = "i am learning javascript"
let q3 = info.includes("learning")  ///true
let w3 = info.includes("l")
let q5 = info.includes("L")    //false
console.log(q3)
console.log(w3)
console.log(q5)

// program 6
let first_name2 = "tushar"
let last_name2 = "bhoknal"
let q6 = first_name2.concat(' ').concat(last_name2)
console.log(q6)

// program 7
// startsWith()
// endsWiths()

let fruit = "apple"
console.log(fruit)
let q7 = fruit.startsWith('a')
let q8 = fruit.startsWith('app')
console.log(q7)
console.log(q8)

let q9 = fruit.endsWith('e')
let q10 = fruit.endsWith('Le')
console.log(q9)
console.log(q10)

// program 8 
// replace()
let info4 = "I am learning js"
let q13 = info4.replace('js', "python")
console.log(q13)

// program 9

let h = " pune "
let q14 = h.length
console.log(q14)
// trim()-----> remove start and end space
let q15 = h.trim()
console.log(q15.length)


// remove start  space
let q16 = h.trimStart()
console.log(q16.length)

// remove  end space

let city6 = "goa "
let q17 = city6.trimEnd()
console.log(q17.length)

// program 1
let city = "pune"
// 0  1  2  3
// p  u  n  e
console.log(city[0])
let rev = ""
// enup 

for (let i = 0; i < 4; i++) {
    //console.log(i)   
    //console.log(city[i])

    rev = city[i] + rev
    //       p    + ""   =====> p
    //       u    +  p   =====> up
    //       n    +  up  =====> nup
    //       e    +  nup =====> enup
}
console.log(rev)

// program 2
let rev2 = ""
for (let i = city.length - 1; i >= 0; i--) {
    //console.log(i)
    console.log(city[i])
    rev2 = rev2 + city[i]

    //      ""  +   "e"   ===> e
    //      e   +   "n"   ===> en
    //      en  +   "u"   ===> enu
    //      enu +    p    ===> enup 
}
console.log()


// slice

let city3 = "chandrapur"

//  0   1  2   3  4  5  6  7  8  9
//  c   h  a   n  d  r  a  p  u  r
// -10 -9 -8  -7 -6 -5 -4 -3 -2 -1
//city3.slice(startIndex,endIndex(not included))

console.log(city3.slice(1))
console.log(city3.slice(1, 6))
console.log(city3.slice(0, 9))
console.log(city3.slice(-3))
console.log(city3.slice(1, -3))
console.log(city3.slice(-10, -2))
console.log(city3.slice(-1, -5))


let info5 = ["santosh", "pawase", 9604761123]
let s1 = info5.join('-')
console.log(s1)

let info3 = "chinmay-deshpande-77019292441"
let a2 = info3.split('-')
console.log(a2)



