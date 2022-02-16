import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'My Playlist',
            description: '',
            genre: '',
            artwork: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handlePLClickClose = this.handlePLClickClose.bind(this);
    }
    handlePLClickClose(){
        const modal = document.getElementById("playlistModal");
        const modalbg = document.getElementById("modalBG");
        modal.style.display = "none";
        modalbg.style.display = "none";
    }
    componentDidMount(){
        let id = Number.parseInt(this.props.match.params.playlistObjId);

        this.props.getPlaylist(id).then((data) => 
        this.setState({title: data.playlist.title, 
            description: data.playlist.description, 
            genre: data.playlist.genre,
            artwork: data.playlist.artwork}));
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state)
        .then(() => this.props.history.push("/"));
    }
    handleUpdateSubmit(e) {
        e.preventDefault();
        this.props.updatePlaylist(this.state, this.props.currentPlaylistId)
        .then(() => this.props.history.push("/"));
    }
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render() {
        //get array of playlists and length of array
        // add in playsong query here    
        return (
            <div>
            {/* everything below should be in a modal form */}
                <div id ="modalBG" className="modalBG" onClick={this.handlePLClickClose}></div>
                <div id="playlistModal" className="playlistModalyay">
                    <div className="playlistModalContent">
                        <div className="firstModalDiv">
                            <h1 className="modalText">
                                Edit details
                            </h1>
                            <button className="closeModal"
                                    onClick={this.handlePLClickClose}>
                                <svg className="closeModalButton">
                                    <path fill="#afafaf" d="M14.354 2.353l-.708-.707L8 7.293 2.353 1.646l-.707.707L7.293 8l-5.647 5.646.707.708L8 8.707l5.646 5.647.708-.708L8.707 8z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="secondModalDiv">
                            <div className="plformartwork">
                                <svg className="playlistartwork">
                                    <path fill="#afafaf" d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"></path>
                                </svg>
                            </div>
                            <form onSubmit={this.handleSubmit} className="playlistForm">
                                <label id="plformlabel" htmlFor="pltitle"></label>
                                <input
                                    id="pltitle"
                                    className="plinput"
                                    type='text'
                                    placeholder='Playlist #1'//get user's playlist count and add # interpolate
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    />
                                <label id="plformlabel" htmlFor="pldescription"></label>
                                <input
                                    id="pldescription"
                                    className="playlistInput"
                                    type='description'
                                    placeholder="Add a description"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    />
                                <label id="plformlabel" htmlFor="plgenre"></label>
                                <input
                                    id="plgenre"
                                    className="playlistInput"
                                    type='genre'
                                    placeholder="genre"
                                    value={this.state.genre}
                                    onChange={this.update('genre')}
                                    />
                                {/* upload artwork feature to be implemented here */}
                                <div className="savebtn">
                                    <button type='submit' className="savebutton" onClick={this.handlePLClickClose}>SAVE</button>
                                </div>
                            </form>
                        </div>
                        <p className="modalPara">By proceeding, you agree to give CharmTunes access to the image you choose to upload. Please make sure you have the right to upload the image.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaylistForm;