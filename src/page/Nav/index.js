import React from "react";
import {withRouter} from 'react-router-dom';
import {
    MDBInput,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import classes from './index.module.css'
class NavReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false
        };
    }

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };

    render() {
        return (
            <div>
                <div className="deep-purple-skin">
                    <div className="deep-purple-skin">
                        <MDBSideNav
                            triggerOpening={this.state.toggleStateA}
                            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
                            mask="strong"
                            hidden
                        >
                            <div
                                className="py-1"
                                onClick={() => {this.props.history.push('/home');}}
                                style={{
                                    cursor:'pointer',
                                    textAlign:'center',
                                    borderStyle:'solid',
                                    borderWidth:'0 0 1px 0',
                                    borderColor:'#f5f5f5'
                                }}
                            >

                                <img className='img-fluid w-75 justify-content-center' src='https://myedmaster.oss-us-east-1.aliyuncs.com/A-list Empire logo.png'/>

                            </div>
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
                                    <MDBSideNavItem className={classes.subMenu} onClick={() => {this.props.history.push('/hapcover');}}>Horse and Porcupine</MDBSideNavItem>
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
                                    <MDBSideNavItem className={classes.subMenu} onClick={() => {this.props.history.push('/foil');}}>Multiplying Binomials Using FOIL</MDBSideNavItem>

                                </MDBSideNavCat>

                                {/*<MDBSideNavCat*/}
                                {/*name="Science"*/}
                                {/*id="contact-me-cat"*/}
                                {/*icon="chevron-right"*/}
                                {/*style={{*/}
                                {/*fontFamily:'Comic Sans MS',*/}
                                {/*fontSize:'16px',*/}
                                {/*color: "#ffffff",*/}
                                {/*}}*/}
                                {/*>*/}
                                {/*<MDBSideNavItem onClick={() => {this.props.history.push('/home');}}className={classes.subMenu}>Play basketball</MDBSideNavItem>*/}

                                {/*</MDBSideNavCat>*/}
                            </MDBSideNavNav>
                        </MDBSideNav>
                    </div>
                    <MDBNavbar className="deep-purple lighten-1" expand="md" fixed="top" style={{color:'#32313B'}}>

                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <div
                                        onClick={this.handleToggleClickA}
                                        key="sideNavToggleA"
                                        style={{
                                            lineHeight: "10px",
                                            marginRight: "1em",
                                            verticalAlign: "middle"
                                        }}
                                    >
                                        <MDBIcon icon="bars" size="2x" className="mt-1" style={{color:'white'}}/>
                                    </div>
                                </MDBNavItem>

                            </MDBNavbarNav>
                            <MDBNavbarNav left>
                                <MDBNavItem
                                    className="d-none d-md-inline"
                                    onClick={() => {this.props.history.push('/home');}}
                                    // style={{
                                    //     cursor:'pointer',
                                    //     fontFamily:'Comic Sans MS',
                                    //     fontSize: '25px',
                                    //     fontStyle: 'normal',
                                    //     color:'white',
                                    //     fontWeight: '700',
                                    // }}
                                >
                                    <img className='img-fluid' style={{height:'44px'}} src='https://myedmaster.oss-us-east-1.aliyuncs.com/A-list Empire logo.png'/>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </div>
                <div style={{height:'53px'}}>

                </div>
            </div>

        );
    }
}
export const Nav = withRouter(NavReact)
