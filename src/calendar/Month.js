import React, { Component } from 'react';
import './calendar.css';
import Day from './Day';

class Month extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialDate();
  }

  getInitialDate = () => {
    let date         = new Date();
    let today        = date.getDate();
    let year         = date.getFullYear();
    let month        = date.getMonth()+4;
    let numberOfDays = new Date(year, month+1, 0).getDate();
    let startDay     = new Date(year, month, 1).getDay();
    let lastDay      = new Date(year, month, numberOfDays).getDay();

    return ({
       numberOfDays: numberOfDays,
       currentDay: today,
       currentMonth: month,
       startDay: startDay,
       lastDay: lastDay
    });
  }

  getDayNameIndex = (dayNumber) => {
    if (dayNumber > 6) {
      return dayNumber%7
    }
    return dayNumber;
  }

  getFillerDaysStart = () => {
    let fillerDays = [];

    for (var i = 0; i < this.state.startDay; i++) {
      fillerDays.push(<Day type='filler'/>);
    }
    return fillerDays;
  }

  getFillerDaysEnd = () => {
    let fillerDays = [];

    for (var i = this.state.lastDay; i < 6; i++) {
      fillerDays.push(<Day type='filler'/>);
    }
    return fillerDays;
  }

  getDays = () => {
    let days = [];

    for (var i = 0; i < this.state.numberOfDays; i++) {
      days.push(<Day key={i} dayNumber={i+1} dayNameIndex={this.getDayNameIndex(this.state.startDay+i)}/>);
    }
    return days;
  }

  render() {

    return (
        <div id='current-month' className='center'>
          {this.getFillerDaysStart()}
          {this.getDays()}
          {this.getFillerDaysEnd()}
        </div>
    );
  }
}

export default Month;
