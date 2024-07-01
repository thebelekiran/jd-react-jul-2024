import axios from "axios";

const getSessionForWorkshopWithId = async (id) => {
    const response = await axios.get(`/workshops/${id}/sessions`);
    return response.data;
};

const vote = async (id, voteType) => {
    const response = await axios.put(`/sessions/${id}/${voteType}`);
    return response.data;
};

const postSession = async (session) => {
    const response = await axios.post(`/sessions`, session);

    return response.data;
};

export { getSessionForWorkshopWithId, vote, postSession };
