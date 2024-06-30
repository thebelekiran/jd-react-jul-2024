// It was necessary to import React till React v17
// import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./global/Menu/Menu";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <Menu />
            <ToastContainer />

            <Container className="my-4">
                <Outlet />
            </Container>
        </div>
    );
}

export default App;
