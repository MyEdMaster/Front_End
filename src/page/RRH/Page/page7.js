import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page7 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/7.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/knocking.jpg' alt="village" width="600" height="400"/>
                    <p>The wolf took a
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("a shorter path")}}
                        >
                            shortcut
                        </button>
                        to Little Red Riding Hood’s grandmother’s house.
                    </p>
                    {/*<p>狼走了小红帽的祖母家的捷径。</p>*/}
                    <p>The wolf knocked on the door. </p>
                    {/*<p>狼喘不过气来敲门。</p>*/}
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page8');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
