/**
 * Created by home on 3/18/2017.
 */
names=['Ghafar',"Jabbar","Saffer","khan"]
// name.forEach(function (name) {
//     console.log(name)
//
// })
// name.forEach((name)=>{
//     console.log("Arrow ",name)
// })
// name.forEach((name)=>console.log(name))
// var sum=(a,b)=>(a+b)
// console.log(sum(20,22))
var Person1={
    name:"Usman",
    greet:function () {
        names.forEach(function (name) {
            console.log(this.name+" Says Hi To "+name)

        })
    }
}
var Person2={
    name:"Usman",
    greet:function () {
        names.forEach((name)=>{
            console.log(this.name+" Says Hit To "+name)
        })
    }
}
Person1.greet()
Person2.greet()