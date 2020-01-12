import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Nav} from "../Nav";
import {ComplexHome} from "./Page/home";
import {ComplexIntro} from "./Page/Intro";
import {ComplexAdd} from "./Page/Addition";
import {ComplexDivi} from "./Page/Division";
import {ComplexFeedback} from "./Page/feedback";
import {ComplexSubt} from "./Page/Sub";
import {ComplexMult} from "./Page/Multi";
import {AskQuestionComplex} from "./Page/ask-question";

import classes from './index.module.css'


export class ComplexNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
              <Nav/>
              {/*<div className={classes.float}>*/}
                  {/*<div*/}
                      {/*className={this.props.location.pathname.indexOf('/complex/home') > -1? classes.selectmenubar: classes.menubar}*/}
                      {/*onClick={() => {this.props.history.push('/complex/home');}}*/}
                  {/*>*/}
                      {/*Complex Number*/}
                  {/*</div>*/}
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
              {/*</div>*/}
              <AskQuestionComplex/>
              <Switch>

                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <ComplexHome {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/intro`}
                      component={routeProps => <ComplexIntro {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/add`}
                      component={routeProps => <ComplexAdd {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/divi`}
                      component={routeProps => <ComplexDivi {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/feedback`}
                      component={routeProps => <ComplexFeedback {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/mult`}
                      component={routeProps => <ComplexMult {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/subt`}
                      component={routeProps => <ComplexSubt {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <ComplexHome {...routeProps} />}
                  />
                  <Redirect to={`${this.props.match.url}/home`} />

              </Switch>

          </div>

        );
    }
}
