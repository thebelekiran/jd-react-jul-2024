import axios from 'axios';

const getWorkshops = async () => {
    try {
        const response = await axios.get<IWorkshop[]>( `${process.env.REACT_APP_API_BASE_URL}/workshops` );
        return response.data;
    } catch( error ) {
        // to get data sent by backend in case of errors
        // .catch( error => {
        //     throw error.response.data
        // })
        throw error;
    }
};

const getWorkshopById = async ( id : number | string ) => {
    try {
        const response = await axios.get<IWorkshop>( `${process.env.REACT_APP_API_BASE_URL}/workshops/${id}` );
        return response.data;
    } catch( error ) {
        // to get data sent by backend in case of errors
        // .catch( error => {
        //     throw error.response.data
        // })
        throw error;
    }
};

export {
    getWorkshops,
    getWorkshopById
};