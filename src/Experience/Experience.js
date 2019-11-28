import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import classes from './Experience.module.css';

const experience = () => (
    <div className={classes.Experience}>
        <h1>Web Application Development Portfolio</h1>
        <br />
        <br />
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Cashier React+Redux Web Application</Card.Title>
                    <Card.Text>
                        Cashier application where users can upload their stock/inventory information via csv or json. 
                        They can also manually enter and edit inventory information. Sales can be made using a
                        traditional barcode scanner, camera barcode scanner, or manually. Records of past orders
                        can be accessed through the application.
                    </Card.Text>
                    <Card.Link href="https://github.com/bioprogram1316/cashier-app" target="_blank">Cashier App Github</Card.Link>
                </Card.Body>
                <Card.Footer>React + Redux</Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Build-a-Burger Web Application</Card.Title>
                    <Card.Text>
                        Application where users can build custom burgers with a variety of toppings. Each user 
                        can only access their own order history and can create new orders with a variety of options.
                    </Card.Text>
                    <Card.Link href="https://github.com/bioprogram1316/Build-A-Burger-App" target="_blank" >Build-a-Burger App Github</Card.Link>
                </Card.Body>
                <Card.Footer>React + Redux</Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Carline Durmus Portfolio Web Application</Card.Title>
                    <Card.Text>
                        This web application that you are currently browsing. It was created using
                        React and Bootstrap. This application holds Carline Durmus' web application 
                        developer portfolio and relevant work related history.
                    </Card.Text>
                    <Card.Link href="https://github.com/bioprogram1316/Web-Application-Dev-Portfolio" target="_blank">Portfolio App Github</Card.Link>
                </Card.Body>
                <Card.Footer>React</Card.Footer>
            </Card>
        </CardDeck>
        <br />
        <br />
        <br />
        <h2>Hackathons/Tech Events</h2>
        <br />
        <ListGroup>
            <ListGroup.Item><h4>Hacktoberfest 2019 Participant</h4></ListGroup.Item>
            <ListGroup.Item><h4>Presented my Computational Biology Paper at the American Association for Cancer Research Conference 2018</h4></ListGroup.Item>
        </ListGroup>
    </div>
);

export default experience;