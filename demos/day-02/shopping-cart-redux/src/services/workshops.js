import axios from 'axios';

const getWorkshops = async () => {
    const response = await axios.get(`https://workshops-server.onrender.com/workshops`);
    return response.data;
};

export {
    getWorkshops
};