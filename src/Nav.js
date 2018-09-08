import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {  
  render() {
    return (
      <nav>
        <button onClick={this.props.onPrevDay}>prev</button>
        <button onClick={this.props.onToday}>today</button>
        <button onClick={this.props.onNextDay}>next</button>
      </nav>
    );
  }
}

Nav.propTypes = {
  onPrevDay: PropTypes.func.isRequired,
  onNextDay: PropTypes.func.isRequired,
  onToday: PropTypes.func.isRequired
}

export default Nav;
