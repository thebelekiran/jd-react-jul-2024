import { makeObservable, observable, computed, action } from 'mobx';

import Workshop from "../models/workshop";
import AppStore from "./app";

export default class WorkshopStore {
    byId = observable.map<number, Workshop>();
    
    @observable
    lastUpdated = new Date();

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load( workshops: IWorkshop[] ) {
        workshops.forEach( it => this.byId.set( it.id, new Workshop( this.store, it ) ) );
        this.lastUpdated = new Date();
    }

    @computed get all() {
        return Array.from( this.byId.values() );
    }

    @computed get numberOfWorkshops() {
        return this.all.length;
    }
}