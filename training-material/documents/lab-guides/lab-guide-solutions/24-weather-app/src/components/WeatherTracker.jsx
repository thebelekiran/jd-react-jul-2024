import { useState, useEffect } from 'react';

import CityFilter from './CityFilter';
import CitiesWeatherReport from './CitiesWeatherReport';

const WeatherTracker = ( { cities, deleteCity } ) => {
    const [ filterKey, setFilterKey ] = useState( '' );
    const [ filteredCities, setFilteredCities ] = useState( JSON.parse( localStorage.getItem( 'cities' ) || '[]' ) );

    useEffect(
        () => {
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
                <strong>Filtered cities list</strong>: {filteredCities.join( ',' )}
            </div>
            <CitiesWeatherReport
                cities={filteredCities}
                deleteCity={deleteCity}
            />
        </>
    )
};

export default WeatherTracker;