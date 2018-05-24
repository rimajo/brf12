import React, { Component } from 'react';
import './login.css';
import Message from './Message';
import loader from './images/loader.gif';



class Login extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		username: '', 
    		password: '', 
    		error: '',
    		success: false
    	};
	}

	setCredentials = (event) => {
		this.setState({[event.target.name] : event.target.value, error: ''});
	}

	handleKeyPress = (event) => {
  		if(event.key === 'Enter'){
    		this.validateAndLogin();
  		}
	}	

	validateAndLogin = () => {
		if (!this.state.username){
			return this.setState({error:"You did not supply a username"});
		}

		if (!this.state.password){
			return this.setState({error:"You did not supply a password"});
		}	

		this.setState({success: true}, () =>{/*Send request*/});
	}
  	render() {

  		let loading = this.state.success ? <div id='loader'><img className= 'center' src={loader} alt=''/></div> : null;

    return (
    	<div>
    		{loading}
      		<div id='login' className='center'>
      				<label htmlFor='username'>Username</label>
      				<input id='username' name='username' type='text' onChange={this.setCredentials} onKeyPress={this.handleKeyPress}/>

      				<label htmlFor='password'>Password</label>
      				<input id='password' name='password' type='password' onChange={this.setCredentials} onKeyPress={this.handleKeyPress}/ >

      				<button onClick={this.validateAndLogin}>Login</button>
      		</div>
			<Message messageType='error' messageText={this.state.error} /> 
		</div>
    );
  }
}

export default Login;