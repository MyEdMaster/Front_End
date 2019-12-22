import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page16 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/16.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/chasing.jpg' alt="village" width="600" height="400"/>
                    <p>Little Red Riding Hood realized that the person on the bed was not her grandmother, but a big, scary wolf.</p>
                    {/*<p>小红帽意识到床上的人不是她的祖母，而是一只大而可怕的狼。</p>*/}
                    <p>Little Red Riding Hood shouted for help while running around the room, “Help! A wolf is trying to eat me!”</p>
                    {/*<p>小红帽在房间里跑来跑去时大声呼救，“救命！ 狼正试图吃我!“</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page17');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
