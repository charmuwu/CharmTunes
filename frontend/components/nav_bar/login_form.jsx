import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDemoUser = this.handleDemoUser.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state)
      .then(() => this.props.history.push("/"));
    }
    handleDemoUser(e) {
      e.preventDefault();
      this.props.action({username: 'demo', password:'123456'})
      .then(() => this.props.history.push("/"));
    }
    renderErrors() {
      return(
        <div>
          {this.props.errors.map((error, id) => (
            <p key={id}>{error}</p>
          ))}
        </div>  
      )
    }
    update(field) {
      return e => this.setState({ [field]: e.currentTarget.value });
    }
  
    render() {
      return (
        <div>
            <div className="icon"></div>
            <h1 id="formheaderlogin">To continue, log in to CharmTunes.</h1>
            <div id="demobtn">
              <button className="demobtn" onClick={this.handleDemoUser} >CONTINUE WITH DEMO USER</button>
            </div>
            <div className="divdividerdaddy">
              <div className="divdivider">
                <div id="before"/>
                  <p>or</p>
                <div id="after"/>
              </div>
            </div>
            <br/>
            <form onSubmit={this.handleSubmit} className="loginform">
              {this.renderErrors()}
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
            <div id="signup123">
              <h3 className="signup123head">Don't have an account?</h3>
              <Link to="/signup" className="signup123">SIGN UP FOR CHARMTUNES</Link>
            </div>
        </div>
      );
    }
  }
  
  export default LoginForm;