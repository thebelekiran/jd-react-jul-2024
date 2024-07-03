import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// You can choose either SSR or SSG to be used in any page-level component (any component in pages/ folder)

// Server-Side Rendering (SSR)
export async function getServerSideProps() {
    const response = await axios.get(`https://workshops-server.onrender.com/workshops`);
    const workshops = response.data;

    // Collect all data you want to pass on to the page component and pass it this way...
    return {
        props: {
            workshops: workshops
        }
    }
}

// Static Site Generation (SSG)
// function getStaticProps() {

// }

// page component
export default function WorkshopsListPage({ workshops }) {
    const [workshopsData, setWorkshopsData] = useState([]);

    useEffect(
        () => {
            const helper = async () => {
                const response = await axios.get(`https://workshops-server.onrender.com/workshops`);
                const workshops = response.data;
                setWorkshopsData(workshops);
            };

            helper();
        },
        []
    )

    return (
        <div>
            <h1>List of workshops</h1>
            <hr />

            <div>
                {
                    workshops.map(
                        w => (
                            <div key={w.id}>
                                <Link href={"/workshops/" + w.id}>
                                    {w.name}
                                </Link>
                            </div>
                        )
                    )
                }
            </div>

            <h2>Workshops fetched from client-side code</h2>
            <div>
                {
                    workshopsData.map(
                        w => <div key={w.id}>{w.name}</div>
                    )
                }
            </div>
        </div>
    );
};