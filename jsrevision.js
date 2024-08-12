// // rest parameter 
// function addition(...arr) {
//     console.log(arr)
//     return arr.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
// }
// let q1 = addition(12, 33, 44, 55, 66, 77, 88, 33, 55, 66, 77)
// console.log(q1)
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



