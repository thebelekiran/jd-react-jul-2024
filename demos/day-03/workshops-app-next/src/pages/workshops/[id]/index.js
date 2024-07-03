import axios from 'axios';

export async function getStaticPaths() {
    const response = await axios.get(`https://workshops-server.onrender.com/workshops`);
    const workshops = response.data;

    const workshopIds = workshops.map(
        w => (
            {
                params: {
                    id: "" + w.id // ALL params should be strings
                },
            }
        )
    );

    console.log(workshopIds);

    return {
        paths: workshopIds,
        fallback: false // no other workshops except these -> if we get a request for some other workshop, return 404
    }
}

export async function getStaticProps(args) {
    console.log('getStaticProps');
    console.log(args); // args.params.id is the requested workshop's id

    const id = args.params.id

    // fetch data from `https://workshops-server.onrender.com/workshops/${id}/sessions`
    const response = await axios.get(`https://workshops-server.onrender.com/workshops/${id}/sessions`);
    const sessions = response.data;

    return {
        props: {
            sessions: sessions
        },
        revalidate: 300
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