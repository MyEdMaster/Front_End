import React from 'react';
import classes from './index.module.css';
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page6 extends React.Component {
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
                <Audio audio='https://myedmaster.oss-us-east-1.aliyuncs.com/6.mp3'/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src='https://myedmaster.oss-us-east-1.aliyuncs.com/leaving.jpg' alt="wolf" width="600" height="400"/>
                    {/*<p className="red-text">Lack wolf.jpg</p>*/}
                        <p>Suddenly a wolf came up
                            <button
                                className={classes.button1}
                                onClick={()=>{this.myClick("next to")}}
                                >
                                beside
                            </button>
                            her and asked, “
                            What are you doing here little girl?”
                        </p>
                            {/*<p>突然，一只狼走到她身边，问道：“你在这儿做什么小女孩？”</p>*/}
                            <p>“Well, I am on my way to see Grandma, who lives on the other side of the forest,” Little
                                Red Riding Hood replied.</p>
                            {/*<p>“好吧，我正在去看望生活在森林另一边的奶奶，”小红帽回答道。</p>*/}
                            <p>“I should go,” Little Red Riding Hood said.</p>
                            {/*<p>“我应该去，”小红帽说。</p>*/}
                            <p>She went straight to her grandmother's house, but the wolf had another plan in mind.</p>
                            {/*<p>她直奔祖母的家，但狼心中还有另一个计划。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page7');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
