import React, { useState, useEffect, ChangeEvent } from "react";
import {
    Spinner,
    Row,
    Col,
    Alert,
    ListGroup,
    Badge,
    Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { getSessions, castVote } from "../services/sessions";

import useFilter from "../hooks/useFilter";

import "./SessionsList.css";

type Props = {
    id: string;
};

const SessionsList = ({ id }: Props) => {
    const [status, setStatus] = useState<LoadingStatus>("LOADING");
    const [sessions, setSessions] = useState<ISession[] | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const { filterKey, filter, filteredItems } = useFilter<ISession>(
        sessions,
        "name"
    );

    // similar to using componentDidMount (since array is empty)
    useEffect(() => {
        const fetchSessions = async () => {
            setStatus("LOADING");

            try {
                const sessions = await getSessions(id);
                setSessions(sessions);
                setStatus("LOADED");
            } catch (error) {
                setError(error as Error);
                setStatus("ERROR");
            }
        };

        fetchSessions();
    }, []);

    const getBadgeClass = (level: ISession["level"]) => {
        const classMap = {
            Basic: "primary",
            Intermediate: "info",
            Advanced: "warning",
        };

        return classMap[level];
    };

    const doCastVote = async (id: number | string, voteType: VoteType) => {
        try {
            const updatedSession = await castVote(id, voteType);
            setSessions((sessions) => {
                return (sessions as ISession[]).map((session) => {
                    if (session.id === id) {
                        return updatedSession;
                    }

                    return session;
                });
            });
        } catch (error) {
            alert((error as Error).message);
        }
    };

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
                    <div className="row my-4">
                        <div className="col-12">
                            <h3>Sessions in this workshop</h3>
                            <hr />
                        </div>
                        <div className="col-12">
                            <form className="row g-3">
                                <div className="col-auto">
                                    <label htmlFor="filter">
                                        <i className="fas fa-search-minus"></i>
                                    </label>
                                    <input
                                        id="filter"
                                        type="text"
                                        placeholder="Filter by name"
                                        value={filterKey}
                                        onChange={(
                                            event: ChangeEvent<HTMLInputElement>
                                        ) => filter(event.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-12">
                            <div className="list-group">
                                {filteredItems()?.map(
                                    ({
                                        id,
                                        name,
                                        speaker,
                                        duration,
                                        level,
                                        abstract,
                                        upvoteCount,
                                    }: ISession) => (
                                        <li
                                            className="list-group-item"
                                            key={id}
                                        >
                                            <div className="row">
                                                <div className="col-1">
                                                    <div className="d-flex flex-column align-items-center">
                                                        <FontAwesomeIcon
                                                            icon={faCaretUp}
                                                            onClick={() =>
                                                                doCastVote(
                                                                    id,
                                                                    "upvote"
                                                                )
                                                            }
                                                        />
                                                        <span>
                                                            {upvoteCount}
                                                        </span>
                                                        <FontAwesomeIcon
                                                            icon={faCaretDown}
                                                            onClick={() =>
                                                                doCastVote(
                                                                    id,
                                                                    "downvote"
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-11">
                                                    <div className="lead">
                                                        {name}
                                                    </div>
                                                    <div className="h6">
                                                        by {speaker}
                                                    </div>
                                                    <div>
                                                        {/* <span className={`badge rounded-pill text-bg-${getBadgeClass(level)}`>{level}</span> */}
                                                        <span>{level}</span>
                                                    </div>
                                                    <div className="my-2">
                                                        {duration} hours
                                                    </div>
                                                    <p>{abstract}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </>
            );
        case "ERROR":
            return <div className="alert alert-danger">{error?.message}</div>;
        default:
            return null;
    }
};

export default SessionsList;
