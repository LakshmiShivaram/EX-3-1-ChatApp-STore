import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import { chatActionState, MyAppState } from './app.state';
import { addMessage } from './message.action';

export const initialState: chatActionState[] = [
  {
    chatId: null,
    chatParticular_message: []
  }
];

const _messageReducer = createReducer(
  initialState,
  on(addMessage, (state: chatActionState[], message) => {
    return {
      ...state,
      ...message.messageData
    };
  })
);

export function messageReducer(state: chatActionState[], action: Action) {
  return _messageReducer(state, action);
}

// const getMessage = createFeatureSelector<MyAppState>('messages');

// export const selectMsg = createSelector(
//   getMessage,
//   state => state.messages
// );
