import { useState, useEffect } from 'react';
import { Alert, Row, Col, Image, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import SunriseSunset from './SunriseSunset';
import { fetchCurrentWeatherDataForCity } from '../services/weather';

const WeatherReport = ( { city, deleteCity, isCondensed } ) => {
    const [ cityData, setCityData ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );
    const { name } = useParams();

    useEffect(
        () => {
            const fetchCurrentWeatherDataForCityHelper = async () => {
                setLoading( true );

                try {
                    if( !city ) {
                        city = name;
                    }

                    const data = await fetchCurrentWeatherDataForCity( city );
                    setCityData( data );
                    setError( null );
                } catch( error ) {
                    setError( error );
                } finally {
                    setLoading( false );
                }
            };

            fetchCurrentWeatherDataForCityHelper();
        },
        [ city ]
    );

    if( !cityData ) {
        return (
            <>
                {
                    loading && (
                        <Alert variant="info">
                            Fetching weather details for {city}
                        </Alert>
                    )
                }
                {
                    !loading && error && (
                        <Alert variant="danger">
                            {error.response.data.message}
                        </Alert>
                    )
                }
            </>
        );
    } else {
        const {
            name,
            weather: [
                {
                    id,
                    main,
                    description,
                    icon
                }
            ],
            wind,
            clouds,
            main: {
                temp,
                pressure,
                humidity
            },
            sys: sunriseSunset,
            coord: {
                lat,
                lon
            }
        } = cityData;

        // logic to get background color to be applied based on id value (weather condition)
        let idInt = parseInt( id );
        idInt = idInt - idInt % 100;

        const style = {
            backgroundColor: WeatherReport.colors[idInt][0],
            color: WeatherReport.colors[idInt][1]
        };

        return (
            <div className="p-3 border my-5 text-center" style={style}>
                <div>
                    <h2 className="h3 font-weight-light">
                        {!isCondensed && 'Today\'s weather report for '}
                        <span className="font-weight-bold">{name}</span>
                    </h2>
                    <small className="text-muted">
                        Coordinates: ({lat}, {lon})
                    </small>
                </div>
                <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} title={description} />
                <Row xs={isCondensed ? 12 : 2} lg={isCondensed ? 0 : 4}>
                    <Col className="my-2">
                        <h3 className="h4">Weather condition</h3>
                        <div>
                            Temperature: {temp} °C
                        </div>
                        <div>
                            {main} - {description}
                        </div>
                    </Col>
                    {
                        !isCondensed && (
                            <>
                                <Col className="my-2">
                                    <h3 className="h4">Wind</h3>
                                    <div>Speed: {wind.speed} m/s</div>
                                    <div>Degree: {wind.deg}</div>
                                </Col>
                                <Col className="my-2">
                                    <h3 className="h4">Miscellaneous</h3>
                                    <div>Clouds: {clouds.all}%</div>
                                    <div>Pressure: {JSON.stringify(pressure)} millibars</div>
                                    <div>Humidity: {JSON.stringify(humidity)}%</div>
                                </Col>
                                <Col className="my-2">
                                    <SunriseSunset {...sunriseSunset} />
                                </Col>
                            </>
                        )
                    }
                </Row>
                <Row xs={1}>
                    <Col className="my-2">
                    {
                        deleteCity && (
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => {
                                    if( window.confirm( 'Are you sure you want to remove this from the list of cities being tracked?' ) ) {
                                        deleteCity( city );
                                    }
                                }}>
                                    Stop tracking
                            </Button>
                        )
                    }
                    {
                        isCondensed && (
                            <Button
                                variant="primary"
                                size="sm"
                                to={"/" + city}
                                as={Link}
                            >
                                Know more
                            </Button>
                        )
                    }
                    </Col>
                </Row>
            </div>
        );
    }
}

WeatherReport.propTypes = {
    city: PropTypes.string,
    deleteCity: PropTypes.func,
    isCondensed: PropTypes.bool
};

WeatherReport.defaultProps = {
    deleteCity: null,
    isCondensed: false
};

WeatherReport.colors = {
    "200": [ "#444", "#ddd" ],
    "300": [ "#ddd", "#444" ],
    "500": [ "#888", "#fff" ],
    "600": [ "#fff", "#222" ],
    "700": [ "#ccc", "#444" ],
    "800": [ "skyblue", "#444" ]
};

export default WeatherReport;