import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Nav} from "../Nav";
import {FunctionHome} from "./Page/home";
// import {ComplexIntro} from "./Page/page1";
// import {ComplexAdd} from "./Page/page2";
// import {ComplexDivi} from "./Page/page3";
// import {ComplexFeedback} from "./Page/feedback";

import classes from './index.module.css'


export class Function extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
              <Nav/>
              <div className={classes.float}>
                  <div
                      className={this.props.location.pathname.indexOf('/function/home') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/function/home');}}
                  >
                      Function
                  </div>
                  {/*<div*/}
                      {/*className={this.props.location.pathname.indexOf('/complex/page1') > -1? classes.selectmenubar: classes.menubar}*/}
                      {/*onClick={() => {this.props.history.push('/complex/page1');}}*/}
                  {/*>*/}
                      {/*Lesson 1: What is i?*/}
                  {/*</div>*/}
                  {/*<div*/}
                      {/*className={this.props.location.pathname.indexOf('/complex/page2') > -1? classes.selectmenubar: classes.menubar}*/}
                      {/*onClick={() => {this.props.history.push('/complex/page2');}}*/}
                  {/*>*/}
                      {/*Lesson 2: Addition*/}
                  {/*</div>*/}
                  {/*<div*/}
                      {/*className={this.props.location.pathname.indexOf('/complex/page3') > -1? classes.selectmenubar: classes.menubar}*/}
                      {/*onClick={() => {this.props.history.push('/complex/page3');}}*/}
                  {/*>*/}
                      {/*Lesson 3: Division*/}
                  {/*</div>*/}
                  {/*<div*/}
                      {/*className={this.props.location.pathname.indexOf('/complex/feedback') > -1? classes.selectmenubar: classes.menubar}*/}
                      {/*onClick={() => {this.props.history.push('/complex/feedback');}}*/}
                  {/*>*/}
                      {/*Q & A*/}
                  {/*</div>*/}
              </div>
              <Switch>

                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <FunctionHome {...routeProps} />}
                  />
                  {/*<Route*/}
                      {/*path={`${this.props.match.url}/page1`}*/}
                      {/*component={routeProps => <ComplexIntro {...routeProps} />}*/}
                  {/*/>*/}
                  {/*<Route*/}
                      {/*path={`${this.props.match.url}/page2`}*/}
                      {/*component={routeProps => <ComplexAdd {...routeProps} />}*/}
                  {/*/>*/}
                  {/*<Route*/}
                      {/*path={`${this.props.match.url}/page3`}*/}
                      {/*component={routeProps => <ComplexDivi {...routeProps} />}*/}
                  {/*/>*/}
                  {/*<Route*/}
                      {/*path={`${this.props.match.url}/feedback`}*/}
                      {/*component={routeProps => <ComplexFeedback {...routeProps} />}*/}
                  {/*/>*/}
                  {/*<Route*/}
                      {/*path={`${this.props.match.url}/home`}*/}
                      {/*component={routeProps => <ComplexHome {...routeProps} />}*/}
                  />
                  <Redirect to={`${this.props.match.url}/home`} />

              </Switch>

          </div>

        );
    }
}
