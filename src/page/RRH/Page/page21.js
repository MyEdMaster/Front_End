import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page21 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/21.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/food.jpg' alt="village" width="600" height="400"/>
                    <p>“Now Little Red Riding Hood, have you learned anything from this?” asked the grandmother.</p>
                    {/*<p>“现在小红帽，你从中学到了什么吗？”奶奶问道。</p>*/}
                    <p>“Yes, I should never talk to strangers because it is very dangerous,” said Little Red Riding Hood.</p>
                    {/*<p>“是的，我永远不应该和陌生人交谈，因为这是非常危险的，”小红帽说道。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/end');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
