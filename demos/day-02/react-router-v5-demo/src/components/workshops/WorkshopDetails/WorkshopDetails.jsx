import { Link, Switch, Route } from 'react-router-dom';

import SessionsList from './SessionsList/SessionsList';
import RequestSession from './RequestSession/RequestSession';

const WorkshopDetails = ({ id }) => {
    return (
        <>
            <div>Show the details for workshop with id = {id}</div>
            <h1>
                Name of the workshop
            </h1>
            <div>Details....</div>

            <div className="my-5">
                <Link to={`/workshops/${id}`}>List of sessions</Link>
                {" "}
                <Link to={`/workshops/${id}/add`}>Request a new session</Link>
            </div>

            <div className="my-5">
                <Switch>
                    <Route path={`/workshops/:id/add`} component={RequestSession} />
                    <Route path={`/workshops/:id`} component={SessionsList} />
                </Switch>
            </div>
        </>
    );
}

export default WorkshopDetails;