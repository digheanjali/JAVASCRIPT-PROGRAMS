// ====while loop=====

// initialization 
// while(condition){
//     // statements
//     // increment / decrement
// }



// print "hello 3 times"

let i = 1
while (i <= 3) {
    console.log("hello")
    i++;
}


let t = 5
while (t >= 1) {
    console.log(t)
    t--
}

//  table of two
let t1 = 2
while (t1 <= 20) {
    console.log(t1)
    t1 = t1 + 2
}


//  reverse table of 5
let t3 = 50
while (t3 >= 5) {
    console.log(t3)
    t3 = t3 - 5
}

// while statement with break

// 1 to 5 
let t4 = 1
while (t4 <= 5) {
    if (t4 == 3) {
        break;
    }
    console.log(t4)
    t4++
}


// print before the if
let t5 = 1
while (t5 <= 5) {
    console.log(t5)
    if (t5 == 3) {
        break;
    }
    t5++
}



//  print 5 to 1 
let t6 = 5
while (t6 >= 1) {
    if (t6 == 2) {
        break;
    }
    console.log(t6)
    t6--
}



let t7 = 5
while (t7 >= 1) {
    console.log(t7)
    if (t6 == 2) {
        break;
    }

    t7--
}


