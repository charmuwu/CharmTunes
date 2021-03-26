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
        // let initialVol = this.volRef.current ? this.volRef.current.value : 0.5;
        this.state = {
            // volume: initialVol,
            progress: 0.0,
            currentTime: 0.0,
            duration: 0.0,
            muted: false,
        }

        this.handleOnLoaded = this.handleOnLoaded.bind(this);
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
        if(this.props.isPlaying){
            this.audioRef.current.pause();
            this.props.playPause();
            clearInterval(this.intervalId)
        } else{
            this.audioRef.current.play();
            this.props.playPause();
            this.intervalID = setInterval(()=>{
                this.setCurrentTime();
                this.setCurrentProgress();
            }, 500); 
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
        this.props.currVol(vol);
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
    setCurrentProgress(){
        this.setState({progress: this.state.currentTime / this.state.duration * 100})
    }
    handleOnLoaded(){
        if(this.props.isPlaying){
            this.audioRef.current.play();
            this.intervalID = setInterval(()=>{
                this.setCurrentTime();
                this.setCurrentProgress();
            }, 500);
        }
        if(this.props.currentUser){
            this.setState({duration: this.audioRef.current.duration})
        }
        this.audioRef.current.volume = this.props.currentVolume;
    }

    handleScrub(e){
        const percent = e.currentTarget.value;
        const time = (this.state.duration * percent ) / 100
        this.audioRef.current.currentTime = time;
        this.setState({progress: percent})
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
            
            this.props.currentSong.id === 1 ? currentSongURL=window.mp3url : this.props.currentSong.id === 2 ? currentSongURL=window.garden : this.props.currentSong.id === 3 ? currentSongURL = window.kondor : currentSongURL = window.melody;
            this.props.currentSong.id === 1 ? currentSongImg=window.albumart : this.props.currentSong.id === 2 ? currentSongImg=window.albumart2 : this.props.currentSong.id === 3 ? currentSongImg=window.albumart3 : currentSongImg=window.albumart4;
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
                            {this.props.isPlaying ? <GiPauseButton className="musicbuttons"/> : <IoPlaySharp className="musicbuttons"/> }
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
                            value={this.state.progress}
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
                    {this.props.currentVolume === 0 || this.state.muted ? <FiVolumeX className="musicbuttons"/> 
                        :this.props.currentVolume < 0.20 ? <FiVolume className="musicbuttons"/> 
                            :this.props.currentVolume <0.66 ? <FiVolume1 className="musicbuttons"/> 
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
                    onLoadedData={this.handleOnLoaded}>
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