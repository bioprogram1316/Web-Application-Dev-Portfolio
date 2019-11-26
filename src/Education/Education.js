import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import classes from './Education.module.css';

const education = () => (
    <div className={classes.Education}>
        <h1>Education</h1>
        <br />
        <br />
        <Card>
            <Card.Header><h3>Post Baccalaureate Education:</h3></Card.Header>
            <ListGroup>
                <ListGroup.Item>
                    <h4>New York University: Bridge to Computer Science Program</h4>
                    <p>This is an accelerated preparation program that prepares graduates with 
                        degrees in fields other than Computer Science to successfully complete 
                        competitive Computer Science Master Degree Programs. During the program, 
                        we coded extensively in C++ and covered an extensive ammount of Computer Science 
                        concepts including Algorithms, Algorithmic Analysis, Data Structures, etc.
                        </p>
                </ListGroup.Item>
            </ListGroup>
            </Card>
            <Card>
                <Card.Header><h3>Bachelor's Degree:</h3></Card.Header>
                <ListGroup>
                    <ListGroup.Item>
                        <h4>City University of New York: Brooklyn College</h4>
                        <h5>Bachelor of Arts in Biology</h5>
                        <p>During my Bachelor's Degree, I volunteered in a Computational Biology Lab for 
                            2 years. In my Computational Biology work, I most often coded in Python. Before that
                            I volunteered in a Phycology Lab as an apprentice to the lead Computational Biologist.
                            There we also primarily used Python, including packages like Pandas to help our analysis
                            of the lab's large data sets like genetic data.
                            I also took many undergraduate Computer Science classes where I dealt extensively
                            with C++ and Computer Science concepts such as Data Structures, Algorithms, etc.
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card>
                <Card.Header><h3>MOOC's:</h3></Card.Header>
                <ListGroup>
                    <ListGroup.Item>
                        <h4>Udemy Complete React Course</h4>
                        <p>
                            Project focused Udemy React course that covered advanced React related concepts like 
                            React Hooks, Redux (combining multiple reducers, middleware, aynchronous code, Redux Devtools), 
                            forms and form validation, debugging, React Router, authentication, testing, and deployment.
                            They also covered extra topics like CSS animation, working with webpack, 
                            Next.js, and Redux Saga.
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
    </div>
);

export default education;