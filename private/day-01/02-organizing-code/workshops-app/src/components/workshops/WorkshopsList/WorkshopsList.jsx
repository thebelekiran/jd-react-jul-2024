import { useState, useContext } from 'react';
import { getWorkshops } from "../../../services/api/workshops";
import WorkshopsListItem from './WorkshopsListItem/WorkshopsListItem';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../../../hooks/useFetch';

const WorkshopsList = () => {
    const [page, setPage] = useState(1);

    const {
        data: workshops,
        loading,
        error
    } = useFetch(
        () => getWorkshops(page),
        [page]
    );

    const previous = () => {
        if (page === 1) {
            return;
        }

        setPage((p) => p - 1);
    };

    const next = () => {
        setPage((p) => p + 1);
    };

    // if (workshops && workshops.length > 1) {
    //     workshops[0].name = 'XYZ';
    // }

    return (
        <div className="container my-4">
            <h1 className="h2">List of Workshops</h1>
            <hr />

            <div className="my-4">
                <div>You are viewing page {page}</div>
                <div className="mt-2">
                    <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={previous}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={next}
                    >
                        Next
                    </button>
                </div>
            </div>

            {loading && (
                <div className="d-flex justify-content-center" data-testid="loading-spinner">
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
                workshops && !error && (
                    <Row xs={1} sm={2} md={3}>
                        {workshops.map((w) => (
                            <Col key={w.id} className="d-flex my-3">
                                {/* <WorkshopsListItem name={w.name} id={w.id} ... /> */}
                                <WorkshopsListItem {...w} />
                            </Col>
                        ))}
                    </Row>
                )
            }
        </div>
    );
};

export default WorkshopsList;