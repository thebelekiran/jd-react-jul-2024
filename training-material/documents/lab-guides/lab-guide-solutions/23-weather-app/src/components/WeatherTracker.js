import { useState, useEffect, useRef } from 'react';
import { FormControl, Button } from 'react-bootstrap';

import CityFilter from './CityFilter';
import CitiesWeatherReport from './CitiesWeatherReport';

const WeatherTracker = () => {
    const [ cities, setCities ] = useState( JSON.parse( localStorage.getItem( 'cities' ) || '[]' ) );
    const [ filterKey, setFilterKey ] = useState( '' );
    const [ filteredCities, setFilteredCities ] = useState( JSON.parse( localStorage.getItem( 'cities' ) || '[]' ) );
    
    const newCityRef = useRef();

    const addNewCity = () => {
        let city = newCityRef.current.value.toLowerCase();

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
            setFilteredCities( cities.filter( city => city.toLowerCase().includes( filterKey.toLowerCase() ) ) );
        },
        [ cities, filterKey ]
    );

    return (
        <>
            <div className="my-2">
                <CityFilter
                    cities={cities}
                    filterKey={filterKey}
                    setFilterKey={setFilterKey}
                />
            </div>
            <div>
                <strong>Cities list</strong>: {cities.join( ',' )}
            </div>
            <div>
                <strong>Filtered cities list</strong>: {filteredCities.join( ',' )}
            </div>
            <div className="my-2">
                <FormControl placeholder="Name of the city" ref={newCityRef} />
                <Button onClick={addNewCity} variant="primary" className="my-2">Add city</Button>
            </div>
            <CitiesWeatherReport
                cities={filteredCities}
                deleteCity={deleteCity}
            />
        </>
    )
};

export default WeatherTracker;