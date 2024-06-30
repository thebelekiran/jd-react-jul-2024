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
        <div className="card home bg-light" >
            <div className="card-body p-5">
                <h5 className="card-title">{title}</h5>
                <hr />
                <p>
                    The Workshops application serves details of (fictitious) technical workshops happening in various cities. Every workshop has a broad topic (eg. JavaScript), and a workshop has many sessions (each session covers a sub-topic, eg. Closures in JavaScript).
                </p>

                <p>
                    You can view a list of workshops, details of every workshop, sessions in a workshop, and also add a new session for a workshop.
                </p>

            </div>
        </div>
    )
};

export default Home;