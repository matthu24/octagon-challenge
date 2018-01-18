import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import {values} from 'lodash';
import {createSingleUser,fetchAllUsers, clearAllErrors} from '../../actions/user';

const mapStateToProps = state => ({
  errors: state.errors
});

//When this container is called in the route (when you navigate to a certain path)
//mapDispatchToProps actually dispatches the action creator fetchAllArtists
//the state is then changed to how you specified in the reducer
const mapDispatchToProps = dispatch => ({
  createSingleUser: user => dispatch(createSingleUser(user)),
  clearAllErrors: errors => dispatch(clearAllErrors(errors))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
