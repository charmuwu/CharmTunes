import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'My Playlist',
            description: '',
            genre: '',
            artwork: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePLClickOpen = this.handlePLClickOpen.bind(this);
        this.handlePLClickClose = this.handlePLClickClose.bind(this);
    }
    // componentDidMount(){
            //this.props.fetchPlaysongs(playlistid)
    // };
    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state)
        .then(() => this.props.history.push("/"));
    }
    handlePLClickOpen(){
        const modal = document.getElementById("playlistModal");
        modal.style.display = "block";
    }
    handlePLClickClose(){
        const modal = document.getElementById("playlistModal");
        modal.style.display = "none";
    }
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render() {
        //get array of playlists and length of array
        // add in playsong query here    
        return (
            <div className="playlistContainer">

                <div className="plinfobar">
                    <div className="plartwork">
                        <svg className="playlistartwork">
                            {/* <path d="M33.402 3.006L8.852 31.751l-2.337 12.61 12.09-4.281 24.552-28.746-9.755-8.328zM9.112 41.32l1.543-8.327 6.44 5.5-7.983 2.827zm9.418-4.231l-6.712-5.732L33.625 5.825l6.711 5.731L18.53 37.089z"></path> */}
                            <path fill="#afafaf" d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"></path>
                        </svg>
                        {/* this.state.artwork inside image tag or something */}
                    </div>
                    <div className="pldetails">
                        <div className="pldetail1">
                            PLAYLIST
                        </div>
                        <div className="pldetailstitle">
                            {this.state.title}
                        </div>
                        <div className="description">
                            {this.state.description}
                        </div>
                        <div className="pldetailscreator">
                            <div className="pldcreatorname">
                                {/* get name of the user here */}
                            </div>
                            <div className="pldnumberofsongs">
                                {/* playlist song length 
                                get the list of songs using playsong action
                                */}
                            </div>
                            <div className="pldtotallength">
                                {/* total length of all songs together */}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    add song
                    {/* add song button instead for now */}
                </div>
                
                <button id="myBtn" onClick={this.handlePLClickOpen}> Open Modal</button>

                {/* everything below should be in a modal form */}
                <div id="playlistModal" className="playlistModalyay">
                    <div className="playlistModalContent">
                        Edit details
                        <button className="closeModal"
                                onClick={this.handlePLClickClose}>
                            <svg className="closeModalButton">
                                <path fill="#afafaf" d="M14.354 2.353l-.708-.707L8 7.293 2.353 1.646l-.707.707L7.293 8l-5.647 5.646.707.708L8 8.707l5.646 5.647.708-.708L8.707 8z"></path>
                            </svg>
                        </button>
                        <form onSubmit={this.handleSubmit} className="playlistForm">
                            <label id="plformlabel" htmlFor="pltitle">
                                title
                            </label>
                            <input
                                id="pltitle"
                                className="plinput"
                                type='text'
                                placeholder='Playlist #1'//get user's playlist count and add # interpolate
                                value={this.state.title}
                                onChange={this.update('title')}
                                />
                            <label id="plformlabel" htmlFor="pldescription">
                            </label>
                            <input
                                id="pldescription"
                                className="input"
                                type='description'
                                placeholder="Add a description"
                                value={this.state.description}
                                onChange={this.update('description')}
                                />
                            <label >
                                genre
                            </label>
                            <input
                                id="plgenre"
                                className="input"
                                type='genre'
                                // placeholder=""
                                value={this.state.genre}
                                onChange={this.update('genre')}
                                />
                            {/* how do i upload artwork? */}
                            <div className="savebtn">
                                <button type='submit' className="savebutton">SAVE</button>
                            </div>
                            <p>By proceeding, you agree to give CharmTunes access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistForm;