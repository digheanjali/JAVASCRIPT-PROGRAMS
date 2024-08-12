//reverse sting program


// function reversewordsINstring(str) {

//     //splite string into words

//     let words = str.split(" ")
//     console.log(words)

//reverse each word
// let reversewords = words.map()
// console.log(reversewords)
// let reversewords1 = words.map(words.split(""))
// console.log(reversewords1 = reversewords1)
// let reversewords2 = words.map(word.split(" ").reverse())
// console.log(reversewords2)
// let reversewords3 = words.map(word.split("").reverse().join(""))
//join revwe word in to single string

// let reversestring = reversewords3.join(" ")
// return reversestring



// }


// let orignalstring = "my name is anjali"
// let resultstring = reversewordsINstring(orignalstring)

// console.log(resultstring)



// 


// function reversewordsINstring(str) {
//     let words = str.split(" ")

//     console.log(words)

//     let reversewords = words.map(word => word.split("").reverse().join(""));

//     console.log(reversewords)

//     let reverseString = reversewords.join(" ");
//     return reverseString;;
// }

// let orignalstring = "my name is anjali"
// let resultstring = reversewordsINstring(orignalstring)

// console.log(resultstring)


// function reverseWordsInString(str) {
//     let words = str.split(" ");
//     let reversedWords = [];

//     console.log(words)
//     console.log(reversedWords)

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         // console.log(word)
//         let reversedWord = "";
//         console.log(reversedWord)

//         for (let j = word.length - 1; j >= 0; j--) {
//             reversedWord += word[j];
//         }
//         reversedWords.push(reversedWord);
//     }

//     return reversedWords.join(" ");
// }

function reversewordsINstring(str) {
    let words = str.split(" ");
    let reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversedWord = " ";

        for (let j = word.length - 1; j > 0; j--) {
            reversedWord += word[j];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
}



