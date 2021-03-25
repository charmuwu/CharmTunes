import React from 'react';
import { Link } from 'react-router-dom';
import {IoPlaySharp} from 'react-icons/io5';
import {GiPauseButton} from 'react-icons/gi';
import {ImLoop} from 'react-icons/im';
import {MdSkipPrevious, MdSkipNext} from 'react-icons/md';
import {FiVolume2, FiVolume1, FiVolume, FiVolumeX} from 'react-icons/fi'

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
            muted: false,
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
        // this.props.getSong(1);
    }
    handlePlay(){
        if(this.state.playing){
            this.audioRef.current.pause();
            this.setState({playing: false});
            clearInterval(this.intervalId)
        } else{
            this.audioRef.current.play();
            this.setState({playing: true});
            this.intervalID = setInterval(()=>this.setCurrentTime(), 500);
            
        }
    }
    handleMute(){
        const currvol = this.audioRef.current.volume;
        if(this.audioRef.current.muted){
            this.audioRef.current.muted = false; //unmutes
            this.volRef.current.value = currvol * 100.0;
            this.setState({muted: false});
        } else {
            this.audioRef.current.muted = true; //mutes
            this.volRef.current.value = 0;
            this.setState({muted: true});
        }
    }
    handleVolume(e){
        const vol = e.currentTarget.value / 100.0;
        this.audioRef.current.volume = vol;
        if(this.audioRef.current.muted){
            this.audioRef.current.muted = false;
        }
        this.setState({volume: vol });
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
    setCurrentTime(){
        this.setState({currentTime: this.audioRef.current.currentTime})
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
        let currentSongId;
        let currentSongURL ="";
        let currentSongImg = "";
        if(this.props.currentSong){
            currentSongId = this.props.currentSong.id;
            currentSongTitle = this.props.currentSong.title;
            currentSongArtist = this.props.currentSong.artist;
            
            this.props.currentSong.id === 1 ? currentSongURL=window.mp3url : currentSongURL=window.garden;
            this.props.currentSong.id === 1 ? currentSongImg=window.albumart : currentSongImg=window.albumart2;
        }

        const ifLoggedIn = () => (
            <div className="musicplayerdiv">
                <div className="songinfo">
                    <div>
                        <img className="albumartinfo" src={currentSongImg}></img>
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
                            className='play'
                            onClick={this.handlePlay}>
                            {this.state.playing ? <GiPauseButton className="musicbuttons"/> : <IoPlaySharp className="musicbuttons"/> }
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
                        <div className="songtime">
                            {/* display the current time in minutes:seconds here*/}
                            {Math.floor(this.state.currentTime / 60)}:
                            {Math.floor(this.state.currentTime) % 60 < 10 ? `0${Math.floor(this.state.currentTime) % 60}`
                            : Math.floor(this.state.currentTime) % 60}
                        </div>
                        <input 
                            type="range"
                            className="scrubber"
                            min="0"
                            max="100"
                            onChange={this.handleScrub}
                            >
                        </input>
                        <div className="songtime">
                            {Math.floor(this.state.duration / 60)}:{Math.floor(this.state.duration)%60}
                        </div>
                    </div>
                </div>
                <div className="volumeControlStuff">
                    <button 
                        className="mute" 
                        onClick={this.handleMute}
                        ref={this.muteRef}>
                    {this.state.volume === 0 || this.state.muted ? <FiVolumeX className="musicbuttons"/> 
                        :this.state.volume < 0.20 ? <FiVolume className="musicbuttons"/> 
                            :this.state.volume <0.66 ? <FiVolume1 className="musicbuttons"/> 
                                :<FiVolume2 className="musicbuttons"/>}
                    </button>
                    <input 
                        type="range" 
                        className="volume"
                        min="0"
                        max="100" 
                        onChange={this.handleVolume}
                        ref={this.volRef}> 
                    </input>
                </div>
                <audio
                    key={currentSongId}
                    className="musicplayer" 
                    ref={this.audioRef}
                    onLoadedData={this.handleDuration}>
                    <source src={currentSongURL} type="audio/mpeg"/>
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