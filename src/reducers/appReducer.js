import { APP_LOADING } from '../constants/actionTypes';

const initialState = {
  isLoading: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING: {
      const isLoading = action.payload;

      return {
        ...state,
        isLoading,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
