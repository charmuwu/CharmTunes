import React from 'react';


class MusicComponent extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return(
            <div>
                <audio controls className="">
                    <source src="test.mp3" type="audio/mpeg"/>
                </audio>
                <p>aaaaaaaa</p>
            </div>
        )
    }
}
export default MusicComponent;