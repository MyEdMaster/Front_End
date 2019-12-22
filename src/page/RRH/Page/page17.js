import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page17 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/17.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/lumber.jpg' alt="village" width="600" height="400"/>
                    <p>A <button
                        className={classes.button1}
                        onClick={()=>{this.myClick("a job where a person cuts trees for wood")}}
                    >lumberjack</button> was
                        chopping wood nearby and heard the cries for help, and quickly ran to the cottage.
                    </p>
                    {/*<p>一名伐木工人正在附近砍木头，听到呼救声，然后迅速跑到小屋。</p>*/}
                    <p>The brave lumberjack grabbed the wolf and made him get Grandma out of the closet. </p>
                    {/*<p>勇敢的伐木工人抓住了狼，让他让奶奶走出壁橱。</p>*/}


                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page18');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
