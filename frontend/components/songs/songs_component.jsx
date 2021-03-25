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
                        <button 
                            className="shantoplaybutton" 
                            onClick={() => this.handleClick(songObj.id)}>
                                <IoPlaySharp id="shantosbaby"/>
                        </button>
                        <div>
                            {/* {songObj.artwork}  instead of the below*/}
                            <img
                                className="songcontainerart" 
                                src={songObj.id === 1 ? window.albumart: songObj.id === 2 ? window.albumart2 : window.albumart3}></img>
                            <p className="songcontainertitle">{songObj.title}</p>
                            <p className="songcontainerartist">{songObj.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default SongsComponent;