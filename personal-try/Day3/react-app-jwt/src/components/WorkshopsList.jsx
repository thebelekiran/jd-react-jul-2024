import axios from "axios";
import { useEffect, useState } from "react"

export default function WorkshopsList() {
    const [workshops, setWorkshops] = useState();

    useEffect(
        () => {
            const helper = async () => {
                const res = await axios.get(`http://localhost:8001/workshops`);
                const data = res.data;
                setWorkshops(data);
            };
            helper();
        }
    )

    return ( 
        <div>
            {
                workshops.map(
                    w => <div key={w.id}> {w.name} </div>
                )
            }
        </div>
     );
}