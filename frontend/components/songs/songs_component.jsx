import React from 'react';

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
                    <div key={songObj.id}> {songObj.title}
                        <button onClick={() => this.handleClick(songObj.id)}></button>
                    </div>
                ))}
            </div>
        )
    }
}
export default SongsComponent;