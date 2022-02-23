import React from 'react';

class AddSongs extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount(){
        // get all the songs when mounted to show on the bottom
        this.props.getSongs();
    }
    handleClick(){
        // creates the playsong relationship
        let playlistId = Number.parseInt(this.props.match.params.playlistObjId);
        let songId = e.currentTarget.id; //will this even work?
        this.props.createPlaysong(playlistId, songId);
        // removes the div of the song just added from the recommended list
        // let songToHide = document.getElementById( ) //get the songObj.id and shove it in here
    }
    render(){
        let songs;
        if(this.props.songs){
            songs = Object.values(this.props.songs)
        }
        return(
            <div className="songAddContainer">
                {/* 나는 바람이다 */}
                <div>Recommended</div>
                <div>Add any song to your playlist!</div>
                {/* list of songs */}
                {songs.map( songObj => (
                    <div className='addSong' key={songObj.id}>
                        <div className='left'>
                            <div>Art</div>
                            <div>
                                <div className='addSongTitle'>{songObj.title}</div>
                                <div className='addSongAuthor'>{songObj.author}</div>
                            </div>
                        </div>
                        <div className='addSongAlbum'>{songObj.album}</div>
                        <button className='addSongButton' onClick={this.handleClick}>Add</button>
                    </div>
                ))}

            </div>
        );
    }
}

export default AddSongs;