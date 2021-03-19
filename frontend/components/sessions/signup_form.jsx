import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          email: '',
          password: '',
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state);
    }
  
    update(field) {
      return e => this.setState({ [field]: e.currentTarget.value });
    }
  
    render() {
      return (
        <div>
            <div className="icon"></div>
            <h1 id="formheader">Sign up for free to start listening.</h1>
            <br/>
            <h3 id="formtitle">Sign up with your email address</h3>
            <form onSubmit={this.handleSubmit} className="signupform">
                <label id="formlabel" htmlFor="email">
                    What's your email?
                </label>
                <input
                    id="email"
                    className="input"
                    type='text'
                    placeholder="Enter your email."
                    value={this.state.email}
                    onChange={this.update('email')}
                />
                <label id="formlabel" htmlFor="username">
                    Create a username
                </label>
                <input
                    id="username"
                    className="input"
                    type='text'
                    placeholder="Create a username."
                    value={this.state.username}
                    onChange={this.update('username')}
                />
                <label id="formlabel" htmlFor="password">
                    Create a password
                </label>
                <input
                    id="password"
                    className="input"
                    type='password'
                    placeholder="Create a password."
                    value={this.state.password}
                    onChange={this.update('password')}
                />
                <button type='submit' className="signupbutton">SIGN UP</button>
            </form>
        </div>
      );
    }
  }
  
  export default SignUpForm;
  