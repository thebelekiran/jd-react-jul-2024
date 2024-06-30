import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectFilteredCities } from '../reducers/filterCities';

import CityFilter from './CityFilter';
import CitiesWeatherReport from './CitiesWeatherReport';

const WeatherTracker = ( ) => {
    const filteredCities = useSelector( selectFilteredCities );
    console.log( filteredCities );

    return (
        <>
            <div className="my-2">
                <CityFilter />
            </div>
            <div>
                <strong>Filtered cities list</strong>:
                {' '}
                {filteredCities.map( city => <Badge variant="primary" className="me-2">{city?.name}</Badge> )}
            </div>
            <CitiesWeatherReport />
        </>
    )
};

export default WeatherTracker;