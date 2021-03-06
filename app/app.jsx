
var React=require('react')
var ReactDOM=require('react-dom')
var {Route ,Router, IndexRoute, hashHistory}=require('react-router')
// var Route=require('react-router').Route;
// var Router=require('react-router').Router;
// var hashHistory=require('react-router').hashHistory;
var Main=require('Main')
var Nav=require('Nav')
var Weather=require('Weather')
var About=require('About')
var Examples=require('Examples')
// load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
require('style!css!sass!applicationStyle')
// require('style!css!bootstrapCSS')
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="example" component={Examples}/>
            <IndexRoute component={Weather}/>



        </Route>

    </Router>,
    document.getElementById("app")
)