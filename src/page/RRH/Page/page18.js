import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page18 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/18.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/hug.jpg' alt="village" width="600" height="400"/>
                    <p>“Oh, grandma! Oh, how I have missed you, thank goodness you are okay!” Little Red Riding
                        Hood
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("cried")}}>sobbed</button>.
                    </p>
                    {/*<p>“哦，奶奶！ 哦，我多么想念你，谢天谢地，你没关系！“小红帽呜咽着。</p>*/}
                    <p>“Oh darling, said grandma, I'm
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("happy")}}
                           >glad</button> that
                        you cried for help!”
                    </p>
                    {/*<p>“哦，亲爱的，我很高兴你求救！”</p>*/}


                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page19');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
