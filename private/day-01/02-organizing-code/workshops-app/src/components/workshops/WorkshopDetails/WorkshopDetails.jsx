import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Nav, Row, Col, Spinner } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import Moment from 'react-moment';
import SessionsList from './SessionsList/SessionsList';

import { getWorkshopById } from '../../../services/api/workshops';
import useFetch from '../../../hooks/useFetch';

// to create a separate bundle (Code-split) you need to import using dynamic import syntax
// import RequestSession from './RequestSession/RequestSession';
const RequestSession = lazy(() => import('./RequestSession/RequestSession'));

const WorkshopDetails = () => {
    const { id, ['*']: isNew } = useParams();


    const {
        data: workshop,
        loading,
        error
    } = useFetch(
        () => getWorkshopById(id),
        [id]
    );

    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>
                </div>
            )}
            {error !== null && (
                <div class="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )}
            {
                workshop && (
                    <div>
                        <h1>{workshop.name}</h1>
                        <hr />

                        <Row className="my-2">
                            <Col xs={12} md={6} lg={4}>
                                <Image
                                    fluid
                                    src={workshop.imageUrl}
                                    alt={workshop.name}
                                />
                            </Col>
                            <Col xs={12} md={6} lg={8}>
                                <div dangerouslySetInnerHTML={{ __html: workshop.description }} />

                                <div>
                                    Date: <Moment format="MMM DD yyyy">{workshop.startDate}</Moment> - <Moment format="MMM DD yyyy">{workshop.endDate}</Moment>
                                </div>
                                <div className="my-2">Timings: {workshop.time}</div>
                            </Col>
                        </Row>

                        <Nav variant="tabs" defaultActiveKey={isNew ? 'request-session' : 'session'} className="my-5">
                            <Nav.Item>
                                <Nav.Link as={Link} to="." eventKey="session">List of sessions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="./new" eventKey="request-session">Request for a session</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="my-4">
                            <Suspense fallback={<Spinner />}>
                                {/* child routing */}
                                <Routes>
                                    <Route path="" element={<SessionsList id={id} />} />
                                    <Route path="new" element={<RequestSession id={id} />} />
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default WorkshopDetails;