import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    useRouteError,
} from "react-router-dom";

import "./services/configureAxios";

import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";
import Home from "./components/pages/Home/Home";
import WorkshopsList, {
    loader as worshopsListLoader,
} from "./components/pages/WorkshopsList/WorkshopsList";
import AddWorkshop from "./components/pages/AddWorkshop/AddWorkshop";
import WorkshopDetails, {
    loader as workshopDetailsLoader,
} from "./components/pages/WorkshopDetails/WorkshopDetails";
import SessionsList, {
    loader as sessionsListLoader,
} from "./components/pages/WorkshopDetails/SessionsList/SessionsList";
import { action as sessionsListItemVotingAction } from "./components/pages/WorkshopDetails/SessionsList/SessionsListItem/SessionsListItem";
import AddSession from "./components/pages/AddWorkshop/AddWorkshop";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    return (
        <div
            style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {(error as Error).message}
        </div>
    );
}

function ErrorBoundaryWL() {
    const error = useRouteError();
    console.error(error);
    return (
        <div
            style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            Something went wrong when fetching list of workshops
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/workshops",
                element: <WorkshopsList />,
                loader: worshopsListLoader,
                // errorElement: <ErrorBoundary />,
                errorElement: <ErrorBoundaryWL />
            },
            {
                path: "/workshops/add",
                element: <AddWorkshop />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "/workshops/:id",
                element: <WorkshopDetails />,
                loader: workshopDetailsLoader as any,
                children: [
                    {
                        index: true,
                        element: <SessionsList />,
                        loader: sessionsListLoader as any,
                        action: sessionsListItemVotingAction as any,
                        errorElement: <ErrorBoundary />,
                    },
                    {
                        path: "add",
                        element: <AddSession />,
                        errorElement: <ErrorBoundary />,
                    },
                ],
            },
            {
                path: "*",
                element: <PageNotFound />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
