import React from 'react';
import { Link } from 'react-router-dom';

class SplashComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {pathname} = this.props.location;
        if (pathname === "/login" || pathname === "/signup"){
            return null;
        }
        function btnclickdrop(){ 
            const dropdwn = document.getElementById("drpdwnmenu");
            dropdwn.classList.toggle("show");

            const tri = document.getElementById("triangle");
            tri.classList.remove('triangle');
            tri.classList.add('down');

            window.onclick = function(e) {
                if (!e.target.matches('.profilebtn')) {  
                    if (dropdwn.classList.contains('show')) {
                        dropdwn.classList.remove('show');
                    }
                    if (tri.classList.contains('.down')){
                        tri.classList.remove('down');
                        tri.classList.add('triangle');
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
                <div>
                    <button className="profilebtn" onClick={btnclickdrop}>
                        {this.props.currentUser.username}
                    </button>
                    {/* <div  id="triangle"></div> */}
                </div>
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