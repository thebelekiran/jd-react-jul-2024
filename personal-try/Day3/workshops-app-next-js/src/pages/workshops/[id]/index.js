import axios from "axios";

export async function getStaticPaths() {
    const res = await axios.get(`https://workshops-server.onrender.com/workshops`);
    const workshops = res.data;
    const workshopIds = workshops.map( w => ({ 
        params: { id: "" + w.id },
    }));
    
    console.log(workshopIds);

    return{
        path: workshopIds,
        fallback: false
    };
}

export async function getServerSideProps(args){
    console.log('getStaticPaths')
    console.log(args);
    const id = args.params.id
    const res = await axios.get(`https://workshops-server.onrender.com/workshops/${id}/sessions`);
    return {
        props: {
            workshop: res.data
        }
    }
}

export default function WorkshopDetailsAndSessionsPage( { workshop } ) {
    console.log(workshop);
    return ( 
        <div>
            <h1> List of workshop</h1>
                <hr />
                {
                    workshop.map(
                        w => (
                            <div key={w.id}>
                                {w.name}
                            </div>
                        )
                    )
                }
        </div>
     );
}