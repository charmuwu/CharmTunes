import React from 'react';

class PlaylistSongs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // should use this instead to keep code dry?
            playlistId: 21, 
            currentTrackNumber: 1,
            songs: '',
        };
        // this.setState({playlistId: Number.parseInt(this.props.match.params.playlistObjId)});
        // this.setState({songs: this.props.playlists[this.state.playlistId].songs});
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        // let playlistId = Number.parseInt(this.props.match.params.playlistObjId);
        // let songs = this.props.getPlaylist(playlistId).then((data) => data.songs);
        // console.log(songs);
        console.log(this.props);
        // let songList = this.props.playlists[21].songs;
        // this.setState({songs: songList});
        
        // when we get to each playlist, fetchPlaysongs and then show them all

        
        // get all the songs, they're in entities playlist[playlistId].songs
        // should do this instead to help code be dry? maybe use the redux state instead?

        // let playlistId = Number.parseInt(this.props.match.params.playlistObjId);
        // this.props.fetchPlaysongs(playlistId);
        // let songs = this.props.getPlaylist(playlistId).songs;
        // console.log(songs);
        // debugger
        // this.props.fetchPlaysongs(this.props.playlistId); // use this if redux state?
        // this.props.fetchPlaysongs(this.state.playlistId); // could also use this?

        // send in the playlist ID into the fetch and return all the songID's
        // will we have to call getSong(songid) multiple times??
        // or will the ajax request send it all at once and we can .map instead?    
    }
    componentDidUpdate(prevProps){
        // will have to copy componentDidMount since not using hooks :(
            //probably change on match.params change?
    }
    handleDelete(e){
        let playlistId = Number.parseInt(this.props.match.params.playlistObjId);
        let songId = Number.parseInt(e.currentTarget.attributes.songid.value);
        debugger
        // this.props.handleDelete(playlistId,songId);
    }
    // enable shuffle button on the music bar to send a request here to randomize track numbers?
    
    // will have to set up an auto play function once duration = current time and increase currentTrack#
    render() {
        
        // if(songs){
        //     console.log(songs);
        //     // songs = Object.values(this.props.songs)
        // }
        return(
            <div className='pSongContainer'> 
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

                                {/* <div>{trackNumber}</div> */}
                                {/* increment how? a key from .map do/end block starting from 1? */}
                                {/* how will we shuffle then? create a shuffled array? and get track# and play that one? */}
                                {/* array with same length filled with random numbers */}
                                
                            </div>

                            {/* <div className='pSongAlbum'>{songObj.album}</div> */}

                            <div className='pSongDateAdded'>{/* playsong date added??? get using playlistId and songObj.id? */}</div>

                            <div className='pSongRight'>
                                <div>LIKE</div>
                                {/* <div>{songObj.duration}</div> */}
                                <div songid='2' onClick={this.handleDelete}>
                                    {/* <div className='pSongDelete' songid={songObj.id} onClick={this.handleDelete}> */}
                                        DELETE
                                    {/* </div> */}
                                    dot dot dot
                                </div> {/* remove playsong goes here. playlist Id from match.params and songObj.id */}
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PlaylistSongs