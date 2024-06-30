import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weather';
import filterCitiesReducer from './reducers/filterCities'

const store = createStore(
    combineReducers({
        weather: weatherReducer,
        filter: filterCitiesReducer
    }),
    composeWithDevTools( applyMiddleware( thunk ) )
);

export default store;