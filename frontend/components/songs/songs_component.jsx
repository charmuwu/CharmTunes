import React from 'react';
import {IoPlaySharp} from 'react-icons/io5';

class SongsComponent extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount(){
        this.props.getSongs();
        // this.props.getSong(1);
    }
    handleClick(id){
        this.props.getSong(id);
    }
    render(){
        let songs;
        if(this.props.songs){
            songs = Object.values(this.props.songs)
        }
        return(
            <div className="musicContainer">
                {songs.map( songObj => (
                    <div key={songObj.id} className="songcontainer"> 
                        <div>
                            {/* {songObj.artwork}  instead of the below*/}
                            <img
                                className="songcontainerart" 
                                src={songObj.id === 1 ? window.albumart:window.albumart2}></img>
                            <p className="songcontainertitle">{songObj.title}</p>
                            <p className="songcontainerartist">{songObj.artist}</p>
                        </div>
                        <button onClick={() => this.handleClick(songObj.id)}><IoPlaySharp /></button>
                    </div>
                ))}
            </div>
        )
    }
}
export default SongsComponent;