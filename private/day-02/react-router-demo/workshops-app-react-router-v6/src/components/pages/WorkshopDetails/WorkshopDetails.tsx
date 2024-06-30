import { Row, Col, Image } from "react-bootstrap";
import {
    LoaderFunctionArgs,
    Outlet,
    useLoaderData,
    useNavigation,
    useParams,
} from "react-router-dom";
import { getWorkshopById } from "../../../services/workshops";
import IWorkshop from "../../../models/IWorkshop";
import {
    IdParams,
    WorkshopDetailsPageLoaderFunctionArgs,
} from "../../../models/utils";

export const loader = async ({
    params,
}: WorkshopDetailsPageLoaderFunctionArgs) => {
    const workshop = await getWorkshopById(params.id);
    console.log(params.id);

    return {
        workshop,
    };
};

const WorkshopDetails = () => {
    // const { workshop } = useLoaderData() as LoaderData<typeof loader>;
    const { workshop: workshopUntyped } = useLoaderData() as any;
    const workshop = workshopUntyped as IWorkshop;

    const { id } = useParams<IdParams>(); // { id: '2' }

    const navigation = useNavigation();
    const loading = navigation.state === "loading";

    return (
        <div>
            {loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {!loading && workshop && (
                <Row>
                    <Col xs={12}>
                        <h1>{workshop.name}</h1>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Image src={workshop.imageUrl} fluid />
                    </Col>
                    <Col xs={12} lg={8}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: workshop.description,
                            }}
                        ></div>
                    </Col>
                </Row>
            )}

            <Outlet context={{ id }} />
            {/* <Routes>
                <Route
                    path=""
                    element={<SessionsList id={id as unknown as string} />}
                />
                <Route
                    path="add"
                    element={<AddSession id={id as unknown as string} />}
                />
            </Routes> */}
        </div>
    );
};

export default WorkshopDetails;
