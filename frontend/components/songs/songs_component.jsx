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
    handleClick(){
        this.props.getSong(1);
    }
    handleClick2(){
        this.props.getSong(0);
    }
    render(){
        return(
            <div className="musicContainer">
                <button onClick={this.handleClick}>song data 1</button>
                <button onClick={this.handleClick2}>other song data not loaded lol</button>
            </div>
        )
    }
}
export default SongsComponent;