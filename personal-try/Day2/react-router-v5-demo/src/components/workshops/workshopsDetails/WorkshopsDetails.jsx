import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { lazy, Suspense } from "react";

import SessionList from "../SessionsList/SessionsList";
// import RequestSession from "../RequestSession/RequestSession";
const RequestSession = lazy(() => import("../RequestSession/RequestSession"));

const WorkshopsDetails = ({id}) => {
    return ( 
        <div>
           <h1> Show the details for the workshop id = {id} </h1>

            <h1> Name of the workshop</h1>

            <div>
                Details...
            </div>

            <div className="my-5">
                <Link to={`/workshops/${id}`}> List of Sessions</Link>
                {""}
                <Link to={`/workshops/${id}/add`}> Request a new Sessions</Link>
            </div>

            <div className="my-5">
                <Suspense fallback={<div>Loading this section...Please wait...</div>}>  
                    <Switch>
                        <Route path={`/workshops/:id/add`} component={RequestSession} />
                        <Route path={`/workshops/:id`} component={SessionList} />
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
}
 
export default WorkshopsDetails;