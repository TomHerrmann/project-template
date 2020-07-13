import { APP_LOADING } from '../constants/actionTypes';

export const appLoading = (isLoading) => ({
  type: APP_LOADING,
  payload: isLoading,
});
