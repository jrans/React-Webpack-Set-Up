var React     = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  propTypes: {
    text: PropTypes.string.isRequired,
    whatToDoWhenTheFooterIsClicked: PropTypes.func.isRequired
  },

  render: function () {

    return (
      <div className='footer-container' onClick={this.props.whatToDoWhenTheFooterIsClicked}>
        <p className='footer-text'>{this.props.text}</p>
      </div>
    );
  }
});

module.exports = Footer;
