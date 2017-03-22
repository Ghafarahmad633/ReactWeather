var React=require('react')
var WeatherForm=require('WeatherForm')
var WeatherMessege=require('WeatherMessege')
var openWeatherMap=require('openWeatherMap')
var Weather=React.createClass({
    getInitialState:function () {
        return{
            isLoading:false,
        }

    },
    handleSearch:function (loaction) {
        // debugger;
        var self=this;
        self.setState({
            isLoading:true
        })

        openWeatherMap.getTemp(loaction).then(function (success) {
            self.setState({
                location:loaction,
                temp:success,
                isLoading:false
            })

        },function (error) {
            alert(error)
            self.setState({
                isLoading:false
            })

        })


    },
    render:function () {
        var {isLoading,temp,location}=this.state
        function render_Messeage() {
            if(isLoading){
                return <h3>Featching....</h3>

            }
            else if(temp&&location){
                return <WeatherMessege location={location} temp={temp}/>;

            }

        }

        return(

            <div>
                <h2>Weather Component  </h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {render_Messeage()}
            </div>
        )
    }
})
module.exports=Weather