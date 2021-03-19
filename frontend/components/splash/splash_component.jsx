import React from 'react';
import { Link } from 'react-router-dom';

class SplashComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const ifLoggedin = () => (
            <div>
                <Link to="/login">LOG IN</Link>
                <Link to="/signup">SIGN UP</Link>
            </div>
        )
        const ifLoggedOut = () => (
            <div>
                <input type="submit" onClick={this.props.logout} value="Log Out"/>
            </div>
        )
        return this.props.currentUser ? ifLoggedOut() : ifLoggedin()
                
            
        
    }

}

export default SplashComponent;