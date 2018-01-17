import {createUser,fetchUsers, fetchUser} from '../utils/user_util';
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchAllUsers = () => dispatch => (
  fetchUsers().then(users => dispatch(receiveUsers(users)))
);

export const fetchSingleUser = id => dispatch =>{
  return fetchUser(id).then(user => dispatch(receiveUser(user)))
};

export const createSingleUser = user => dispatch => {
  return createUser(user).then(newUser => dispatch(receiveUser(newUser)))
}
