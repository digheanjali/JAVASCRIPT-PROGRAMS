// for loop 

// for(initialization; conditionCheck , increment / decrement){
//     // statements
// }




// for loop with break
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i)
}
// console.log(i)


// for (let i = 0; i <= 5; i++) { // 1 // 2 // 3
//     if (i == 3) {
//         break
//     }
//     console.log(i) // 0 // 1 // 2
// }

// console statment before if
for (let i = 0; i <= 5; i++) {
    console.log(i)
    if (i == 3) {
        break;
    }

    //  0,1,2,3,

}


// 
for (let i = 5; i >= 1; i--) { // 4
    if (i == 4) {
        break
    }
    console.log(i)
    // 5

}
// console statment before if

for (let i = 5; i >= 1; i--) {  // 4
    console.log(i)
    // 5 // 4
    if (i == 4) {
        break
    }

}


// // continue statement with for 

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}



for (let i = 1; i <= 5; i++) {

    console.log(i)
    if (i == 3) {
        continue
    }
}


for (let i = 5; i >= 1; i--) {
    if (i == 3) {
        continue
    }
    console.log(i)
}

