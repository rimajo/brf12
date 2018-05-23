import React, { Component } from 'react';
import './message.css';


class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({show:true}, () =>{
      this.hideMessage();
    });    
  }

  hideMessage = () => {
    setTimeout(function() { this.setState({show: false}); }.bind(this), 3000);
  }

  maybeRenderMessage = () => {
    if (this.state.show && this.props.messageText) {
      return (<div className={`message message-${this.props.messageType}`}>
                <span>{this.props.messageText}</span></div>);
    }
    return null;
  }

  render() {
    return (
        this.maybeRenderMessage()
    );
  }
}

export default Message;