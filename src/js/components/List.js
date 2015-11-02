var React     = require('react');
var PropTypes = React.PropTypes;

var Header = React.createClass({

  propTypes: {
    items: PropTypes.arrayOf(PropTypes.string.isRequired)
  },

  render: function () {
    var items = this.props.items.map(function(el,i){
      return <p key={'item'+i}>{el}</p>;
    });

    return (
      <div className='list-container' >
        {items}
      </div>
    );
  }
});

module.exports = Header;
