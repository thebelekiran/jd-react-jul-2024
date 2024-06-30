import { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import CitiesList from './CitiesList';
import Menu from './Menu';
import WeatherTracker from "./WeatherTracker";
import WeatherReport from './WeatherReport';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [ cities, setCities ] = useState( JSON.parse( localStorage.getItem( 'cities' ) || '[]' ) );

    const addNewCity = ( city ) => {
        if( cities.includes( city ) ) {
            return;
        }

        setCities(
            cities => [
                ...cities,
                city
            ]
        );
    };

    const deleteCity = ( city ) => {
        setCities( cities => cities.filter( c => c !== city ) );
    };

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
                    <Route path="/" element={<CitiesList cities={cities} addNewCity={addNewCity} />} />
                    <Route path="/all" element={<WeatherTracker cities={cities} deleteCity={deleteCity} />} />
                    <Route path="/:name" element={<WeatherReport />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;