import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Nav} from "../Nav";
import {ComplexHome} from "./Page/home";
import {ComplexPage1} from "./Page/page1";
import {ComplexPage2} from "./Page/page2";
import {ComplexPage3} from "./Page/page3";
import {ComplexPage4} from "./Page/page4";

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
              <div className={classes.float}>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/home') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/home');}}
                  >
                      Complex Number
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/page1') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/page1');}}
                  >
                      Lesson 1: What is i?
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/page2') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/page2');}}
                  >
                      Lesson 2: Addition
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/page3') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/page3');}}
                  >
                      Lesson 3: Division
                  </div>
                  <div
                      className={this.props.location.pathname.indexOf('/complex/page4') > -1? classes.selectmenubar: classes.menubar}
                      onClick={() => {this.props.history.push('/complex/page4');}}
                  >
                      Analysis
                  </div>
              </div>
              <Switch>

                  <Route
                      path={`${this.props.match.url}/home`}
                      component={routeProps => <ComplexHome {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/page1`}
                      component={routeProps => <ComplexPage1 {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/page2`}
                      component={routeProps => <ComplexPage2 {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/page3`}
                      component={routeProps => <ComplexPage3 {...routeProps} />}
                  />
                  <Route
                      path={`${this.props.match.url}/page4`}
                      component={routeProps => <ComplexPage4 {...routeProps} />}
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
