import { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import Menu from './Menu';
import CitiesList from './CitiesList';
import WeatherReport from './WeatherReport';
import WeatherTracker from "./WeatherTracker";

import { selectCities } from '../reducers/weather';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const cities = useSelector( selectCities )

    // @todo Try to move this to a thunk
    useEffect(
        () => {
            localStorage.setItem( 'cities', JSON.stringify( cities ) );
        },
        [ cities ]
    );

    return (
        <>
            <Menu />
            <Container className="my-4">
                <Routes>
                    <Route path="/" element={<CitiesList cities={cities} />} />
                    <Route path="/all" element={<WeatherTracker cities={cities} />} />
                    <Route path="/:name" element={<WeatherReport />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;