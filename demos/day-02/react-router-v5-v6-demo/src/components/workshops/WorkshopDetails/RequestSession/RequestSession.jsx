import { useNavigate, useParams } from 'react-router-dom';

const RequestSession = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const navigateToSessionsList = () => {
        navigate(`/workshops/${id}`);
    };

    return (
        <form>
            <h1>Request for a new session</h1>
            <div>Form comes in here</div>
            <button type="button" onClick={navigateToSessionsList}>Take me to sessions list</button>
        </form>
    );
}

export default RequestSession;