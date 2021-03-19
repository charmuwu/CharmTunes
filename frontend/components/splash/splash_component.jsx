import React from 'react';
import { Link } from 'react-router-dom';

class SplashComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const ifLoggedOut = () => (
            <div className="splashbuttons">
                <Link className="splashsignup" to="/signup">SIGN UP</Link>
                <Link className="splashlogin" to="/login">LOG IN</Link>
            </div>
        )
        const ifLoggedIn = () => (
            <div>
                <input className="splashlogout" type="submit" onClick={this.props.logout} value="Log Out"/>
            </div>
        )
        return (
            
            this.props.currentUser ? ifLoggedIn() : ifLoggedOut()
            
        )
                
            
        
    }

}

export default SplashComponent;