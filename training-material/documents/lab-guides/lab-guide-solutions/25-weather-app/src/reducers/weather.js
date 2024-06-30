import {
    ADD_CITY,
    DELETE_CITY,
    FETCHED_WEATHER_DATA,
    FETCHING_WEATHER_DATA,
    ERROR_FETCHING_WEATHER_DATA
} from '../actions/constants';

// NOTE: For initialState, a new Map() would be a better choice instead of a plain JS object
const cities = JSON.parse( localStorage.getItem( 'cities' ) || '[]' )
const initialState = { };
cities.forEach( city => initialState[city] = null );

const weatherReducer = ( state = initialState, { type, payload: { city, data, error } = {} } ) => {
    switch( type ) {
        case ADD_CITY:
            // city already exists in the tracked list of cities
            if( Object.keys( state ).includes( city ) ) {
                return state;
            }

            return {
                ...state,
                [city]: null
            };
        case DELETE_CITY:
            const newState = {
                ...state
            };
            delete newState[city];
            return newState;
        case FETCHING_WEATHER_DATA:
            return {
                ...state,
                [city]: null
            };
        case FETCHED_WEATHER_DATA:
            return {
                ...state,
                [city]: data
            };
        case ERROR_FETCHING_WEATHER_DATA:
            return {
                ...state,
                [city]: error
            }
        default:
            return state;
    }
};

export const selectCities = state => Object.keys( state.weather );
export const selectCity = city => state => state.weather[city];

export default weatherReducer;