var React =require('react')
var {Link,IndexLink}=require('react-router')
{/*var Nav =React.createClass({*/}
//     render:function () {
//         return(
//             <div>
//                 <h3 className="test">Navbar</h3>
//                 <IndexLink  to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink><br/>
//                 <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink><br/>
//                 <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examplet</IndexLink><br/>
//
//             </div>
//
//
//         )
//
//     }
// })
var Nav=(props)=>{
    return(
        <div>
            <h3 className="test">Navbar</h3>
            <IndexLink  to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink><br/>
            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink><br/>
            <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examplet</IndexLink><br/>
        </div>
    )
}
module.exports=Nav