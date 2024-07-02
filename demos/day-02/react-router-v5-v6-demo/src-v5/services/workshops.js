import axios from 'axios';

const getWorkshops = async () => {
    const response = await axios.get('/workshops');
    return response.data;
};

export {
    getWorkshops
};