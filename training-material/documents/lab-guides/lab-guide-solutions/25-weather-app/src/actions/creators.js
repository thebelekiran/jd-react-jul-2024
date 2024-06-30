import {
    ADD_CITY,
    DELETE_CITY,
    FETCHING_WEATHER_DATA,
    FETCHED_WEATHER_DATA,
    ERROR_FETCHING_WEATHER_DATA,
    FILTER_BY_CITY_NAME
} from './constants';
import { fetchCurrentWeatherDataForCity } from '../services/weather';

const addCity = city => {
    return {
        type: ADD_CITY,
        payload: {
            city
        }
    };
};

const deleteCity = city => {
    return {
        type: DELETE_CITY,
        payload: {
            city
        }
    };
};

const fetchingWeatherData = city => {
    return {
        type: FETCHING_WEATHER_DATA,
        payload: {
            city
        }
    };
};

const fetchedWeatherData = ( city, data ) => {
    return {
        type: FETCHED_WEATHER_DATA,
        payload: {
            city,
            data
        }
    };
};

const errorFetchingWeatherData = ( city, error ) => {
    return {
        type: ERROR_FETCHING_WEATHER_DATA,
        payload: {
            city,
            error
        }
    };
};

const fetchWeatherData = city => {
    // @todo To use getState() to check if city data is already available, and if so, not fetch again
    return async ( dispatch, getState ) => {
        dispatch( fetchingWeatherData( city ) );

        try {
            const data = await fetchCurrentWeatherDataForCity( city );
            dispatch( fetchedWeatherData( city, data ) );
        } catch( error ) {
            dispatch( fetchedWeatherData( city, error ) );
        }
    };
};

const filterByCityName = filterKey => {
    return {
        type: FILTER_BY_CITY_NAME,
        payload: {
            filterKey
        }
    };
};

export {
    addCity,
    deleteCity,
    fetchingWeatherData,
    fetchedWeatherData,
    errorFetchingWeatherData,
    fetchWeatherData,
    filterByCityName
};