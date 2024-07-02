import { useParams } from 'react-router-dom';
import WorkshopDetails from "../../../components/workshops/WorkshopDetails/WorkshopDetails";

const WorkshopDetailPage = () => {
    const { id } = useParams();

    return (
        <WorkshopDetails id={id} />
    );
}

export default WorkshopDetailPage;