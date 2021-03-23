import React from 'react';
import { Link } from 'react-router-dom';

class MusicComponent extends React.Component {
    constructor(props){
        super(props)
        this.audioRef = React.createRef();
        this.state = {
            playing: false,
            volume: 0.5,
        }
        // this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }
    componentDidMount(){
        this.props.getSongs();
    }
    handlePlay(){
        if(this.state.playing){
            this.audioRef.current.pause();
            this.setState({playing: false});
        } else{
            this.audioRef.current.play();
            this.setState({playing: true});
        }
    }
    handleMute(){
        if(this.audioRef.current.muted){
            this.audioRef.current.muted = false; //unmutes
            // this.setState({}) //brings back to
        } else {
            this.audioRef.current.muted = true; //mutes
        }
    }
    handleVolume(){
        return e => this.setState({ volume: e.currentTarget.value });
    }
    render() {
        const ifLoggedOut = () => (
            <div className="musicplayerdiv" id="bottomsignupsplash">
                <div className="righttext">
                    <p>PREVIEW OF CHARMTUNES</p>
                    <p>Sign up to get unlimited songs. No credit card needed.</p>
                </div>
                <Link className="splashsignupbottom" to="/signup">SIGN UP FREE</Link>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="musicplayerdiv">
                <div>
                    <button className="play" onClick={this.handlePlay}>play pause</button>
                </div>
                <div>
                    <button className="mute" onClick={this.handleMute}>mute</button>
                </div>
                <div>
                    <input 
                        type="range" 
                        className="volume"
                        min="1"
                        max="100" 
                        value="100"
                        onChange={this.handleVolume}> 
                    </input>
                </div>
                <audio className="musicplayer" ref={this.audioRef}>
                    <source src={window.mp3url} type="audio/mpeg"/>
                </audio>
                <p></p>
            </div>
        )
        return(
            <div>
                <p>{this.props.songs.title}</p>
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
            </div>
        )
    }
}
export default MusicComponent;