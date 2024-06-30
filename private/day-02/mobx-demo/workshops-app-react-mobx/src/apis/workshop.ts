import AppStore from "../stores/app";
import AppApi from "./app";

export default class WorkshopApi {

    constructor(private api: AppApi, private store: AppStore) { }

    async getAll() {
        const res = await this.api.client.get<IWorkshop[]>( `/workshops` );
        this.store.workshop.load( res.data );
    };
    
    async getById( id : number | string ) {
        const res = await this.api.client.get<IWorkshop>( `/workshops/${id}` );
        this.store.workshop.load( [ res.data ] );
    };
}