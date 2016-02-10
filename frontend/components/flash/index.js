var React = require('react');
var FlashStore = require('../../stores/flash_store');

FlashIndex = React.createClass({

  getInitialState: function () {
    return ({ flash: FlashStore.all() });
  },

  componentDidMount: function () {
    this.flashToken = FlashStore.addListener(
      this.handleChange
    );
  },

  componentWillUnmount: function () {
    this.flashToken.remove();
  },

  handleChange: function () {
    this.setState({ flash: FlashStore.all() });
  },

  render: function () {
    var content = <ul className='flash hidden' />;
    if (this.state.flash.length > 0) {
      content = (
        <ul className='flash display'>
          {this.state.flash.map(function (message, i) {
            return <li key={i}>{message}</li>;
          })}
        </ul>
    );
    }
    return(
      <div>
        { content }
      </div>
    );
  }
});

module.exports = FlashIndex;
