import React from 'react';
import classes from './index.module.css';
import {
    BigPlayButton,
    ControlBar,
    CurrentTimeDisplay,
    ForwardControl,
    LoadingSpinner, PlaybackRateMenuButton,
    Player,
    ReplayControl, TimeDivider, VolumeMenuButton
} from "video-react";

export class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    render() {
        return (
            <div  className={classes.border}>
            <Player>
                <source src={this.props.url} />
                <LoadingSpinner />
                <BigPlayButton position="center" />
                <ControlBar>
                    <ReplayControl seconds={10} order={1.1} />
                    <ForwardControl seconds={30} order={1.2} />
                    <CurrentTimeDisplay order={4.1} />
                    <TimeDivider order={4.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                    <VolumeMenuButton disabled />
                </ControlBar>
            </Player>
            </div>
        );
    }
}
