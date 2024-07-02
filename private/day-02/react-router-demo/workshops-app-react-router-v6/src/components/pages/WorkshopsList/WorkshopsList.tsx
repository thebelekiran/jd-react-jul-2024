import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
    Form,
    LoaderFunction,
    useLoaderData,
    useNavigation,
} from "react-router-dom";
import { getWorkshops } from "../../../services/workshops";
import WorkshopsListItem from "./WorkshopsListItem/WorkshopsListItem";
import IWorkshop from "../../../models/IWorkshop";
import { LoaderData } from "../../../models/utils";

import "./WorkshopsList.css";

export const loader = (async ({ request }) => {
    const url = new URL(request.url);
    const pageParams = url.searchParams.get("page");
    
    let page = 1;

    if (pageParams) {
        page = +pageParams;
    }

    const workshops = await getWorkshops(page);

    return {
        page,
        workshops,
    };
}) satisfies LoaderFunction;

const WorkshopsList = () => {
    const { page, workshops } = useLoaderData() as LoaderData<typeof loader>;

    const navigation = useNavigation();
    const loading = navigation.state === "loading";

    // Feature 2: client-side filtering
    const [filterKey, setFilterKey] = useState("");
    const [filteredWorkshops, setFilteredWorkshops] = useState<IWorkshop[]>([]);

    useEffect(() => {
        if (!workshops) {
            return;
        }

        setFilteredWorkshops(
            filterKey === ""
                ? workshops
                : workshops.filter((w) =>
                      w.name.toLowerCase().includes(filterKey.toLowerCase())
                  )
        );
    }, [filterKey, workshops]);

    return (
        <div className="container my-4">
            <h1>List of workshops</h1>
            <hr />
            <div className="my-2">
                <Form id="pagination-form" role="search">
                    <button
                        id="previous"
                        name="page"
                        value={page === 1 ? 1 : page - 1}
                        aria-label="Fetch the previous page of workhops"
                        className="btn btn-primary btn-sm me-2"
                    >
                        Previous
                    </button>
                    <button
                        id="previous"
                        name="page"
                        value={page + 1}
                        aria-label="Fetch the next page of workhops"
                        className="btn btn-primary btn-sm me-2"
                    >
                        Next
                    </button>
                    <div id="pagination-spinner" aria-hidden hidden={true} />
                    <div className="sr-only" aria-live="polite"></div>
                </Form>
            </div>
            {filteredWorkshops.length !== 0 && (
                <div className="my-2">You are on page {page}</div>
            )}
            <input
                type="search"
                className="form-control my-2"
                placeholder="Type to filter by name"
                onChange={(event) => setFilterKey(event.target.value)}
            />

            {loading && (
                <div className="d-flex justify-content-center">
                    <div
                        className="spinner-border"
                        role="status"
                        data-testid="loading-spinner"
                    >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {/* {!loading && error && (
                <div className="alert alert-danger" data-testid="error-message">
                    {error.message}
                </div>
            )} */}
            {!loading && workshops?.length === 0 && (
                <div className="alert alert-info">No workshops</div>
            )}
            {!loading && workshops?.length !== 0 && (
                <>
                    <Row xs={1} lg={3}>
                        {filteredWorkshops.map((workshop) => (
                            <Col key={workshop.id} className="d-flex my-3">
                                <WorkshopsListItem {...workshop} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </div>
    );
};

export default WorkshopsList;
