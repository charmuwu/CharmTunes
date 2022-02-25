import React from 'react';

class PlaylistSongs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrackNumber: 1,
        };
    }
    componentDidMount() {
        // when we get to each playlist, fetchPlaysongs and then show them all
        this.props.fetchPlaysongs(); //send in the playlist ID into the fetch and return all the songID's
        //will we have to call getSong(songid) multiple times??
        // or will the ajax request send it all at once and we can .map instead?
        
            
    }
    // will have to set up an auto play function once duration = current time and increase currentTrack#
    render() {
        return(
            <div> 
                {/* css should be very similar to add_songs_component */}
                <div>
                    <div> #  TITLE</div>
                    <div>ALBUM</div>
                    <div>DATE ADDED</div>
                    <div>Duration</div> {/* clock svg here instead*/}
                </div>
                {/* may have to use CSS Grid instead actually... */}
                {/* do block goes here when we get all the songs to render */}
                <div className='pSongRow'>
                    <div className='pSongList'>
                            <div className='pSongLeft'>
                                <div className='pSongArt'>{songObj.artwork}</div> {/* should be the same way  songs componenet is ddone*/}
                                <div className='pSongTA'>
                                    <div className='pSongTitle'>{songObj.title}</div>
                                    <div className='pSongAuthor'>{songObj.artist}</div>
                                </div>
                            </div>

                            <div className='pSongAlbum'>{songObj.album}</div>

                            <div className='pSongDateAdded'>{/* playsong date added??? get using playlistId and songObj.id? */}</div>

                            <div className='pSongRight'>
                                <div>LIKE</div>
                                <div>{songObj.duration}</div>
                                <div>dot dot dot</div> {/* remove playsong goes here. playlist Id from match.params and songObj.id */}
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlaylistSongs