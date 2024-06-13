// rest parameter 
function addition(...arr) {
    console.log(arr)
    return arr.reduce(function (acc, el) {
        return acc + el
    }, 0)
}
let q1 = addition(12, 33, 44, 55, 66, 77, 88, 33, 55, 66, 77)
console.log(q1)
