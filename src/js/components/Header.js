var React     = require('react');
var PropTypes = React.PropTypes;

var Header = React.createClass({

  propTypes: {
    title: PropTypes.string,
    doubleClickHandler: PropTypes.func
  },

  render: function () {

    return (
      <div className='header-container' onDoubleClick={this.props.doubleClickHandler} >
        <p className='header-text'>{this.props.title}</p>
      </div>
    );
  }
});

module.exports = Header;
