import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appLoading } from './actions/actions';

import LoadingSpinner from './components/LoadingSpinner.jsx';

const App = () => {
  const { isLoading } = useSelector((state) => ({ ...state.appReducer }));
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appLoading(false));
    }, 250);
  }, []);

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

export default App;
