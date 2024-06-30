import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

const CityFilter = ( { cities, filterKey, setFilterKey } ) => {
    return (
        <FormControl
            type="search"
            placeholder="Type to filter by city"
            value={filterKey} 
            onChange={event => setFilterKey( event.target.value )}
        />
    );
};

CityFilter.propTypes = {
    cities: PropTypes.arrayOf( PropTypes.string ),
    filterKey: PropTypes.string,
    setFilterKey: PropTypes.func
};

CityFilter.defaultProps = {
    cities: [],
    filterKey: '',
    setFilterKey: () => {}
};

export default CityFilter;