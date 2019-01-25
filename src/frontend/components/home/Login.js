import React, { Component } from 'react';
import './login.css';
import { withRouter } from 'react-router-dom'

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      answer: ''
    }
    this.inputAnswer = this.inputAnswer.bind(this);
    this.submit = this.submit.bind(this);
  }
  inputAnswer (event) {
    this.setState({
        answer: event.target.value
    })
  }

  submit (event) {
    console.log('Answer: ' + this.state.answer);
    //event.preventDefault();
    if(this.state.answer === 'Dorofee' || this.state.answer === 'dorofee'){
      //return <Redirect to='/Main/' />
      this.props.history.push('/Main/')
    }
    else{
      event.preventDefault();
      document.getElementById('failed-login').style.display='block';
      document.getElementById('login-btn').style.borderRadius= '25px 25px 0 0';
    }
  }

  render() {
    return (
      <div className='login-wrapper'>
        <form onSubmit={this.submit} className='login-form' method='get'>
          <div className="login-wrap">
            <div id="prompt-wrap">
              <label className='prompt'>Who hosted the 2018 Polish Campout?</label>
              <input type="text" value={this.state.answer} onChange={this.inputAnswer.bind(this)} className='login-text' placeholder='Last Name' />
            </div>
            <input type="submit" value="Submit" className="login-btn" id="login-btn" />
            <div id="failed-login">Nope, try again!</div>
          </div>
          </form>
      </div>
    );
  }
}

export default withRouter(Login);
