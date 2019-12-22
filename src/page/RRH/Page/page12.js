import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page12 extends React.Component {
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
               <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/12.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/dress.jpg' alt="village" width="600" height="400"/>
                    <p>When Little Red Riding Hood entered the
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("small house")}}
                        >cottage</button>,
                        she thought her grandmother looked different.
                    </p>
                    {/*<p>当小红帽进入小屋时，她认为她的祖母看起来与众不同。</p>*/}
                    <p>“Grandmother, your voice is
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("different")}}
                        >odd</button>. Are you okay?” she
                        asked.
                    </p>
                    {/*<p>“奶奶，你的声音很奇怪。 你还好吗？“她问道。</p>*/}
                    <p>“Oh, I am fine. Just a bit of a cold. That's all,” the wolf squeaked.</p>
                    {/*<p>“哦，我很好。 只是有点感冒。 这就是全部，“狼吱吱作响。</p>*/}


                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page13');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
