import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import WeatherReport from './WeatherReport';

const CitiesWeatherReport = ( { cities, deleteCity } ) => {
    return (
        <Row xs={2} lg={4}>
            {
                cities.map(
                    city => (
                        <Col key={city}>
                            <WeatherReport
                                city={city}
                                deleteCity={deleteCity}
                                isCondensed
                            />
                        </Col>
                    )
                )
            }
        </Row>
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