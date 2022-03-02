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
    handleClick(e){
        // creates the playsong relationship
        let playlistId = Number.parseInt(this.props.match.params.playlistObjId);
        let songId = Number.parseInt(e.currentTarget.attributes.songid.value);
        this.props.createPlaysong(playlistId, songId);
        // removes the div of the song just added from the recommended list
        // let songToHide = document.getElementById(songId); //can we add another part to this string?
        // songToHide.style.display = "none";
    }
    render(){
        let songs;
        if(this.props.songs){
            songs = Object.values(this.props.songs)
        }
        return(
            <div className="songAddContainer">
                {/* 나는 바람이다 */}
                <div className='addSongTextContainer'>
                    <div className='addSongText1'>Recommended</div>
                    <div className='addSongText2'>Add any song to your playlist!</div>
                </div>
                {/* list of songs */}
                {/* may have to use css grid here instead... but this is okay for now */}
                {songs.map( songObj => (
                    <div className='addSongRow' key={songObj.id} id='song'> {/* for the id add different string? */}
                        <div className='addSongList'>
                            <div className='addSongLeft'>
                                <div className='addSongArt'>{songObj.artwork}</div> {/* should be the same way  songs componenet is ddone*/}
                                <div className='addSongTA'>
                                    <div className='addSongTitle'>{songObj.title}</div>
                                    <div className='addSongAuthor'>{songObj.artist}</div>
                                </div>
                            </div>
                            <div className='addSongAlbum'>{songObj.album}</div>
                            <button songid={songObj.id} className='addSongButton' onClick={this.handleClick}>ADD</button>
                        </div>    
                    </div>
                ))}

            </div>
        );
    }
}

export default AddSongs;