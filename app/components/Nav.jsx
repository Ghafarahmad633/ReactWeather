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
var Nav =React.createClass({
    onSearch:function (e) {
        e.preventDefault();
        alert("Hello")
    },
    render:function () {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather App</li>
                        <li>
                            <IndexLink  to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink><br/>

                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink><br/>
                        </li>
                        <li>
                            <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Example</IndexLink><br/>

                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search Weather" required="required"/></li>
                            <li><button type="submit" className="button primary">Search</button></li>
                        </ul>


                    </form>
                </div>
            </div>
        )
    }
})

module.exports=Nav
