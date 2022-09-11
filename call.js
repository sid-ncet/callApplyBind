// var student={
//     firstname:"akash",
//     lastname:"adwani",
// }
// let printfullname=function(hometown,state){
//     console.log(this.firstname+' '+ this.lastname +' '+ hometown + state)
// }

// printfullname.call(student,'kanpur','uK')
// //if we create a another object
// var student2={
//     firstname:"sachin",
//     lastname:'singh',
// }
// printfullname.call(student2,'mumbai','up')
// //in apply method the first argument is the object name and second argument is the form of array
// printfullname.apply(student2,['mumbai','up'])
// //bind method
// let printMyName=printfullname.bind(student,'kanpur','uK')
// console.log(printMyName)//its give you a function
// printMyName()

var student={
    age:30
}
let all=function(){
    console.log(this.age)
}
let age=all.bind(student)
age()