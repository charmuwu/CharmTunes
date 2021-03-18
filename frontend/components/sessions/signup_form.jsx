import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.user;
  
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
          <h3>Sign Up</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                />
            </label>
            <label>
                Email:
                <input
                    type='text'
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </label>
            <label>
                Password:
                <input
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                />
            </label>
            <button type='submit' value={this.state.formType} />
          </form>
        </div>
      );
    }
  }
  
  export default SignUpForm;
  