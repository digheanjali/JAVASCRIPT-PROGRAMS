// <h1>Fruits</h1>
// <ul>
//     <li>Apple</li>
//     <li>Mango</li>
//     <li>Banana</li>
//     <li>Grapes</li>
// </ul>
// <input type="text">
// <button>Add Element</button>


let buttonE = document.querySelector('button')
console.log(buttonE)


let inputtext = document.querySelector('input')
console.log(inputtext)


let ullist = document.querySelector('ul')
console.log(ullist)

// document.createElement==> use to create new element 
// .value  ===> Returns the value of the data at the cursor's current position.
// .textContent ===> use to wright 
// .appendChild====> use to append or add new element 
// addEventListener ====> Appends an event listener for events whose type attribute value is type.
//  The callback argument sets the callback that will be invoked when the event is dispatched.



buttonE.addEventListener('click', function () {
    let fruitText = inputtext.value
    let newli = document.createElement('li')
    newli.textContent = fruitText
    ullist.appendChild(newli)
    inputtext.value = " "

})




