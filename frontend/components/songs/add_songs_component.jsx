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
        // removes the div of the song just added from the recommended list
    }
    render(){

        return(
            <div className="songAddContainer">
                {/* 나는 바람이다 */}
                <div>Recommended</div>
                <div>Add any song to your playlist!</div>
                <div>
                    {/* list of songs */}
                    <div className='left'>
                        <div>Art</div>
                        <div>
                            <div>Title</div>
                            <div>Author</div>
                        </div>
                    </div>
                    <div className='middle'>Album</div>
                    <div className='right' onClick={this.handleClick}>Add</div>
                </div>
            </div>
        );
    }
}

export default AddSongs;