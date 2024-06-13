// <h1>Heading</h1>
// program to print ===> click on heading it change in to anjali name 
// document.querySelector (css selector) ===> use to find element 



let headOne = document.querySelector('h1')
console.log(headOne)
// console.log(headOne.textContent)
// headOne.textContent = "anjali"

headOne.addEventListener('click', function () {
    headOne.textContent = "anjali"
})

// let info = {
//     firstName:"anjali",
//     lastName:"pawase"
// }
// info.firstName = "anjali p"