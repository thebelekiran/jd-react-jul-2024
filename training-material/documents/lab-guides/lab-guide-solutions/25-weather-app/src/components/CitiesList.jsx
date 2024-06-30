import { useRef } from 'react';
import { FormControl, Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCities } from '../reducers/weather';
import { addCity } from '../actions/creators';

const CitiesList = () => {
    const dispatch = useDispatch();
    const cities = useSelector( selectCities );

    const newCityRef = useRef();

    return (
        <>
            <h1>Weather App</h1>
            <hr />
            <div className="my-2">
                <FormControl placeholder="Name of the city" ref={newCityRef} />
                <Button onClick={() => dispatch( addCity( newCityRef.current.value.toLowerCase() ) )} variant="primary" className="my-2">
                    Add city
                </Button>
            </div>
            <div className="my-4">
                <h2>Tracked cities</h2>
                <hr />
                <ListGroup>
                {
                    cities.map(
                        city => <ListGroup.Item key={city} className="text-capitalize">{city}</ListGroup.Item>
                    )
                }
                </ListGroup>
            </div>
        </>
    );
};

export default CitiesList;