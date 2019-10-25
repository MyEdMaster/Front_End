import React from 'react';

import {Redirect, Route, Switch} from 'react-router-dom';

import {RRH} from '..';
import {Nav} from "../../Nav";
import {Page1} from "./page1";
import {Page2} from "./page2";
import {Page3} from "./page3";
import {Page4} from "./page4";
import {Page5} from "./page5";
import {Page6} from "./page6";
import {Page7} from "./page7";
import {Page8} from "./page8";
import {Page9} from "./page9";
import {Page10} from "./page10";
import {Page11} from "./page11";
import {Page12} from "./page12";
import {Page13} from "./page13";
import {Page14} from "./page14";
import {Page15} from "./page15";
import {Page16} from "./page16";
import {Page17} from "./page17";
import {Page18} from "./page18";
import {Page19} from "./page19";
import {Page20} from "./page20";
import {Page21} from "./page21";
import {End} from "./end";

export class RRHSwitch extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {};

  }

  render() {


    return (
      <Switch>
        <Route
          path={this.props.match.url}
          exact
          component={routeProps => <Nav{...routeProps} />}
        />
          <Route
              path={`${this.props.match.url}/cover`}
              component={routeProps => <RRH {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page1`}
              component={routeProps => <Page1 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page2`}
              component={routeProps => <Page2 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page3`}
              component={routeProps => <Page3 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page4`}
              component={routeProps => <Page4 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page5`}
              component={routeProps => <Page5 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page6`}
              component={routeProps => <Page6 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page7`}
              component={routeProps => <Page7 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page8`}
              component={routeProps => <Page8 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page9`}
              component={routeProps => <Page9 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page10`}
              component={routeProps => <Page10 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page11`}
              component={routeProps => <Page11 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page12`}
              component={routeProps => <Page12 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page13`}
              component={routeProps => <Page13 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page14`}
              component={routeProps => <Page14 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page15`}
              component={routeProps => <Page15 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page16`}
              component={routeProps => <Page16 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page17`}
              component={routeProps => <Page17 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page18`}
              component={routeProps => <Page18 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page19`}
              component={routeProps => <Page19 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page20`}
              component={routeProps => <Page20 {...routeProps} />}
          />
          <Route
              path={`${this.props.match.url}/page21`}
              component={routeProps => <Page21 {...routeProps} />}
          />

          <Route
              path={`${this.props.match.url}/end`}
              component={routeProps => <End {...routeProps} />}
          />
        <Redirect to={`${this.props.match.url}/cover`} />
      </Switch>
    );
  }
}
