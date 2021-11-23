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
    }
    // componentDidMount(){
            
    // };
    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state)
        .then(() => this.props.history.push("/"));
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
                                {/* playlist song length */}
                            </div>
                            <div className="pldtotallength">
                                {/* total length of all songs together */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* everything below should be in a modal form */}
                <div>
                    Edit details
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
                            description
                        </label>
                        <input
                            id="pldescription"
                            className="input"
                            type='description'
                            placeholder="Describe the playlist"
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
        )
    }
}

export default PlaylistForm;