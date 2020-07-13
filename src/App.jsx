import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import LoadingSpinner from './components/LoadingSpinner.jsx';

const App = ({ appLoading, isLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      appLoading(false);
    }, 250);
  });

  const renderContent = () => {
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <h1>This is the start of something great!</h1>
    );
  };

  return (
    <div className="app">
      <div className="container">{renderContent()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
