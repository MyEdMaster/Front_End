import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page4 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/4.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/butterflies.jpg' alt="village" width="600" height="400"/>
                    <p>But as soon as she left, Little Red Riding Hood forgot all about her promise and spent time
                        picking pretty flowers and
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("to run after")}}
                        >
                            chasing
                        </button>
                        colorful
                        butterflies.
                    </p>


                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page5');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>
            </div>


        );
    }
}
