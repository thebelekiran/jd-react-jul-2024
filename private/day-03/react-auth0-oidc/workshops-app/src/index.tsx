import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./services/configureAxios";

import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-esureafy76zuq0w0.us.auth0.com"
            clientId="Q4XJgcFkOmBHOFrA7SEnmlsLDQ2G7xiw"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Auth0Provider>
    </React.StrictMode>
);
