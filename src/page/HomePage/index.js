import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {
    MDBInput,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBView,
    MDBRow,
    MDBCol,
    MDBMask,
    MDBBtn, MDBNavbarBrand, MDBNavLink
} from "mdbreact";
import classes from './index.module.css'
import bg from './Lib/homepage.jpg'
class HomePageReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            collapsed: false
        };
    }

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };
    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };


    render() {


        return (
            <div>
                <div className="deep-purple-skin">
                    <MDBSideNav
                        triggerOpening={this.state.toggleStateA}
                        bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
                        mask="strong"
                        hidden
                    >

                        <div
                            className="py-3"
                            onClick={() => {this.props.history.push('/home');}}
                            style={{
                                cursor:'pointer',
                                fontFamily:'Comic Sans MS',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                color:'white',
                                fontWeight: '700',
                                textAlign:'center'
                            }}>


                                MyEdMaster

                        </div>
                        <MDBInput
                            type="text"
                            hint="Search"
                            style={{
                                fontFamily:'Comic Sans MS',
                                fontSize:'22px',
                                color: "#ffffff",
                                padding: "0 10px 8px 30px",
                                boxSizing: "border-box"
                            }}

                        />
                        <MDBSideNavNav>
                            <MDBSideNavCat
                                name="Reading"
                                id="submit-blog-cat"
                                icon="chevron-right"
                                style={{
                                    fontFamily:'Comic Sans MS',
                                    fontSize:'16px',
                                    color: "#ffffff",
                                }}
                            >
                                <MDBSideNavItem className={classes.subMenu} onClick={() => {this.props.history.push('/rrh/cover');}}>Little Red Riding Hood</MDBSideNavItem>
                                {/*<MDBSideNavItem>Registration form</MDBSideNavItem>*/}
                            </MDBSideNavCat>
                            <MDBSideNavCat
                                name="Math"
                                id="submit-blog-cat"
                                icon="chevron-right"
                                style={{
                                    fontFamily:'Comic Sans MS',
                                    fontSize:'16px',
                                    color: "#ffffff",
                                }}
                            >
                                <MDBSideNavItem className={classes.subMenu} onClick={() => {this.props.history.push('/complex');}}>Complex Numbers</MDBSideNavItem>

                            </MDBSideNavCat>

                            <MDBSideNavCat
                                name="Science"
                                id="contact-me-cat"
                                icon="chevron-right"
                                style={{
                                    fontFamily:'Comic Sans MS',
                                    fontSize:'16px',
                                    color: "#ffffff",
                                }}
                            >
                                <MDBSideNavItem onClick={() => {this.props.history.push('/home');}} className={classes.subMenu}>Play basketball</MDBSideNavItem>

                            </MDBSideNavCat>
                        </MDBSideNavNav>
                    </MDBSideNav>
                </div>
                <Router>


                    <MDBNavbar className="deep-purple lighten-1" expand="md" fixed="top" >

                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <div
                                        onClick={this.handleToggleClickA}
                                        key="sideNavToggleA"
                                        style={{
                                            lineHeight: "40px",
                                            marginRight: "1em",
                                            verticalAlign: "middle"
                                        }}
                                    >
                                        <MDBIcon icon="bars" size="2x" className="mt-1" style={{color:'white'}}/>
                                    </div>
                                </MDBNavItem>

                            </MDBNavbarNav>
                            <MDBNavbarNav center>
                                <MDBNavItem
                                    className="d-none d-md-inline"
                                    onClick={() => {this.props.history.push('/home');}}
                                    style={{
                                        cursor:'pointer',
                                        fontFamily:'Comic Sans MS',
                                        fontSize: '25px',
                                        fontStyle: 'normal',
                                        color:'white',
                                        fontWeight: '700',
                                    }}
                                >
                                        MyEdMaster
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>

                <MDBView src={bg} >
                    <MDBMask
                        className="justify-content-center align-items-center"
                        overlay="white-light"

                    >
                        <div style={{height:'62.5px'}}>

                        </div>

                        <MDBContainer>
                            <section className="text-center my-5">
                                <h2 className={`${classes.orange} h1-responsive font-weight-bold my-5`}>
                                    What MyEdMaster Can Do?
                                </h2>
                                <p
                                    className={`${classes.font} lead w-responsive mx-auto mb-5`}
                                    style={{
                                        color:'#7F2B82',
                                        fontSize:'22px',
                                        fontWeight:'bold'
                                    }}
                                >
                                    MyEdMaster was amazing. There was so much personal attention for each student even when in a group class. The instructors were very personable and helpful!... - Akila P.,
                                </p>
                                <MDBRow>
                                    <MDBCol
                                        md="4"
                                        className={classes.content}

                                    >
                                        <MDBIcon icon="book-open" size="3x" className="mt-2" style={{color:'#E41A6A'}}/>
                                        <h4 className="font-weight-bold my-4" style={{fontFamily:'Comic Sans MS',color:'#E41A6A'}}>Reading</h4>
                                        <p
                                            className={classes.reading}

                                            onClick={() => {this.props.history.push('/rrh/cover');}}
                                        >
                                            <span className={classes.font1}>Story 1: Little Red Riding Hood.</span>
                                        </p>
                                        <p className={classes.font2}>
                                            Expect more in the future...
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="4"
                                        className={classes.content}
                                        onClick={() => {this.props.history.push('/complex');}}
                                    >
                                        <MDBIcon icon="square-root-alt" size="3x" className="mt-2" style={{color:'#F1831D'}}/>
                                        <h4 className="font-weight-bold my-4" style={{fontFamily:'Comic Sans MS',color:'#F1831D'}}>Math</h4>
                                        <p
                                            className={classes.math}

                                            onClick={() => {this.props.history.push('/rrh/cover');}}
                                        >
                                            <span className={classes.font1}>Learn the complex numbers</span>

                                        </p>
                                        <p className={classes.font2}>
                                            Expect more in the future...
                                        </p>
                                    </MDBCol>
                                    <MDBCol md="4" className={classes.content}>
                                        <MDBIcon icon="atom" size="3x" className="mt-2" style={{color:'#2EAFB0'}} />
                                        <h4 className="font-weight-bold my-4" style={{fontFamily:'Comic Sans MS',color:'#2EAFB0'}}>Science</h4>
                                        <p
                                            className={classes.science}

                                            // onClick={() => {this.props.history.push('/rrh/cover');}}
                                        >
                                            <span className={classes.font1}>Play Basketball</span>

                                        </p>
                                        <p className={classes.font2}>
                                            Expect more in the future...
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </section>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>



        );
    }
}
export const HomePage = withRouter(HomePageReact)