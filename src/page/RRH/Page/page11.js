import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page11 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/11.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/grandma.jpg' alt="village" width="600" height="400"/>
                    <p>“Who is it?” He called in a weak voice.</p>
                    {/*<p>“它是谁？”他用微弱的声音喊道。</p>*/}
                    <p>"It’s Little Red Riding Hood,” she said.</p>
                    {/*<p>“这是小红帽，”她说。</p>*/}
                    <p>“Oh, how lovely. Come in, my dear!” The wolf called out.</p>
                    {/*<p>“哦，多么可爱。 进来，亲爱的！“狼喊道</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page12');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
