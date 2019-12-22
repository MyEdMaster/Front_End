import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page14 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/14.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/eyes.jpg' alt="village" width="600" height="400"/>
                    <p>“But grandmother! What about your
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("big")}}
                        >huge</button> eyes,” she asked.
                    </p>
                    {/*<p>“但是奶奶！ 你的巨大眼睛怎么样，“她问道。</p>*/}
                    <p>“The better to see you with my dear,” the wolf replied once again. </p>
                    {/*<p>“亲爱的，亲爱的，你会更好，”狼再次回答道。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page15');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
