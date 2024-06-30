import axios from 'axios';

const getSessionsByWorkshopId = async (id) => {
    const response = await axios.get(
        `https://workshops-server.onrender.com/workshops/${id}/sessions`,
    );
    return response.data;
};

const voteForSession = async (id, voteType) => {
    const response = await axios.put(
        `https://workshops-server.onrender.com/sessions/${id}/${voteType}`,
    );
    return response.data;
};

const postSession = async (session) => {
    const response = await axios.post(
        `https://workshops-server.onrender.com/sessions`,
        session,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
};

export {
    getSessionsByWorkshopId,
    voteForSession,
    postSession
};