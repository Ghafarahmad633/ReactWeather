/**
 * Created by home on 3/12/2017.
 */
/**
 * Created by home on 3/7/2017.
 */
var express=require('express')
var app=express();
app.use(express.static('public'))
app.listen(3200,function () {
    console.log("Serevr is Running On Port 3200")
})