import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import { Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Heading from './utils/Heading';

import './Home.css';

type Props = {
    title: string
}

const Home = ( { title, history } : Props & RouteComponentProps ) => {
    return (
        <Card className="home bg-light">
            <Card.Body className="p-5">
                <Heading>{title}</Heading>
                <hr />
                <p>
                    The Workshops application serves details of (fictitious) technical workshops happening in various cities. Every workshop has a broad topic (eg. JavaScript), and a workshop has many sessions (each session covers a sub-topic, eg. Closures in JavaScript).
                </p>

                <p>
                    You can view a list of workshops, details of every workshop, sessions in a workshop, and also add a new session for a workshop.
                </p>
            </Card.Body>
        </Card>
    )
};

export default Home;