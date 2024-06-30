import PropTypes from 'prop-types';

import WeatherReport from './WeatherReport';

const CitiesWeatherReport = ( { cities, deleteCity } ) => {
    return cities.map(
        city => <WeatherReport
                    city={city}
                    deleteCity={deleteCity}
                    key={city}
        />
    );
};

CitiesWeatherReport.propTypes = {
    cities: PropTypes.arrayOf( PropTypes.string ),
    deleteCity: PropTypes.func
};

CitiesWeatherReport.defaultProps = {
    cities: [],
    deleteCity: null
};

export default CitiesWeatherReport;