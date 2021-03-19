import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = this.props.user;
  
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
            <h1 id="formheaderlogin">To continue, log in to CharmTunes.</h1>
            <form onSubmit={this.handleSubmit} className="loginform">
                <label id="formlabel" htmlFor="username">
                    Username
                </label>
                <input
                    id="username"
                    className="input"
                    type='text'
                    placeholder="Username"
                    value={this.props.username}
                    onChange={this.update('username')}
                />
                <label id="formlabel" htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    className="input"
                    type='password'
                    placeholder="Password"
                    value={this.props.password}
                    onChange={this.update('password')}
                />
                <button type='submit' className="loginbutton">LOG IN</button>
            </form>
        </div>
      );
    }
  }
  
  export default LoginForm;