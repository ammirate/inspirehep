import { fromJS } from 'immutable';

import {
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  INITIAL_FORM_DATA_REQUEST,
  INITIAL_FORM_DATA_SUCCESS,
  INITIAL_FORM_DATA_ERROR,
} from '../actions/actionTypes';

export const initialState = fromJS({
  submitError: null,
  loadingInitialData: false,
  initialData: null,
  initialDataError: null,
});

const submissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SUCCESS:
      return state.set('submitError', initialState.get('submitError'));
    case SUBMIT_ERROR:
      return state.set('submitError', fromJS(action.payload));
    case INITIAL_FORM_DATA_REQUEST:
      return state.set('loadingInitialData', true);
    case INITIAL_FORM_DATA_SUCCESS:
      return state
        .set('loadingInitialData', false)
        .set('initialData', fromJS(action.payload.data))
        .set('initialDataError', initialState.get('initialDataError'));
    case INITIAL_FORM_DATA_ERROR:
      return state
        .set('loadingInitialData', false)
        .set('initialDataError', fromJS(action.payload))
        .set('initialData', initialState.get('initialData'));
    default:
      return state;
  }
};

export default submissionsReducer;
