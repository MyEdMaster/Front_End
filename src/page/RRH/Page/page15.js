import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page15 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/15.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/teeth.jpg' alt="village" width="600" height="400"/>
                    <p>“But grandmother! What big teeth you have,” Little Red Riding Hood
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("to speak in a scared voice")}}
                        >whimpered</button></p>
                    {/*<p>“但是奶奶！ 你有多大的牙齿，“小红帽呜咽着。</p>*/}
                    <p>“The better to eat you with, my dear!” the wolf
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("yelled")}}
                        >roared</button>.
                        The wolf jumped out of bed and began to chase her.
                    </p>
                    {/*<p>“亲爱的，最好吃掉你！”狼咆哮道。 狼跳下床，开始追她。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page16');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
