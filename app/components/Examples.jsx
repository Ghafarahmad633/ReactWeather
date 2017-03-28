var React=require('react')
// var Examples=React.createClass({
//     render:function () {
//         return(
//             <div>
//                 <h1>Examplex</h1>
//             </div>
//         )
//     }
// })
var {Link} =require('react-router')
var Examples=(props)=>{
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here Are Few Example Location Try Out This</p>
            <ol>
                <li>
                    <Link to="/?location=Lahore">
                        Lahore,Pak

                    </Link>


                </li>
                <li>
                    <Link to="/?location=Landon">
                        Landon,UK

                    </Link>
                </li>
                <li>
                    <Link to="/?location=Rio">
                        Rio,Brazil

                    </Link>
                </li>
            </ol>
        </div>
    )
}
module.exports=Examples;