import {createUser,fetchUsers, fetchUser} from '../utils/user_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors:null
})

export const clearAllErrors = (errors) => dispatch => (
  dispatch(clearErrors(errors))
)

export const fetchAllUsers = () => dispatch => (
  fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const fetchSingleUser = id => dispatch =>{
  return fetchUser(id).then(user => dispatch(receiveUser(user)))
};

export const createSingleUser = user => dispatch => {
  return createUser(user).then(newUser => dispatch(receiveUser(newUser)), err => (
    dispatch(receiveErrors(err.responseJSON)))

  );
};
