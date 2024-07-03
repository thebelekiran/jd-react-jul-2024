import axios from 'axios';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../auth';
import { useNavigate } from 'react-router-dom';

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => {
            const helper = async () => {
                const response = await axios.get(`http://localhost:8001/workshops`)
                const data = response.data;
                setWorkshops(data);
            };

            if (isAuthenticated()) {
                helper();
            } else {
                navigate("/login");
            }
        },
        []
    );

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