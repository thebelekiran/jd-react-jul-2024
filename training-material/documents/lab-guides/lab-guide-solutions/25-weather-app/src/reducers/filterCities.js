import {
    FILTER_BY_CITY_NAME
} from '../actions/constants';
import { selectCities, selectCity } from './weather';

const initialState = {
    filterKey: ''
};

const filterCitiesReducer = ( state = initialState, { type, payload: { filterKey } = {} } ) => {
    switch( type ) {
        case FILTER_BY_CITY_NAME:
            return {
                ...state,
                filterKey
            };
        default:
            return state;
    }
};

export const selectFilterKey = state => state.filter.filterKey;

export const selectFilteredCities = state => {
    const cities = selectCities( state ).filter( city => city.toLowerCase().includes( state.filter.filterKey.toLowerCase() ) );
    return cities.map( city => selectCity( city )( state ) );
};

export const selectFilteredCitiesNames = state => {
    const cities = selectCities( state ).filter( city => city.toLowerCase().includes( state.filter.filterKey.toLowerCase() ) );
    return cities;
};

export default filterCitiesReducer;