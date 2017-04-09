var React=require('react')
var WeatherForm=require('WeatherForm')
var WeatherMessege=require('WeatherMessege')
var openWeatherMap=require('openWeatherMap')
var {Link} =require('react-router')
var ErrorModal=require('ErrorModal');
import img from "../Honorable mention- by Robert Raia.jpg"
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
            location:undefined,
            temp:undefined,
        })


        openWeatherMap.getTemp(loaction).then(function (success) {
            self.setState({
                location:loaction,
                temp:success,
                isLoading:false
            })

        },function (error) {


            self.setState({
                isLoading:false,
                errorMesg:error.message

            })

        })


    },
    componentDidMount:function () {
        var location=this.props.location.query.location;
        if(location&&location.length>0){
            this.handleSearch(location)
            window.location.hash="#/"
        }

    },
    componentWillReceiveProps:function (newProps) {
        var location=newProps.location.query.location;
        if(location&&location.length>0){
            this.handleSearch(location)
            window.location.hash="#/"
        }

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
                <img src={img}/>
                <h1 className="text-center page-title">Get Weather  </h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {render_Messeage()}
                {renderError()}
            </div>
        )
    }
})
module.exports=Weather