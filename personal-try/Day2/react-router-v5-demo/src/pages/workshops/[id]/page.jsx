import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import WorkshopsDetails from "../../../components/workshops/workshopsDetails/WorkshopsDetails";

const WorkshopsDetailsPage = () => {

    const { id } = useParams();

    return ( 
        <div>
            <WorkshopsDetails id={id} />
        </div>
     );
}
 
export default WorkshopsDetailsPage;