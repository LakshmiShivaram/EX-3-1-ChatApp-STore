import { createAction, props } from '@ngrx/store';
import { chatActionState } from './app.state';

export const addMessage = createAction(
  '[Chat Component] AddMessage',
  props<{ messageData: chatActionState[] }>()
);
