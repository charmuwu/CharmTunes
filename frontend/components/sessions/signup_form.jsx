import React from 'react';
import { Link } from 'react-router-dom';
class SignUpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          email: '',
          password: '',
      };
      this.handleDemoUser = this.handleDemoUser.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
      this.props.resetErrors();
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
    handleDemoUser(e) {
      e.preventDefault();
      this.props.login({username: 'demo', password:'123456'})
      .then(() => this.props.history.push("/"));
    }
    handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state)
      .then(() => this.props.history.push("/"));
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
            <div id="demobtn">
              <button className="demobtn" onClick={this.handleDemoUser} >CONTINUE WITH DEMO USER</button>
            </div>
            <br/>
            <div className="divdivider">
              <p className="or">or</p>
            </div>
            <h3 id="formtitle">Sign up with your email address</h3>
            <form onSubmit={this.handleSubmit} className="signupform">
                {this.renderErrors()}
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
                <p className="terms" id="terms">By clicking on Sign up, you agree to CharmTunes's <a href="https://www.youtube.com/watch?v=Q5BNLaZWdck">Terms and Conditions of Use.</a></p>
                <p className="terms">To learn more about how CharmTunes collects, uses, shares and protects your personal data please read CharmTunes's <a href="https://www.youtube.com/watch?v=fUIe4dSO2zg">Privacy Policy.</a></p>
                <div className="signupbtn">
                  <button type='submit' className="signupbutton">SIGN UP</button>
                </div>
            </form>
            <br/>
            <div id="login123">
              <h3 className="login123" className="terms">Have an account? &nbsp;
                <Link to="/login" className="login123" className="terms">Log In</Link>
              .</h3>
            </div>
        </div>
      );
    }
  }
  
  export default SignUpForm;
  