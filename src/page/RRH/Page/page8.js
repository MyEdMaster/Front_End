import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page8 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/8.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/house.jpg' alt="village" width="600" height="400"/>
                    <p>“Oh thank goodness, dear! Come in darling. I was worried you got lost in the woods!” </p>
                    {/*<p>“哦，谢天谢地，亲爱的！ 亲爱的来吧。 我担心你在树林里迷路了！“</p>*/}
                    <p>Grandma said, thinking that it was her granddaughter. </p>
                    {/*<p>奶奶说，以为这是她的孙女。</p>*/}
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page9');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
