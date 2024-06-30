import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const SessionsListItem = ({ id, name, speaker, duration, level, upvoteCount, vote }) => {
    return (
        <Row className="my-4">
            <Col>{name}</Col>
            <Col>
                {speaker}
            </Col>
            <Col>
                {duration}
            </Col>
            <Col>
                {level}
            </Col>
            <Col>
                <FontAwesomeIcon icon={faThumbsDown} style={{ fontSize: 30, color: 'crimson', cursor: 'pointer' }} onClick={() => vote(id, 'downvote')} />
                <span className="mx-2">{upvoteCount}</span>
                <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: 30, color: 'lightgreen', cursor: 'pointer' }} onClick={() => vote(id, 'upvote')} />
            </Col>
        </Row>
    );
}

export default SessionsListItem;