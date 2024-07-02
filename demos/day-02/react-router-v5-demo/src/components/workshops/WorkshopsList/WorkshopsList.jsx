import { useState, useEffect } from 'react';
import { getWorkshops } from '../../../services/workshops';
import { Link } from 'react-router-dom';

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState([]);

    // fetch workshops when the page loads
    useEffect(
        () => {
            async function helper() {
                const data = await getWorkshops();
                setWorkshops(data);
            }

            helper();
        },
        []
    );

    return (
        <div>
            <h1>List of workshops</h1>
            <hr />

            {
                workshops && workshops.map(
                    w => (
                        <Link to={"/workshops/" + w.id}>
                            <div key={w.id}>{w.name}</div>
                        </Link>
                    )
                )
            }
        </div>
    );
}

export default WorkshopsList;