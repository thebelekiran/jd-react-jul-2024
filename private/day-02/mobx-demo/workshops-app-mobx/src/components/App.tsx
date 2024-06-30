import React, { useMemo } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import WorkshopsList from "./WorkshopsList";
import WorkshopDetails from "./WorkshopDetails";

import AppContext from "../app-context";
import AppStore from "../stores/app";
import AppApi from "../apis/app";

const store = new AppStore();
const api = new AppApi(store);

type Props = {
    title: string;
};

const App = ({ title }: Props) => {
    const value = useMemo(() => {
        return {
            store,
            api,
        };
    }, []);

    return (
        <AppContext.Provider value={value}>
            <NavigationMenu />
            <div className="container my-4">
                {/* if( path == '/' ) {
                    render <Home />
                } */}
                <Route
                    path="/"
                    exact
                    render={(props: RouteComponentProps) => (
                        <Home title={title} {...props} />
                    )}
                />
                <Route path="/workshops" exact component={WorkshopsList} />
                <Route path="/workshops/:id" component={WorkshopDetails} />
            </div>
        </AppContext.Provider>
    );
};

export default App;
