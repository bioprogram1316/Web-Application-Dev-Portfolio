import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import classes from './About.module.css';

const about = () => (
    <div className={classes.About}>
        <h1>More About Carline</h1>
        <br />
        <br />
        <Tab.Container id="left-tab" defaultActiveKey="first">
            <Row style={{backgroundColor: "#343a40", color: "white", border: "solid grey 1px", borderRadius: "4px"}}>
                <Col sm={3}>
                    <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                            <Nav.Link eventKey="first" ><h4>About</h4></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" ><h4>My Hobbies</h4></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" ><h4>Contact Me</h4></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content style={{padding: "15px", overflow: "auto"}}>
                        <Tab.Pane eventKey="first" >
                            <h3>I’m an New York City native. I speak both English and Turkish. I’ve lived 
                                both in the United States and Internationally. I enjoy challenging projects and 
                                implementing unique ideas.</h3>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" >
                            <ul>
                                <li><h3>Playing Tennis</h3></li>
                                <li><h3>Horseback Riding - English Style</h3></li>
                                <li><h3>Watching Anime</h3></li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third" >
                            <h3>Email: cdurmus@carlinedurmus.com</h3>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        <br />
        <br />
        <p>Acknowledgements:</p>
        <div>Social Media icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and customized by Carline Durmus</div>
    </div>
);

export default about;