import React from 'react';
import classes from './index.module.css';

import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page3 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/3.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/leaving.jpg' alt="village" width="600" height="400"/>
                    <p>“Be careful, Little Red Riding Hood,” her mother warned.</p>
                    {/*<p>“小心，小红帽，”她的母亲警告说。</p>*/}
                    <p>“You never know what’s hiding in the dark scary woods. Please do not talk to
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("someone you do not know")}}
                        >
                            strangers
                        </button>
                       !”
                    </p>
                    {/*<p>“你永远不知道什么隐藏在黑暗可怕的树林里。 请不要和陌生人说话！“</p>*/}
                    <p>“I promise to be careful,” Little Red Riding Hood said.</p>
                    {/*<p>“我保证要小心，”小红帽说道。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page4');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
