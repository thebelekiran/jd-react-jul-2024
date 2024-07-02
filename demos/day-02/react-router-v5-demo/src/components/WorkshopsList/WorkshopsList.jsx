import { useState, useEffect } from 'react';
import { getWorkshops } from '../../services/workshops';

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
                        <div key={w.id}>{w.name}</div>
                    )
                )
            }
        </div>
    );
}

export default WorkshopsList;