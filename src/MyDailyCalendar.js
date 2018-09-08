import React from 'react';
import PropTypes from 'prop-types';

import './MyDailyCalendar.css';

class MyDailyCalendar extends React.Component {
  monthString() {
    const monthStrings = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];
    
    const monthIndex = this.props.date.getMonth();
    
    return monthStrings[monthIndex];
  }
  
  render() {
    const month = this.monthString();
    const day = this.props.date.getDate();
    
    return (
      <article className="my-daily-calendar">
        <header>
          {month}
        </header>
        <section className="body">
          {day}
        </section>
      </article>
    );
  }
}

MyDailyCalendar.propTypes = {
  date: PropTypes.object.isRequired
};

export default MyDailyCalendar;
