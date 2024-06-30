import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App title="Workshops App" />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root") as HTMLDivElement
);
