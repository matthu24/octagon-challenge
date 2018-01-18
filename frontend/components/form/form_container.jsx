import React from 'react';
import { connect } from 'react-redux';
import Form from './form';
import {values} from 'lodash';
import {createSingleUser,fetchAllUsers, clearAllErrors} from '../../actions/user';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createSingleUser: user => dispatch(createSingleUser(user)),
  clearAllErrors: errors => dispatch(clearAllErrors(errors))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
