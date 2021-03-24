import React from 'react';
import { Link } from 'react-router-dom';
import {IoPlaySharp} from 'react-icons/io5';
import {GiPauseButton} from 'react-icons/gi';
import {ImLoop} from 'react-icons/im';
import {MdSkipPrevious, MdSkipNext} from 'react-icons/md';
import SongsComponent from '../songs/songs_component';

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

        this.handleCurrentTime = this.handleCurrentTime.bind(this);
        this.handleDuration = this.handleDuration.bind(this);
        this.handleLoop = this.handleLoop.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleScrub = this.handleScrub.bind(this);
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
        this.handleDuration();
        //setinterval at 500ms
        this.intervalID = setInterval(this.setCurrentTime(), 500)
        // refer to line 130
        if(this.state.playing){
 
        } else {
            // clearInterval(this.intervalId)
        }
    }
    setCurrentTime(){
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
        // console.log(this.props.currentSong);
        const ifLoggedOut = () => (
            <div className="loggedoutmusicbanner" id="bottomsignupsplash">
                <div className="righttext">
                    <p>PREVIEW OF CHARMTUNES</p>
                    <p>Sign up to get unlimited songs. No credit card needed.</p>
                </div>
                <Link className="splashsignupbottom" to="/signup">SIGN UP FREE</Link>
            </div>
        )

        let currentSongTitle = "";
        let currentSongArtist = "";
        if(this.props.currentSong){
            currentSongTitle = this.props.currentSong.title;
            currentSongArtist = this.props.currentSong.artist;
        }

        const ifLoggedIn = () => (
            <div className="musicplayerdiv">
                <div className="songinfo">
                    <div>
                        <img className="albumartinfo" src={window.albumart}></img>
                    </div>
                    <div className="songTA">
                        <p className="songTitle">{currentSongTitle}</p>
                        <p className="songArtist">{currentSongArtist}</p>
                    </div>
                </div>
                <div className="divcontrols">
                    <div className="divcontrolsbaby">
                        <button className='musicbuttons'>
                            <MdSkipPrevious />
                        </button>
                        <button 
                            className='musicbuttons'
                            onClick={this.handlePlay}>
                            {this.state.playing ? <GiPauseButton className="playbtn"/> : <IoPlaySharp className="playbtn"/> }
                        </button>
                        <button className='musicbuttons'>
                            <MdSkipNext />
                        </button>
                        <button 
                            className='musicbuttons' 
                            onClick={this.handleLoop}
                            id="loop">
                        <ImLoop />
                        </button>
                        
                    </div>
                    <div className="divaudiobar">
                        <div>
                            {/* display the current time in minutes:seconds here*/}
                            {this.state.currentTime / 60} : {this.state.currentTime % 60}
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
                    onLoadedData={this.handleCurrentTime}>
                    <source src={window.mp3url} type="audio/mpeg"/>
                </audio>
                <p></p>
            </div>
        )
        return(
            <div>
                <div>
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
                </div>
            </div>
        )
    }
}
export default MusicComponent;