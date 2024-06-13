// program 1
// <h1 id = "one" class = "two" name = "nm">Chinmay</h1>

// document.querySelector('h1')
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('h1[name= "nm"]')

let firstLi = document.querySelector('li')
console.log(firstLi)
// document.querySelector('li') ====> only one li element select

let nodeListOfFruits = document.querySelectorAll('li')
console.log(nodeListOfFruits)
// document.querySelectorAll('li')======> all li element select

for (let i = 0; i < nodeListOfFruits.length; i++) {
    // console.log(i)
    // console.log(nodeListOfFruits[i])
    nodeListOfFruits[i].style.color = "red"
}
let elemeWithClassFri = document.querySelectorAll('.fri')
console.log(elemeWithClassFri)

for (let i = 0; i < elemeWithClassFri.length; i++) {
    // console.log(i)
    // console.log(elemeWithClassFri[i])
    elemeWithClassFri[i].style.backgroundColor = "yellow"
}



//document.querySelector() ----> single element
//document.querySelectorAll() --- node list


let q1 = document.querySelector('#three')
console.log(q1)

// getElementById('three')
let q2 = document.getElementById('three')
console.log(q2)

let nl = document.querySelectorAll('.veg')
console.log(nl)  // node list ===>nl

let hc = document.getElementsByClassName('veg')
console.log(hc) //html collection===>hc





