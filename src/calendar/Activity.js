import React, { Component } from 'react';

class Activity extends Component {    

  render() {
    return (
      <div className={`activity activity-${this.props.type}`}>
        <span className='activity-title'>{this.props.title}</span>
        <span className='activity-time'>{this.props.time}</span>
        <span className='activity-type'>{this.props.type}</span>
        <span className='activity-owner'> {this.props.owner}</span>
      </div>
    );
  }
}

export default Activity;