import React from 'react';
import { Link } from 'react-router-dom';

class MusicComponent extends React.Component {
    constructor(props){
        super(props)
        this.audioRef = React.createRef();
        this.muteRef = React.createRef();
        this.volRef = React.createRef();
        this.state = {
            playing: false,
            volume: 0.5,
            duration: 0.0,
        }
        this.handleLoop = this.handleLoop.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleScrub = this.handleScrub.bind(this);
    }
    componentDidMount(){
        this.props.getSongs();
        this.setState({duation: this.audioRef.current.duration})
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
        const currvol = this.audioRef.current.volume;
        if(this.audioRef.current.muted){
            this.audioRef.current.muted = false; //unmutes
            this.volRef.current.value = currvol;// this.setState({}) //brings back to
        } else {
            this.audioRef.current.muted = true; //mutes
            this.volRef.current.value = 0;
        }
    }
    handleVolume(e){
        const vol = e.currentTarget.value / 100.0;
        this.audioRef.current.volume = vol;
        if(this.audioRef.current.muted){
            this.audioRef.current.muted = false;
        }
        return e => this.setState({ volume: vol });
    }
    handleLoop(){
        const loopbtn = document.getElementById('loop');
        loopbtn.classList.toggle('looped');

        if(this.audioRef.current.loop){
            this.audioRef.current.loop = false;
        } else {
            this.audioRef.current.loop = true;
        }
    }
    handleDuration(){
        /* {this.audioRef.current.seekable} */
        Math.floor(this.audioRef.current.currentTime)
        /Math.floor(this.audioRef.current.seekable.duration)
    }
    handleScrub(e){
        const time = e.currentTarget.value;
        this.audioRef.current.currentTime = time;
        //{this.audioRef.current.duration}
    }
    render() {
        const ifLoggedOut = () => (
            <div className="loggedoutmusicbanner" id="bottomsignupsplash">
                <div className="righttext">
                    <p>PREVIEW OF CHARMTUNES</p>
                    <p>Sign up to get unlimited songs. No credit card needed.</p>
                </div>
                <Link className="splashsignupbottom" to="/signup">SIGN UP FREE</Link>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="musicplayerdiv">
                <div className="songinfo">
                    <div>
                        {this.props.songs.title}
                    </div>
                </div>
                <div className="divcontrols">
                    <div className="divcontrolsbaby">
                        <div>
                            <button className="play" onClick={this.handlePlay}>play pause</button>
                        </div>
                        <div>
                            <button 
                                className="loop" 
                                onClick={this.handleLoop}
                                id="loop">
                            loop
                            </button>
                        </div>
                    </div>
                    <div className="divaudiobar">
                        <div>
                            {setInterval(() => {
                                {this.audioRef.current.currentTime}
                                //this.interval keep 1 interval key 
                                //jordon is a rage quitter
                            }, 1000)}
                        </div>
                        <input 
                            type="range"
                            step="1"
                            className="scrubber"
                            min="0"
                            max="100"
                            onChange={this.handleScrub}
                            >
                        </input>
                        <div>
                            {this.state.duration}
                        </div>
                    </div>
                </div>
                <div>
                    <button 
                        className="mute" 
                        onClick={this.handleMute}
                        ref={this.muteRef}>
                    mute</button>
                </div>
                <div>
                    <input 
                        type="range" 
                        className="volume"
                        min="0"
                        max="100" 
                        // value={this.state.volume * 100}
                        onChange={this.handleVolume}
                        ref={this.volRef}> 
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