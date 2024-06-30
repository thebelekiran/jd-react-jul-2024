import {
    computed,
    action
} from 'mobx';
import AppStore from "../stores/app";

export default class Session implements ISession {
    id: number;
    workshopId: number;
    sequenceId: number;
    name: string;
    speaker: string;
    duration: number;
    level: SessionLevel;
    abstract: string;
    upvoteCount: number;

    constructor(private store: AppStore, session: ISession) {
        // Object.assign( this, workshop );

        this.name = session.name;
        this.id = session.id;
        this.workshopId = session.workshopId;
        this.sequenceId = session.sequenceId;
        this.name = session.name;
        this.speaker = session.speaker;
        this.duration = session.duration;
        this.level = session.level;
        this.abstract = session.abstract;
        this.upvoteCount = session.upvoteCount;
    }

    @computed get workshop() {
        return this.store.workshop.all.find( it => it.id === this.workshopId );
    }

    @action update( updatedSession: ISession ) {
        this.name = updatedSession.name;
        this.id = updatedSession.id;
        this.workshopId = updatedSession.workshopId;
        this.sequenceId = updatedSession.sequenceId;
        this.name = updatedSession.name;
        this.speaker = updatedSession.speaker;
        this.duration = updatedSession.duration;
        this.level = updatedSession.level;
        this.abstract = updatedSession.abstract;
        this.upvoteCount = updatedSession.upvoteCount;
    }
}