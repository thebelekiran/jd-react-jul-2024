import WorkshopStore from './workshop';
import SessionStore from './session';

export default class AppStore {
    workshop = new WorkshopStore( this );
    session = new SessionStore( this );
}