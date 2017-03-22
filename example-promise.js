/**
 * Created by home on 3/16/2017.
 */
function getTempCallback(location,callbak) {
    callbak(undefined,45)
    callbak('City Not Found')
    
}
getTempCallback('pakistan',function (err,temp) {
    if(err){
        console.log("Error "+err)
    }
    else{
        console.log("Success "+temp)
    }
})
function getTempPeomise(loaction) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(41)
            reject("City Not Found")
        },1000)

    })

}
getTempPeomise("Pakistan").then(function (temp) {
    console.log("Success Promise "+temp)
    
},
function (error) {
    console.log("Error "+error)
    
})
function getSum(a,b) {
    return new Promise(function (resolve,reject) {
        if(typeof a=='number'&&typeof b=='number'){
            resolve(a+b)
        }
        else{
            reject("Number Expection Error ")
        }

    })

}
getSum(10,20).then(function (sum) {
    console.log("Sum is "+sum)

},function (error) {
    console.log(error)
})
getSum(10,"dd").then(function (sum) {
    console.log("Sum is "+sum)

},function (error) {
    console.log(error)
})
getPro=function (a,b) {
    return new Promise(function (R,J) {
        if(typeof a=='number'&& typeof b=='number'){
            R(a*b)
        }
        else{
            J("Number Expection Error")
        }

    })

}

function product(a, b) {

    getPro(a,b).then(function (p) {
        console.log(p)

    },function (err) {
        console.log(err)

    })
}

product(20,5)
product(20,"kk")