import React from 'react';
import { connect } from 'react-redux';
import Data from './data';
import {values} from 'lodash';

const mapStateToProps = state => ({
});

//When this container is called in the route (when you navigate to a certain path)
//mapDispatchToProps actually dispatches the action creator fetchAllArtists
//the state is then changed to how you specified in the reducer
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
