
import { useState, useEffect } from "react";
import { getWorkshops } from "../../../services/workhops";
import { Link } from "react-router-dom";

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(
        () => {
            async function helper(){
                const data = await getWorkshops();
                setWorkshops(data);
            }

            helper();
        },
        []
    )

    // console.log(workshops);

    return ( 
        <div>
            <h1> List of Workshops Components </h1>
            <hr/>

            {
                workshops && workshops.map(
                    (w) => (
                        <Link to={"/workshops/"+ w.id} >
                            <div key={w.id}> {w.name} </div>
                        </Link>
                    )
                )
            }

        </div>

     );
}
 
export default WorkshopsList;