var React = require('react');

var Header = require('./Header.js');
var List   = require('./List.js');
var Footer = require('./Footer.js');

var App = React.createClass({

  getInitialState: function () {
    return {
      items: ['Apple', 'Egg']
    }
  },

  clearFridge: function () {
    this.setState({items:[]});
  },

  addMoreDrinks: function () {
    var items       = this.state.items;
    var drinkyItems = items.concat(['Dr. Pepper','Fanta Icy Lemon', 'Irn Bru', 'GrapeDrank']);

    this.setState({items: drinkyItems});
  },

  addMoreDrinksOrFood: function (e) {
    var items       = this.state.items;
    var eatyItems = items.concat([e.target.value]);

    if (e.keyCode===13) {
      this.setState({items: eatyItems});
    }

  },

  render: function () {

    return (
      <div className='app-container'>
        <Header doubleClickHandler={this.addMoreDrinks} title='Fridge' />
        <input type='text' onKeyDown={this.addMoreDrinksOrFood} />
        <List items={this.state.items}/>
        <Footer whatToDoWhenTheFooterIsClicked={this.clearFridge} text='Footer' />
      </div>
    );
  }
});

module.exports = App;
