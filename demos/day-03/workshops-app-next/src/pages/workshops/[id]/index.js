import axios from 'axios';

export async function getServerSideProps(args) {
    console.log(args); // args.params.id is the requested workshop's id

    const id = args.params.id

    // fetch data from `https://workshops-server.onrender.com/workshops/${id}/sessions`
    const response = await axios.get(`https://workshops-server.onrender.com/workshops/${id}/sessions`);
    const sessions = response.data;

    return {
        props: {
            sessions: sessions
        }
    }
}

export default function WorkshopDetailsAndSessionsPage({ sessions }) {
    return (
        <div>
            <h1>Sessions in this workshop</h1>
            <hr />
            {
                sessions.map(
                    s => (
                        <div id={s.id}>{s.name}</div>
                    )
                )
            }
        </div>
    );
}