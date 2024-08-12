// function reversewordsINstring(str) {

//     let words = str.split(" ");


//     let reverseWords = words.map(word => word.split("").reverse().join(""))


//     let reversestring = reverseWords.join(" ")
//     return reversestring


// }

// let originalstr = "my nane is anjali"
// let result = reversewordsINstring(originalstr)

// console.log(result)



// 


// function reverseWordsInString(str) {
//     let words = str.split(" ");
//     let reversedWords = [];

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let reversedWord = "";

//         for (let j = word.length - 1; j >= 0; j--) {
//             reversedWord += word[j];
//         }

//         reversedWords.push(reversedWord);
//     }

//     return reversedWords.join(" ");
// }

// let originalString = "my name is anjali";
// let resultString = reverseWordsInString(originalString);

// console.log(resultString);

// ===================================================================================================

//write a function that return the reverse of string ===> using for loop
// ===================================================================================


// function stringRverse(str) {
//     let reversed = ""

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]

//     }
//     return reversed
// }
// console.log(stringRverse("learning javascript"))

// ------------------OR------------------------

// function stringRverse(str) {
//     return str.split("").reverse().join("")
// }
// let string = "Hello World"
// let result = stringRverse(string)
// console.log(result)

// =========================Reverse string but position is same=======================

function resultString(str) {
    let words = str.split(" ");
    let reversedWords = [];

    for (let i = 0; i < words.length - 1; i++) {
        let word = words[i];
        let reversedWord = "";

        for (let j = words.length - 1; j > 0; j--) {
            reversedWord += word[j];
        }
        reversedWords.push(reversedWord);

    }
    return reversedWords.join(" ");
}

let string1 = "i am anjali";
let result = resultString(string1);
console.log(result);