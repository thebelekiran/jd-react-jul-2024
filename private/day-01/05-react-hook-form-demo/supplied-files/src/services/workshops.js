import axios from "axios";

const getWorkshops = async (_page) => {
    const response = await axios.get(`/workshops`, {
        params: {
            // _page: _page
            _page,
        },
    });
    return response.data;
};

const getWorkshopById = async (id) => {
    const response = await axios.get(`/workshops/${id}`);
    return response.data;
};

const postWorkshop = async (workshop) => {
    const response = await axios.post(`/workshops`, workshop);

    return response.data;
};

export { getWorkshops, getWorkshopById, postWorkshop };
