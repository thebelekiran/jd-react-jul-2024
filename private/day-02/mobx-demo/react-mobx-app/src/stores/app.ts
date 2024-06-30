import UserStore from './user';
import PostStore from './post';
import CommentStore from './comment';

export default class AppStore {
    user = new UserStore( this );
    post = new PostStore( this );
    comment = new CommentStore( this );
}