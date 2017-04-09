var React=require('react')
var ReactDOM=require('react-dom')
var ReactDOMServer=require('react-dom/server')
var ErrorModal=React.createClass({
    getDefaultProps:function () {
      return{
          title:"Error",

      }
    },
    propTypes:function () {
        title:React.propTypes.string;
        messege:React.propTypes.string.isRequired;

    },
    componentDidMount: function () {
        var {title,messege}=this.props;
        var errorMo0dalOpen=(

        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{messege}</p>
            <button type="button" className="button hollow" data-close="">Close</button>

        </div>
        )
        var $modal=$(ReactDOMServer.renderToString(errorMo0dalOpen))
        $(ReactDOM.findDOMNode(this)).html($modal)
        var modal = new Foundation.Reveal($('#error-modal'));
            modal.open();
    },

    render:function () {

        return(
           <div>

           </div>
        )
    }
})
module.exports=ErrorModal;