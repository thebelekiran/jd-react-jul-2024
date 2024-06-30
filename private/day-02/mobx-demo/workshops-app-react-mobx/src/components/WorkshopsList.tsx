import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner, Alert, Row, Col, Card, Form } from "react-bootstrap";
import Moment from "react-moment";
import { observer } from "mobx-react";

import { useAppContext } from "../app-context";
import useFilter from "../hooks/useFilter";

import "./WorkshopsList.css";

type Props = {};

type State = {
    status: LoadingStatus;
    workshops: IWorkshop[];
    error: Error | null;
};

const WorkshopsList = observer((props: any) => {
    const { api, store } = useAppContext();
    const [status, setStatus] = useState<LoadingStatus>("LOADING");
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                setStatus("LOADING");
                if (store.workshop.numberOfWorkshops === 0) {
                    await api.workshop.getAll();
                }
                setStatus("LOADED");
            } catch (error) {
                setError(error as Error);
                setStatus("ERROR");
            }
        };

        load();
    }, [store.workshop.lastUpdated]);

    const { filterKey, filter, filteredItems } = useFilter<IWorkshop>(
        store.workshop.all,
        "name"
    );

    switch (status) {
        case "LOADING":
            return (
                <div className="text-center my-2">
                    <div>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        case "LOADED":
            return (
                <>
                    <h1>List of workshops</h1>
                    <hr />
                    <p>
                        Total number of workshops :{" "}
                        {store.workshop.numberOfWorkshops}
                    </p>
                    <div className="form-group mb-3">
                        <label htmlFor="formSearch">Search</Form.Label>
                        <Form.Control
                            id="formSearch"
                            type="text"
                            placeholder="Filter by description"
                            value={filterKey}
                            onChange={(event) => filter(event.target.value)}
                        />
                    </Form.Group>
                    <Row xs={1} md={2} lg={3}>
                        {filteredItems()?.map(
                            ({
                                id,
                                name,
                                imageUrl,
                                startDate,
                                endDate,
                                time,
                            }: IWorkshop) => (
                                <Col
                                    key={id}
                                    // xs={12}
                                    // md={6}
                                    // lg={4}
                                    className="d-flex align-items-stretch my-3"
                                >
                                    <Card
                                        className="w-100 text-reset text-decoration-none"
                                        as={Link}
                                        to={{
                                            pathname: `/workshops/${id}`,
                                            state: { name },
                                        }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={imageUrl}
                                            className="w-75 d-block mx-auto"
                                        />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text>
                                                <p>
                                                    <Moment format="DD-MM-YYYY">
                                                        {startDate}
                                                    </Moment>
                                                    {" - "}
                                                    <Moment format="DD-MM-YYYY">
                                                        {endDate}
                                                    </Moment>
                                                </p>
                                                <p>{time}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        )}
                    </Row>
                </>
            );
        case "ERROR":
            return <Alert variant="danger">{error?.message}</Alert>;
        default:
            return null;
    }
});

export default WorkshopsList;
