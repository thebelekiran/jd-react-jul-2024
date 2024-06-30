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
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
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
                    <div className="col-12">
                        <form className="row g-3">
                            <div className="col-auto">
                                <label htmlFor="filter">
                                    <i className="fas fa-search-minus"></i>
                                </label>
                                <input
                                    id="filter"
                                    type="text"
                                    placeholder="Filter by description"
                                    value={filterKey}
                                    className="form-control"
                                    onChange={(event) =>
                                        filter(event.target.value)
                                    }
                                />
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        {filteredItems()?.map(
                            ({
                                id,
                                name,
                                imageUrl,
                                startDate,
                                endDate,
                                time,
                            }: IWorkshop) => (
                                <div
                                    className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch my-3"
                                    key={id}
                                >
                                    <Link
                                        className="card w-100 text-reset text-decoration-none"
                                        to={{
                                            pathname: `/workshops/${id}`,
                                            state: { name },
                                        }}
                                    >
                                        <img
                                            src={imageUrl}
                                            className="card-img-top w-75 d-block mx-auto"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {name}
                                            </h5>
                                            <p className="card-text">
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
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </>
            );
        case "ERROR":
            return <div className="alert alert-danger">{error?.message}</div>;
        default:
            return null;
    }
});

export default WorkshopsList;
