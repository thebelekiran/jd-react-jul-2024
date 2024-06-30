import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectFilteredCitiesNames } from '../reducers/filterCities';
import WeatherReport from './WeatherReport';

const CitiesWeatherReport = () => {
    const cities = useSelector( selectFilteredCitiesNames );

    return (
        <Row xs={2} lg={4}>
            {
                cities.map(
                    city => (
                        <Col key={city}>
                            <WeatherReport
                                city={city}
                                isCondensed
                            />
                        </Col>
                    )
                )
            }
        </Row>
    );
};

export default CitiesWeatherReport;