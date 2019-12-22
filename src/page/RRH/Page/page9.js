import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page9 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/9.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/clothes.jpg' alt="village" width="600" height="400"/>
                    <p>The wolf went inside and
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("trapped")}}
                        >
                            locked
                        </button> the grandma in a closet.
                    </p>
                    {/*<p>狼走了进去，将奶奶锁在壁橱里。</p>*/}
                    <p>The wolf ran to Grandma’s bedroom and looked through her
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("clothes")}}
                        >
                            wardrobe
                        </button>
                        and grabbed her night clothes. </p>
                    {/*<p>狼跑到奶奶的卧室，看着她的衣柜，抓住她的睡衣。</p>*/}
                    <p>The wolf dressed up to look like Little Red Riding Hood’s grandmother.</p>
                    {/*<p>狼打扮得像小红帽的祖母。</p>*/}


                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page10');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
