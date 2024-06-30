import AppStore from "../stores/app";
import AppApi from "./app";

export default class SessionApi {

    constructor(private api: AppApi, private store: AppStore) { }

    async getAll() {
        const res = await this.api.client.get<ISession[]>( `/sessions` );
        this.store.session.load( res.data );
    };
    
    async getById( id : number | string ) {
        const res = await this.api.client.get<ISession>( `/sessions/${id}` );
        this.store.session.load( [ res.data ] );
    };

    async getByWorkshopId( workshopId: number ) {
        const res = await this.api.client.get<ISession[]>(`/workshops/${workshopId}/sessions`);
        this.store.session.load( res.data );
    }

    async castVote( id : number | string, voteType : VoteType ) {
        const res = await this.api.client.put<ISession>( `/sessions/${id}/${voteType}`, null );
        this.store.session.updateById( res.data );
        // return res.data;
    };
}