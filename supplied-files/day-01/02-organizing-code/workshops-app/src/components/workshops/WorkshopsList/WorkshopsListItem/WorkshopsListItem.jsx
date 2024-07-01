import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { ThemeContext } from '../../../../contexts/ThemeContext';

// sfc
const WorkshopsListItem = ({ name, id, startDate, endDate, time, imageUrl }) => {
    // const value = useContext(ThemeContext);
    const { theme } = useContext(ThemeContext);

    return (
        <Card className={`p-3 w-100 bg-${theme}`}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>
                    <Link to={`/workshops/${id}`}>{name}</Link>
                </Card.Title>
                <Card.Text>
                    <div>
                        <Moment format="MMM DD yyyy">{startDate}</Moment> - <Moment format="MMM DD yyyy">{endDate}</Moment>
                    </div>
                    <div>Timings: {time}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WorkshopsListItem;