var React=require('react')
// var About=React.createClass({
//     render:function () {
//         return(
//             <div>
//                 <h1>About ..</h1>
//             </div>
//         )
//     }
// })
var {Link} =require('react-router')
var About=(props)=>{
    return(
        <div>
            <h1 className="text-center">About Page</h1>
            <p>This is Weather App Builf On React </p>
            <p>My Name is Ghafar Ahmed</p>
            <p>I Created It !!</p>
            <h4>Here Are Some Of Tools That I Used</h4>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/
" target="_blank">React</a>-Famous Java Script FrameWork
                </li>
                <li>
                    <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a>-Iused Open Weather Map To Search The Weather By City Name
                </li>
            </ul>
        </div>
    )
}
module.exports=About