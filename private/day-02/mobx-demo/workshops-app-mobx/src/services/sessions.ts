import axios from 'axios';

const getSessions = async ( workshopId : number | string ) => {
    const response = await axios.get<ISession[]>( `${process.env.REACT_APP_API_BASE_URL}/workshops/${workshopId}/sessions` );

    return response.data;
};

const castVote = async ( id : number | string, voteType : VoteType ) => {
    const response = await axios.put<ISession>( `${process.env.REACT_APP_API_BASE_URL}/sessions/${id}/${voteType}`, null );

    return response.data;
};

export {
    getSessions,
    castVote
};