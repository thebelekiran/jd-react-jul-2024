import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const RequestSession = () => {

    const history = useHistory();

    const { id } = useParams();

    const navigateToSessionList = () => {
        history.push(`/workshops/${id}`);
    }

    return ( 
        <form>
            <h1>Request for a new session</h1>
            <div>Form comes in here</div>
            <button type="button" onClick={navigateToSessionList}>Take me back to Sessions list</button>
        </form>
     );
}
 
export default RequestSession;