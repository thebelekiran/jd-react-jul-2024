import {
    observable,
    makeObservable,
    action,
    computed
} from 'mobx';
import User from '../models/user';
import IUser from '../types/user';
import AppStore from './app';

export default class UserStore {
    byId = observable.map<number, User>();

    constructor( private store : AppStore ) {
        makeObservable( this );
    }

    // users = [ { id: ..., name: ..., username: ..., email: ... }, {}, {}, ... ]
    // @action indicates that this method changes the data members
    @action load( users : IUser[] ) {
        users.forEach( user => this.byId.set( user.id, new User( this.store, user ) ) );
    }

    // convenience property for using the map as an array of users
    // This is an accessor method (written like a method but used as a property)
    @computed get all() {
        return Array.from( this.byId.values() );
    }


    // list.incompleteTasks
    // @computed get incompleteTasks() {
    //     return 
    // }
}