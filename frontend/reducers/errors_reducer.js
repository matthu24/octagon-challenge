import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/user';

export default (errors = [], action) => {
  Object.freeze(errors);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return null;
    default:
      return errors;

  }
};
