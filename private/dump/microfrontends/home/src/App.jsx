import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        Home Page Content
      </div>
      <Footer />
    </div >
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

