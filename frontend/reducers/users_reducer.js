import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user';
import merge from 'lodash/merge';

export default (state = {},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users)
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]:action.user})
    default:
    return state;
  }

}
