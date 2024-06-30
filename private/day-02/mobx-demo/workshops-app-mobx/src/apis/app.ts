import axios from "axios";
import AppStore from "../stores/app";
import WorkshopApi from "./workshop";
import SessionApi from "./session";

export default class AppApi {

    client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

    workshop: WorkshopApi;
    session: SessionApi;

    constructor(store: AppStore) {
        this.workshop = new WorkshopApi(this, store);
        this.session = new SessionApi(this, store);
    }
}