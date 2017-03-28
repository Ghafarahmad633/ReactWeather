var React=require('react')
// var WeatherMessege=React.createClass({
//     render:function () {
//         var {temp,location}=this.props
//         return(
//
//             <div>
//                 <h2>Its {temp} in {location}</h2>
//             </div>
//         )
//     }
// })
var WeatherMessege=(props)=>{
    var {temp,location}=props
    return(
        <div>
            <div>
                <h2 className="text-center">Its {temp} in {location}</h2>
            </div>
        </div>
    )
}
module.exports=WeatherMessege