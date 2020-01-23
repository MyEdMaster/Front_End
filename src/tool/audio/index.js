import React from 'react';


import classes from './index.module.css';


export class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
           <div className={classes.body}>
               <audio
                   style={{height:"2vw"}}
                   src={this.props.audio}
                   autoPlay={true}
                   controls={true}
               />
           </div>
        );
    }
}
