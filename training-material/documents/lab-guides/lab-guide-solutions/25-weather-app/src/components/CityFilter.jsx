import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCityName } from '../actions/creators';
import { selectFilterKey } from '../reducers/filterCities'

const CityFilter = () => {
    const dispatch = useDispatch();
    const filterKey = useSelector( selectFilterKey );

    return (
        <FormControl
            type="search"
            placeholder="Type to filter by city"
            value={filterKey} 
            onChange={event => dispatch( filterByCityName( event.target.value ) )}
        />
    );
};

export default CityFilter;