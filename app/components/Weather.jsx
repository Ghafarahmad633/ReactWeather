var React=require('react')
var WeatherForm=require('WeatherForm')
var WeatherMessege=require('WeatherMessege')
var openWeatherMap=require('openWeatherMap')
var {Link} =require('react-router')
var ErrorModal=require('ErrorModal');
var Weather=React.createClass({
    getInitialState:function () {
        return{
            isLoading:false,
            errorMesg:null
        }

    },
    handleSearch:function (loaction) {
        // debugger;
        var self=this;
        self.setState({
            isLoading:true,
            errorMesg:undefined,
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
                isLoading:false,
                errorMesg:error.message

            })

        })


    },
    
    render:function () {


        var {isLoading,temp,location,errorMesg}=this.state;
        function render_Messeage() {
            if(isLoading){
                return <h3 className="text-center">Fetching....</h3>

            }
            else if(temp&&location){
                return <WeatherMessege location={location} temp={temp}/>;

            }

        }
        function renderError() {
            if(errorMesg!=undefined){
                return(
                    <ErrorModal messege={errorMesg}/>
                )
            }

        }

        return(

            <div>
                <h1 className="text-center">Get Weather  </h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {render_Messeage()}
                {renderError()}
            </div>
        )
    }
})
module.exports=Weather