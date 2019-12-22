import React from 'react';
import classes from './index.module.css';


import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";

export class Page1 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/1.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/house.jpg' alt="village" width="600" height="400"/>
                    {/*todo:<p className="red-text">Lack village.jpg</p>*/}
                    <p> Once upon a time, there was a little girl who lived in a small town near the forest.</p>
                    {/*<p>曾几何时，有一个小女孩住在森林附近的一个村庄里。</p>*/}
                    <p>The little girl always wore a red
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("jacket")}}
                        >
                            hood
                        </button>
                        whenever she went out, so everyone called her Little Red Riding Hood.
                    </p>
                    {/*<p>每当她出门的时候，小女孩总是穿着红色的帽子，所以每个人都称她为小红帽。</p>*/}
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page2');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
