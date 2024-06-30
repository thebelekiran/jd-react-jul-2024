import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchCurrentWeatherDataForCity = async city => {
    const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` );
    return response.data;
};

export {
    fetchCurrentWeatherDataForCity
};