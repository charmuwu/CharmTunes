import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            genre: '',
            artwork: '',
        };
    }
    componentDidMount(){
            
    };
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        .then(() => this.props.history.push("/"));
    }
    render() {
        return (
            <div>
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
                    <label >
                        description
                    </label>
                    <label >
                        other thing
                    </label>
                </form>
            </div>
        )
    }
}

export default PlaylistForm;