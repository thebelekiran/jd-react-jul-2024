import SessionsListItem from './SessionsListItem/SessionsListItem';
import useFetch from '../../../../hooks/useFetch';
import { getSessionsByWorkshopId, voteForSession } from '../../../../services/api/sessions';

const SessionsList = ({ id }) => {
    const {
        data: sessions,
        setData,
        loading,
        error
    } = useFetch(
        () => getSessionsByWorkshopId(id),
        [id]
    );

    const vote = async (id, voteType) => {
        try {
            const updatedSession = await voteForSession(id, voteType);

            // update the vote count for the session
            setData(
                sessions => sessions.map(
                    s => s.id === id ? updatedSession : s
                )
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <h2 className="h3">List of sessions</h2>
            <hr />

            {loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>
                </div>
            )}

            {error !== null && (
                <div class="alert alert-danger" role="alert">
                    {error.message}
                </div>
            )}

            {sessions && sessions.map((s) => (
                <div key={s.id}>
                    <SessionsListItem {...s} vote={vote} />
                </div>
            ))}
        </>
    );
}

export default SessionsList;