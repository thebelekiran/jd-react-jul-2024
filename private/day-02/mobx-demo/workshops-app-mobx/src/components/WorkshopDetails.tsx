import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Spinner, Image, Row, Col, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { RouteComponentProps } from "react-router-dom";
import SessionsList from "./SessionsList";
import AddSession from "./AddSession";
import { getWorkshopById } from "../services/workshops";

type Params = {
    id: string;
};

const WorkshopDetails = ({ match }: RouteComponentProps<Params>) => {
    const [status, setStatus] = useState<LoadingStatus>("LOADING");
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    const [error, setError] = useState<Error | null>(null);

    // similar to using componentDidMount (since array is empty)
    useEffect(() => {
        const getWorkshop = async () => {
            setStatus("LOADING");

            try {
                const workshop = await getWorkshopById(match.params.id);
                setWorkshop(workshop);
                setStatus("LOADED");
            } catch (error) {
                setError(error as Error);
                setStatus("ERROR");
            }
        };

        getWorkshop();
    }, []);

    switch (status) {
        case "LOADING":
            return (
                <div className="text-center my-2">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            );
        case "LOADED":
            const {
                name,
                description,
                startDate,
                endDate,
                time,
                imageUrl,
                modes: { inPerson, online },
            } = workshop as IWorkshop;

            return (
                <>
                    <h1>{name}</h1>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <img
                                src={imageUrl}
                                alt={name}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="col-xs-2 col-lg-4">
                                <div className="col-6">
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
                                </div>
                                <div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={inPerson ? faCheck : faTimes}
                                        />{" "}
                                        In-person
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={online ? faCheck : faTimes}
                                        />{" "}
                                        Online
                                    </div>
                                </div>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            ></div>
                        </div>
                    </div>
                    {/* <SessionsList id={match.params.id} /> */}
                    <AddSession id={match.params.id} />
                </>
            );
        case "ERROR":
            return <div className="alert alert-danger">{error?.message}</div>;
        default:
            return null;
    }
};

export default WorkshopDetails;
