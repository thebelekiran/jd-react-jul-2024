import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import Header from 'home/Header';
import Footer from 'home/Footer';

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        PDP Page Content
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
