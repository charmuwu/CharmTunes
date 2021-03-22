import React from 'react';
import { Link } from 'react-router-dom';

class SplashComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        function btnclickdrop(){ 
            const dropdwn = document.getElementById("drpdwnmenu");
            dropdwn.classList.toggle("show");
            window.onclick = function(e) {
                if (!e.target.matches('.profilebtn')) {  
                    if (dropdwn.classList.contains('show')) {
                        dropdwn.classList.remove('show');
                    }
                }
            }
        }
        const ifLoggedOut = () => (
            <div className="splashbuttons">
                <Link className="splashsignup" to="/signup">SIGN UP</Link>
                <Link className="splashlogin" to="/login">LOG IN</Link>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="splashbuttons">
                <button className="profilebtn" onClick={btnclickdrop}>
                    {this.props.currentUser.username}
                </button>
                <div className="dropdownmenu" id="drpdwnmenu">
                    <Link className="profile" to={`/users/${this.props.currentUser.id}`} >Profile</Link>
                    <input className="splashlogout" type="submit" onClick={this.props.logout} value="Log Out"/>
                </div>
            </div>
        )
        return (
            <div>
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
            </div>
        )
    }

}

export default SplashComponent;