import React from 'react';

import MyDailyCalendar from './MyDailyCalendar';
import Nav from './Nav';

class App extends React.Component {
  constructor() {
    super();
    
    const today = new Date();
    
    this.state = {
      date: today
    };
  }
  
  handlePrevDay() {
    const year = this.state.date.getFullYear();
    const month = this.state.date.getMonth();
    const day = this.state.date.getDate();
    
    this.setState({
      date: new Date(year, month, day - 1)
    });
  }
  
  handleNextDay() {
    const year = this.state.date.getFullYear();
    const month = this.state.date.getMonth();
    const day = this.state.date.getDate();
    
    this.setState({
      date: new Date(year, month, day + 1)
    });
  }
  
  handleToday() {
    const today = new Date();
    
    this.setState({
      date: today
    });
  }
  
  render() {
    return (
      <div>
        <MyDailyCalendar date={this.state.date} />
        <Nav
          onPrevDay={() => this.handlePrevDay()}
          onNextDay={() => this.handleNextDay()}
          onToday={() => this.handleToday()} 
        />
      </div>
    );
  }
}

export default App;
