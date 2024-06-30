import { useState, useEffect, useCallback } from "react";
import { ListGroup, Spinner, Alert, Button } from "react-bootstrap";
import {
    Link,
    useOutletContext,
    LoaderFunction,
    useLoaderData,
    useNavigation,
} from "react-router-dom";
import SessionsListItem from "./SessionsListItem/SessionsListItem";
import { getSessionForWorkshopWithId } from "../../../../services/sessions";
import ISession from "../../../../models/ISession";

import {
    IdParams,
    WorkshopDetailsPageLoaderFunctionArgs,
} from "../../../../models/utils";

// type Context = {
//     id: string | number;
// };

export const loader = async ({
    params,
}: WorkshopDetailsPageLoaderFunctionArgs) => {
    const sessions = await getSessionForWorkshopWithId(params.id);
    console.log(params.id);

    return {
        id: params.id,
        sessions,
    };
};

const SessionsList = () => {
    // const { id } = useOutletContext<Context>();
    // const { id } = useParams<IdParams>(); // { id: '2' }

    const { id, sessions: sessionsUntyped } = useLoaderData() as any;
    const sessions = sessionsUntyped as ISession[];

    const navigation = useNavigation();
    const loading = navigation.state === "loading";

    return (
        <div className="mt-5">
            <h2 className="d-flex align-items-center justify-content-between">
                <span>List of Sessions</span>
                <Link to={`/workshops/${id}/add`}>
                    <Button variant="primary">Add a session</Button>
                </Link>
            </h2>
            <hr />
            {loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {!loading && sessions.length !== 0 && (
                <>
                    <ListGroup>
                        {sessions.map((session) => (
                            <SessionsListItem
                                key={session.id}
                                session={session}
                            />
                        ))}
                    </ListGroup>
                </>
            )}
        </div>
    );
};

export default SessionsList;
