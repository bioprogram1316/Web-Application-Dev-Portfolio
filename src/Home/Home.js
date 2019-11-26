import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import ProfPic from '../assets/images/AACRPic_updated.jpg';
import classes from './Home.module.css';

const home = () => (
    <div className={classes.Home}>
        <Jumbotron 
        style={{color: "rgb(38,198,218)", backgroundColor: "#343a40"}}
        >
            <Row style={{alignItems: "center"}}>
                <Col>
                    <h1>Carline Durmus</h1>
                    <h2>Software Developer</h2>
                </Col>
                <Col>
                    <Image src={ProfPic} roundedCircle />
                </Col>
            </Row>
        </Jumbotron>
        <h3>Front-end</h3>
        <ListGroup horizontal={"md", "lg", "xl"} style={{justifyContent: "center"}}>
            <ListGroup.Item>HTML + CSS</ListGroup.Item>
            <ListGroup.Item>Javascript</ListGroup.Item>
            <ListGroup.Item>React.JS</ListGroup.Item>
            <ListGroup.Item>Redux</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            <ListGroup.Item>CSS Animation</ListGroup.Item>
        </ListGroup>
        <br />
        <h3>Back-end</h3>
        <ListGroup horizontal={"md", "lg", "xl"} style={{justifyContent: "center"}}>
            <ListGroup.Item>Node.JS</ListGroup.Item>
            <ListGroup.Item>Express.JS</ListGroup.Item>
            <ListGroup.Item>MongoDB</ListGroup.Item>
            <ListGroup.Item>Firebase</ListGroup.Item>
            <ListGroup.Item>Python</ListGroup.Item>
            <ListGroup.Item>Heroku</ListGroup.Item>
            <ListGroup.Item>Github Pages</ListGroup.Item>
        </ListGroup>
    </div>
);

export default home;