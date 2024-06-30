import { memo, useEffect, useRef } from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";
import { useFetcher } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ISession from "../../../../../models/ISession";
import { VoteType, vote } from "../../../../../services/sessions";

import {
    IdParams,
    SessionsListItemLoaderFunctionArgs,
} from "../../../../../models/utils";

import "./SessionsListItem.css";

type Props = {
    session: ISession;
};

export async function action({ request }: SessionsListItemLoaderFunctionArgs) {
    const formData = await request.formData();
    return vote(
        formData.get("sessionid") as string,
        formData.get("vote") as VoteType
    );
}

const SessionsListItem = memo(
    ({
        session: { id, name, speaker, level, duration, abstract, upvoteCount },
    }: Props) => {
        const fetcher = useFetcher();
        const renderCount = useRef<number>();
        renderCount.current = renderCount.current ? renderCount.current + 1 : 1;

        const processing = fetcher.formData?.get("sessionid") === "" + id;

        useEffect(() => {
            if (renderCount.current === 1) {
                return;
            }

            if (!processing) {
                toast.success(`Your vote for session ${name} is registered`);
            }
        }, [processing]);

        return (
            <ListGroupItem>
                <Row className="align-items-stretch">
                    <Col xs={1}>
                        <fetcher.Form method="put">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <button
                                    name="vote"
                                    value={"upvote"}
                                    className="remove-user-agent-button-styles"
                                >
                                    <FontAwesomeIcon
                                        icon={faCaretUp}
                                        className="fa-2x"
                                    />
                                </button>
                                <input
                                    type="hidden"
                                    name="sessionid"
                                    value={id}
                                />
                                <span className={processing ? "pending" : ""}>
                                    {upvoteCount}
                                </span>

                                <button
                                    name="vote"
                                    value={"downvote"}
                                    className="remove-user-agent-button-styles"
                                >
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        className="fa-2x"
                                    />
                                </button>
                            </div>
                        </fetcher.Form>
                    </Col>
                    <Col xs={11}>
                        <h3>{name}</h3>
                        <div className="my-2">
                            by <strong>{speaker}</strong>
                        </div>
                        <div className="my-2">{level}</div>
                        <div className="my-2">{duration} hours</div>
                        <div className="my-2">{abstract}</div>
                    </Col>
                </Row>
            </ListGroupItem>
        );
    }
);

export default SessionsListItem;
