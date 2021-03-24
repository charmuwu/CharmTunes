import React from 'react';
import { Link } from 'react-router-dom';
import {GrPlayFill} from 'react-icons/gr'
import {GiPauseButton} from 'react-icons/gi'
import {ImLoop} from 'react-icons/im'

class MusicComponent extends React.Component {
    constructor(props){
        super(props)
        this.audioRef = React.createRef();
        this.muteRef = React.createRef();
        this.volRef = React.createRef();
        this.state = {
            playing: false,
            volume: 0.5,
            currentTime: 0.0,
            duration: 0.0,
        }
        this.handleDuration = this.handleDuration.bind(this);
        this.handleLoop = this.handleLoop.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleScrub = this.handleScrub.bind(this);
        
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
        const currvol = this.audioRef.current.volume;
        if(this.audioRef.current.muted){
            this.audioRef.current.muted = false; //unmutes
            // this.setState({}) //brings back to
            this.volRef.current.value = currvol * 100.0;
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
    handleCurrentTime(){
        //setinterval at 500ms
        this.setState({currentTime: this.audioRef.currentTime})
    }
    handleDuration(){
        if(this.props.currentUser){
            this.setState({duration: this.audioRef.current.duration})
        }
    }
    handleScrub(e){
        const percent = e.currentTarget.value;
        const time = (this.state.duration * percent ) / 100
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
                        <img className="albumartinfo" src={window.albumart}></img>
                    </div>
                    <div>
                        {/* {this.props.songs.title} */}
                    </div>
                </div>
                <div className="divcontrols">
                    <div className="divcontrolsbaby">
                        <div>
                            <button className="play" onClick={this.handlePlay}>
                                {this.state.playing ? <GiPauseButton /> : <GrPlayFill /> }
                            </button>
                        </div>
                        <div>
                            <button 
                                className="loop" 
                                onClick={this.handleLoop}
                                id="loop">
                            <ImLoop />
                            </button>
                        </div>
                    </div>
                    <div className="divaudiobar">
                        <div>
                            {/* display the current time in minutes:seconds here*/}
                            {this.state.currentTime}
                        </div>
                        <input 
                            type="range"
                            className="scrubber"
                            min="0"
                            max="100"
                            onChange={this.handleScrub}
                            >
                        </input>
                        <div>
                            {Math.floor(this.state.duration / 60)}:{Math.floor(this.state.duration)%60}
                        </div>
                    </div>
                </div>
                <div>
                    <button 
                        className="mute" 
                        onClick={this.handleMute}
                        ref={this.muteRef}>
                    mute</button>
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
                <audio 
                    className="musicplayer" 
                    ref={this.audioRef}
                    onLoadedData={this.handleDuration}>
                    <source src={window.mp3url} type="audio/mpeg"/>
                </audio>
                <p></p>
            </div>
        )
        return(
            <div>
                {/* <p>{this.props.songs.title}</p> */}
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
            </div>
        )
    }
}
export default MusicComponent;