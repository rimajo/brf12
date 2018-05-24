import React, { Component } from 'react';
import './calendar.css';
import Day from './Day';

class Month extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialDate();
  }

  getInitialDate = () => {
    let today = new Date();

    let currentDay   = today.getDate();
    let year         = today.getFullYear();
    let month        = today.getMonth()+4;
    let numberOfDays = new Date(year, month+1, 0).getDate();
    let startDay     = new Date(year, month, 1).getDay();

    return ({
       numberOfDays: numberOfDays,
       currentDay: currentDay,
       currentMonth: month,
       startDay: startDay
    });
  }

  getDayNameIndex = (dayNumber) => {
    if (dayNumber > 6) {
      return dayNumber%7
    }
    return dayNumber;
  }

  getFillerDays = () => {
    let fillerDays = [];

    for (var i = 0; i < this.state.startDay; i++) {
      fillerDays.push(<Day type='filler'/>);
    }
    return fillerDays;
  }

  render() {
    let fillerDays  = this.getFillerDays();
    let days = [];
    for (var i = 0; i < this.state.numberOfDays; i++) {
      days.push(<Day key={i} dayNumber={i+1} dayNameIndex={this.getDayNameIndex(this.state.startDay+i)}/>);
    }
    return (
        <div id='current-month' className='center'> 
          {fillerDays}
          {days}        
        </div>
    );
  }
}

export default Month;