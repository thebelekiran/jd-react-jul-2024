import axios from 'axios';
import { useEffect, useState } from 'react';

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(
        () => {
            const helper = async () => {
                const response = await axios.get(`http://localhost:8001/workshops`)
                const data = response.data;
                setWorkshops(data);
            };

            helper();
        },
        []
    )

    return (
        <div>
            {
                workshops.map(
                    w => <div key={w.id}>{w.name}</div>
                )
            }
        </div>
    )
};

export default WorkshopsList;