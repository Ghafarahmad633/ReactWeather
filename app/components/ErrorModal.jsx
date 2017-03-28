var React=require('react')
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
        var modal = new Foundation.Reveal($('#error-modal'));
            modal.open();
    },

    render:function () {
        var {title,messege}=this.props;
        return(
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{messege}</p>
                <button type="button" className="button hollow" data-close="">Close</button>

            </div>
        )
    }
})
module.exports=ErrorModal;