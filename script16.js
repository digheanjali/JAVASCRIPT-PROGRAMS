// js ----- object -------> propeties and methods

// map 

let info = {
    firstName: "anjali",
    lastName: "pawase",
    rollNo: 23
}

// object keys or properties are always string 
// map can have any datatype as property
// object and map both stores the item in property-value  / key-value 

// program 1
let mapA = new Map()  //object created
console.log(mapA)

// set====> Adds a new element with a specified key and value to the Map. 
// If an element with the same key already exists, the element will be updated.

mapA.set(1, "admin")
mapA.set(2, "customer")
mapA.set(3, "manager")
mapA.set(4, "support")
mapA.set(5, "L1")
console.log(mapA)

console.log(mapA.size)


//  program 

let mapB = new Map(
    [
        [1, "admin"],
        [2, "customer"],
        [3, "manager"],
        [4, "support"],
        [5, "L1"]
    ])
console.log(mapB)
//   1) has==>  boolean indicating whether an element with the specified key exists or not.
let r1 = mapB.has(1)
console.log(r1)
// 2) clear() ===> clear all object element

// mapB.clear()
// console.log(mapB)

let r2 = mapB.get(5)
console.log(r2)

mapB.forEach(function (v, p) {
    console.log(v, p)
})

mapB.delete(1)
console.log(mapB)

mapB = new Map(
    [
        [1, "admin"],
        [2, "customber"],
        [3, "manager"],
        [4, "support"],
        [5, "L1"]
    ]
)

// mapB.keys()==> only key given
for (let k of mapB.keys()) {
    console.log(k)
}
// mapB.values()===> only values given
for (let v of mapB.values()) {
    console.log(v)
}

// mapB.entries()==> both key and value given
//  [k, v] ==> d code
for (let [k, v] of mapB.entries()) {
    console.log(k, v)
}














