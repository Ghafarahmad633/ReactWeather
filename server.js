/**
 * Created by home on 3/12/2017.
 */
/**
 * Created by home on 3/7/2017.
 */
var express=require('express')
var app=express();
const PORT=process.env.PORT||3200
app.use(function (req,res,next) {
    if(req.headers['x-forwarded-proto']==='http'){
        next()

    }
    else{
        res.redirect('http://'+req.hostname+req.url)

    }

})
app.use(express.static('public'))


app.listen(PORT,function () {
    console.log("Serevr is Running On Port "+PORT)
})