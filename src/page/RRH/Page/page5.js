import React from 'react';
import classes from './index.module.css';
import llrh from '../Lib/llrh.jpg';
import bbw from '../Lib/bbw.jpg';
import audio from '../Lib/audio/5.mp3'
import leaving from '../Lib/leaving.jpg'
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    myClick=(text)=>{
        alert(text);
    }

    render() {
        return (
            <div className={`${classes.body} align-content-center w-100 h-100 text-center`}>
                <AskQuestion/>
                <Audio audio={audio}/>
                <div style={{padding:'50px 0 150px 0'}}>
                    <img className="py-2" src={leaving} alt="village" width="600" height="400"/>
                    <p>Little Red Riding Hood was enjoying the summer day so much that she did not notice a big, dark shadow behind her.</p>
                    {/*<p>小红帽很享受这个夏日，以至于她没有注意到身后有一个巨大而黑暗的阴影。</p>*/}
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page6');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
