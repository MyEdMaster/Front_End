import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Nav} from "../Nav";
import {RRHCover} from "./Page/cover";
import {Page1} from "./Page/page1";
import {Page2} from "./Page/page2";
import {Page3} from "./Page/page3";
import {Page4} from "./Page/page4";
import {Page5} from "./Page/page5";
import {Page6} from "./Page/page6";
import {Page7} from "./Page/page7";
import {Page8} from "./Page/page8";
import {Page9} from "./Page/page9";
import {Page10} from "./Page/page10";
import {Page11} from "./Page/page11";
import {Page12} from "./Page/page12";
import {Page13} from "./Page/page13";
import {Page14} from "./Page/page14";
import {Page15} from "./Page/page15";
import {Page16} from "./Page/page16";
import {Page17} from "./Page/page17";
import {Page18} from "./Page/page18";
import {Page19} from "./Page/page19";
import {Page20} from "./Page/page20";
import {Page21} from "./Page/page21";
import {End} from "./Page/end";

export class RRH extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
              <Nav/>
              <Switch>
                  <Route
                      path={`${this.props.match.url}/cover`}
                      component={routeProps => <RRHCover {...routeProps} />}
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

          </div>
        );
    }
}
