{/* <h1>Heading</h1>
<input type="text">
<button>ChangeColor</button> */}


let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonE = document.querySelector('button')

console.log(headOne)
console.log(inputText)
console.log(buttonE)


buttonE.addEventListener('click', function () {
    let colorText = inputText.value
    headOne.style.color = colorText
    inputText.value = ""
})