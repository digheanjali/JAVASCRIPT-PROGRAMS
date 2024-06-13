// // object literal 


// let anjali = {
//     firstName:"anjali",
//     lastName:"dighe",
//     age:25,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let rahul = {
//     firstName:"rahul",
//     lastName:"dighe",
//     age:28,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// console.log(anjali.firstName)
// console.log(anjali.lastName)
// console.log(anjali.age)
// anjali.display()

// console.log(rahul.firstName)
// console.log(rahul.lastName)
// console.log(rahul.age)
// rahul.display()



class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    display() {
        console.log(this.firstName + this.lastName)
    }

}
let anju = new Person()
console.log(anju)
anju.firstName = "siya"
anju.lastName = "dighe"
anju.age = 1
console.log(anju)
anju.display()
