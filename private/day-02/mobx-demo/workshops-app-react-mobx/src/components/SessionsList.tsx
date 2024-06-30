import React, { useState, useEffect, ChangeEvent } from 'react';
import { Spinner, Row, Col, Alert, ListGroup, Badge, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { getSessions, castVote } from '../services/sessions';

import useFilter from '../hooks/useFilter';

import './SessionsList.css';

type Props = {
    id: string
};

// type Params = {
//     id: string
// }

const SessionsList = ( { id } : Props ) => {
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ sessions, setSessions ] = useState<ISession[] | null>( null );
    const [ error, setError ] = useState<Error | null>( null );

    const { filterKey, filter, filteredItems } = useFilter<ISession>( sessions, 'name' );

    // similar to using componentDidMount (since array is empty)
    useEffect(
        () => {
            const fetchSessions = async () => {
                setStatus( 'LOADING' );
        
                try {
                    const sessions = await getSessions( id );
                    setSessions( sessions );
                    setStatus( 'LOADED' );
                } catch( error ) {
                    setError( error as Error );
                    setStatus( 'ERROR' );
                }
            }

            fetchSessions();
        },
        [ ]
    );

    const getBadgeClass = ( level : ISession['level'] ) => {
        const classMap = {
            Basic: 'primary',
            Intermediate: 'info',
            Advanced: 'warning'
        };

        return classMap[level];
    };

    const doCastVote = async ( id : number | string, voteType : VoteType ) => {
        try {
            const updatedSession = await castVote( id, voteType );
            setSessions( ( sessions ) => {
                return ( sessions as ISession[] ).map( 
                    session => {
                        if( session.id === id ) {
                            return updatedSession;
                        }

                        return session;
                    }
                );
            });
        } catch( error ) {
            alert( ( error as Error ).message );
        }
    };

    switch( status ) {
        case 'LOADING':
            return (
                <div className="text-center my-2">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            );
        case 'LOADED':
            return (
                <>
                    <Row className="my-4" xs={1}>
                        <Col>
                            <h3>
                                Sessions in this workshop
                            </h3>
                            <hr />
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formSearch">
                                <Form.Label>Search</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Filter by name"
                                    value={filterKey}
                                    onChange={( event : ChangeEvent<HTMLInputElement> ) => filter( event.target.value )}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <ListGroup>
                                {
                                    filteredItems()?.map(
                                        ( { id, name, speaker, duration, level, abstract, upvoteCount } : ISession  ) => (
                                            <ListGroup.Item key={id}>
                                                <Row>
                                                    <Col xs={1}>
                                                        <div className="d-flex flex-column align-items-center">
                                                            <FontAwesomeIcon icon={faCaretUp} onClick={() => doCastVote( id, 'upvote' )} />
                                                            <span>{upvoteCount}</span>
                                                            <FontAwesomeIcon icon={faCaretDown} onClick={() => doCastVote( id, 'downvote' )} />
                                                        </div>
                                                    </Col>
                                                    <Col xs={11}>
                                                        <div className="lead">{name}</div>
                                                        <div className="h6">by {speaker}</div>
                                                        <div>
                                                            <Badge bg={getBadgeClass( level )}>{level}</Badge>
                                                        </div>
                                                        <div className="my-2">
                                                            {duration} hours
                                                        </div>
                                                        <p>
                                                            {abstract}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    )
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </>
            );
        case 'ERROR':
            return (
                <Alert variant="danger">
                    {error?.message}
                </Alert>
            );
        default:
            return null;
    }
}

export default SessionsList;