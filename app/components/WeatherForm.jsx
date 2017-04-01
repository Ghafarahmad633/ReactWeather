var React=require('react')
var WeatherForm=React.createClass({
    onFormSubmit:function (e) {
        e.preventDefault()
        var locR=this.refs.location;
        var loaction=locR.value;
        locR.value=null
        this.props.onSearch(loaction)

    },
    render:function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" required="required" placeholder="Search Weather by City"/>
                    <button className="button expanded hollow ">Get Weather</button>
                </form>
            </div>
        )
        
    }
})
module.exports=WeatherForm;