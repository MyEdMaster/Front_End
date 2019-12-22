import React from 'react';

import {MDBRow, MDBCol,MDBBtn,MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBInput} from 'mdbreact'

//import echarts from 'echarts/lib/echarts'
//导入折线图
import {FuncDraw} from "../Graph";
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
//引入echarts的主题样式

import classes from './index.module.css'
import {InlineMath} from "react-katex";


export class FunctionHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equation:'2',
            a:1,
            b:0,
            x:0,
            y:0
        };

    }
    handle = () =>{
        this.eq2 = function (x){
            return Math.log2(x)
        }
        this.eqln = function (x){
            return Math.log(x)
        }
        this.eq10 = function (x){
            return Math.log10(x)
        }
        let canvas = document.getElementById("myCanvas");
        let c = new FuncDraw(canvas);
        let eq;
        switch (this.state.equation) {
            case '2': eq = this.eq2; break;
            case 'ln': eq = this.eqln; break;
            case '10': eq = this.eq10;
        }

        c.setColor("lightgrey", "#7e57c2");
        c.clear();
        c.drawCoords();
        c.drawFxNow(eq, 0.01, 50,this.state.a,this.state.b);
        c.drawPoint2(this.state.x,this.state.y)
        if(Math.log(this.state.x)===this.state.y){
            c.drawPoint2(this.state.x,this.state.y)
        }
        // else{
        //     alert('The point is not on the graph')
        // }


    }
    // point = ()=>{
    //     let canvas = document.getElementById("myCanvas");
    //     let p = new FuncDraw(canvas)
    //     p.setColor("lightgrey", "red");
    //     p.drawPoint2(this.state.x,this.state.y)
    // }


    render() {

        console.log(this.state.equation);


        return (

            <div>

                {/*<div className={classes.font}>*/}
                    {/*A-List Empire:*/}
                {/*</div>*/}
                <div className={classes.font2}>
                    Function Online Textbook
                </div>
                <MDBRow className='mb-2'>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <div className="d-flex justify-content-around align-items-end">
                            <div>
                                <select
                                    className="browser-default custom-select"
                                    size = 'sm'

                                    onChange={(e)=>{
                                        this.setState({
                                            equation:e.target.value
                                        })
                                    }}
                                >
                                    <option>Choose your function</option>
                                    <option value="2">log2(ax + b)</option>
                                    <option value="ln">ln(ax + b)</option>
                                    <option value="10">log10(ax + b)</option>
                                </select>
                            </div>

                            <input
                                placeholder="a (default=1)"
                                onChange={(e)=>{
                                    this.setState({
                                        a:e.target.value
                                    })
                                }}/>
                            <input
                                placeholder="b (default=0)"
                                onChange={(e)=>{
                                    this.setState({
                                        b:e.target.value
                                    })
                                }}/>

                            <MDBBtn
                                color = 'deep-purple'
                                size = 'sm'
                                className={`${classes.btn} my-0`}
                                onClick={()=>{
                                    this.handle()
                                }}
                            >Plot</MDBBtn>


                        </div>
                    </MDBCol>

                </MDBRow>

                <div className={classes.center}>
                    <canvas id="myCanvas" width="800px" height="400px" style={{border:'1px solid lightgrey'}}>
                        Your browser do not support canvas
                    </canvas>
                </div>
                <MDBRow className='mb-2'>
                    <MDBCol size="2">

                    </MDBCol>
                    <MDBCol size="8">
                        <div className='d-flex justify-content-around'>
                            <div>
                                Input your point:
                            </div>
                            <input
                                placeholder="x"
                                onChange={(e)=>{
                                    this.setState({
                                        x:e.target.value
                                    })
                                }}/>
                            <input
                                placeholder="y"
                                onChange={(e)=>{
                                    this.setState({
                                        y:e.target.value
                                    })
                                }}/>
                            <MDBBtn
                                color = 'deep-orange'
                                size = 'sm'
                                className={`${classes.btn} my-0`}
                                onClick={()=>{
                                    this.handle()
                                }}
                            >Plot</MDBBtn>
                        </div>
                    </MDBCol>
                </MDBRow>






            </div>

        );
    }
}
