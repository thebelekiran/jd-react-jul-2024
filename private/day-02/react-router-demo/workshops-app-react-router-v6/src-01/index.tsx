import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./services/configureAxios";

import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";
import Home from "./components/pages/Home/Home";
import WorkshopsList from "./components/pages/WorkshopsList/WorkshopsList";
import AddWorkshop from "./components/pages/AddWorkshop/AddWorkshop";
import WorkshopDetails from "./components/pages/WorkshopDetails/WorkshopDetails";
import SessionsList from "./components/pages/WorkshopDetails/SessionsList/SessionsList";
import AddSession from "./components/pages/AddWorkshop/AddWorkshop";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/workshops/add",
                element: <AddWorkshop />,
            },
            {
                path: "/workshops/:id",
                element: <WorkshopDetails />,
                children: [
                    {
                        index: true,
                        element: <SessionsList />,
                    },
                    {
                        path: "add",
                        element: <AddSession />,
                    },
                ],
            },
            {
                path: "/workshops",
                element: <WorkshopsList />,
            },
            {
                index: true,
                element: <Home />,
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
