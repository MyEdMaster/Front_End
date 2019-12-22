import React from 'react';
import classes from './index.module.css';

import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";

export class Page2 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/2.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/basket.jpg' alt="village" width="600" height="400"/>
                    <p>One day, Little Red Riding Hood’s mother told her that her grandmother was sick.</p>
                    {/*<p>有一天，小红帽的母亲告诉她，她的祖母病了。</p>*/}
                    <p>Her mother gave her a basket full of treats to give to her grandmother, who lived on the other side of the forest.</p>
                    {/*<p>她的母亲递给她一篮子零食，送给生活在森林另一边的祖母。</p>*/}
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page3');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
