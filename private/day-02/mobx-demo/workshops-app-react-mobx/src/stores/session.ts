import { makeObservable, observable, computed, action } from 'mobx';

import Session from "../models/session";
import AppStore from "./app";

export default class SessionStore {
    byId = observable.map<number, Session>();
    lastUpdated = new Date();

    constructor(private store: AppStore) {
        makeObservable(this);
    }

    @action load( sessions: ISession[]) {
        sessions.forEach( it => this.byId.set( it.id, new Session( this.store, it ) ) );
        this.lastUpdated = new Date();
    }

    @action updateById( updatedSession: ISession ) {
        this.byId.set( updatedSession.id, new Session( this.store, updatedSession ) );
        this.lastUpdated = new Date();
    }

    @computed get all() {
        return Array.from( this.byId.values() );
    }

    @computed get numberOfSessions() {
        return this.all.length;
    }
}