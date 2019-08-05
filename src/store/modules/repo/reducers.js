import produce from 'immer';
import { ACTIONS_NAME } from './actions';
import initialState from './initialState';

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_NAME.ADD_USERNAME_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case ACTIONS_NAME.ADD_USERNAME_SUCCESS:
      return produce(state, draft => {
        const { repos } = action;
        draft.loading = false;
        draft.items = repos;
      });
    case ACTIONS_NAME.ADD_USERNAME_ERROR:
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
