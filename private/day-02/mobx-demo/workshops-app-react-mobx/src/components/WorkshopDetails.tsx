import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { Spinner, Image, Row, Col, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { RouteComponentProps } from 'react-router-dom';
import SessionsList from './SessionsList';
import AddSession from './AddSession';
import { getWorkshopById } from '../services/workshops';

type Props = { };

type Params = {
    id: string
}

const WorkshopDetails = ( { match } : RouteComponentProps<Params> ) => {
    const [ status, setStatus ] = useState<LoadingStatus>( 'LOADING' );
    const [ workshop, setWorkshop ] = useState<IWorkshop | null>( null );
    const [ error, setError ] = useState<Error | null>( null );

    // similar to using componentDidMount (since array is empty)
    useEffect(
        () => {
            const getWorkshop = async () => {
                setStatus( 'LOADING' );
        
                try {
                    const workshop = await getWorkshopById( match.params.id );
                    setWorkshop( workshop );
                    setStatus( 'LOADED' );
                } catch( error ) {
                    setError( error as Error );
                    setStatus( 'ERROR' );
                }
            }

            getWorkshop();
        },
        [ ]
    );

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
            const { name, description, startDate, endDate, time, imageUrl, modes : { inPerson, online } } = workshop as IWorkshop;

            return (
                <>
                    <h1>{name}</h1>    
                    <hr />
                    <Row>
                        <Col xs={12} lg={4}>
                            <Image
                                src={imageUrl}
                                alt={name}
                                className="img-fluid"
                            />
                        </Col>
                        <Col xs={12} lg={8}>
                            <Row xs={2} lg={4}>
                                <Col>
                                    <p>
                                        <Moment format="DD-MM-YYYY">{startDate}</Moment>
                                        {" - "}
                                        <Moment format="DD-MM-YYYY">{endDate}</Moment>
                                    </p>
                                    <p>{time}</p>
                                </Col>
                                <Col>
                                    <div>
                                        <FontAwesomeIcon icon={inPerson ? faCheck : faTimes} /> In-person
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={online ? faCheck : faTimes} /> Online
                                    </div>
                                </Col>
                            </Row>
                            <div dangerouslySetInnerHTML={ { __html : description } }></div>
                        </Col>
                    </Row>
                    {/* <SessionsList id={match.params.id} /> */}
                    <AddSession id={match.params.id} />
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

export default WorkshopDetails;