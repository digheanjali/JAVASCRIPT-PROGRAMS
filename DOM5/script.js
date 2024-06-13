{/* <h1>HeadingOne</h1>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Grapes</li>
    </ul>
    <input type="text">
    <button>Add Element</button> */}

let buttonE = document.querySelector('button')
console.log(buttonE)

let inputText = document.querySelector('input')
console.log(inputText)

let ullist = document.querySelector('ul')
console.log(ullist)

buttonE.addEventListener('click', function () {
    let fruitText = inputText.value
    let newli = document.createElement('li')
    newli.textContent = fruitText
    ullist.appendChild(newli)
    inputText.value = " "
})






