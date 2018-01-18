import React from 'react';
import { connect } from 'react-redux';
import Data from './data';
import {values} from 'lodash';
import {fetchAllUsers} from '../../actions/user';

const mapStateToProps = state => ({
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
