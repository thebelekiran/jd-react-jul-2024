import {
    computed
} from 'mobx';
import AppStore from '../stores/app';

export default class Workshop implements IWorkshop {
    name: string;
    id: number;
    description: string;
    startDate: string;
    endDate: string;
    time: string;
    location: {
        address: string,
        city: string,
        state: string
    };
    modes: {
        inPerson: boolean,
        online: boolean
    };
    imageUrl: string;

    constructor(private store: AppStore, workshop: IWorkshop) {
        // Object.assign( this, workshop );

        this.name = workshop.name;
        this.id = workshop.id;
        this.description = workshop.description;
        this.startDate = workshop.startDate;
        this.endDate = workshop.endDate;
        this.time = workshop.time;
        this.location = workshop.location;
        this.modes = workshop.modes;
        this.imageUrl = workshop.imageUrl;
    }

    @computed get sessions() {
        return this.store.session.all.filter( it => it.workshopId === this.id );
    }
}