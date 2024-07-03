import axios from 'axios';

const getWorkshops = async () => {
    const res = await axios.get(`https://workshops-server.onrender.com/workshops`);
    return res.data;
}

export {
    getWorkshops
};