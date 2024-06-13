// Set()
let numbers = new Set()
console.log(numbers)

let setB = new Set([11, 22, 33, 44, 22, 33, 44])
console.log(setB)

console.log(setB.size)
setB.add(555)
console.log(setB)

console.log(setB.has(555))
//setB.clear()
console.log(setB)

setB.delete(555)
console.log(setB)

setB.forEach(function (el) {
    console.log(el)
})

console.log(setB.keys())


// let setC = new Set(
//     [
//         new Map([[1,"admin"],[2,"support"]]),
//         new Map([[3,"manager"],[4,"L1"]])
//     ]

// )
// for(let key of setC.keys()){
//     console.log(key)
// }
// for(let value of setC.values()){
//     console.log(value)
// }

// for(let [k,v] of setB.entries()){
//     console.log(k,v)
// }

