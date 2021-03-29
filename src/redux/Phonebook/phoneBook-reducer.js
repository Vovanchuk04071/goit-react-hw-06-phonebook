import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phoneBook-action';

const phone = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contacts = createReducer([...phone], {
  [actions.addPhone]: (state, { payload }) => [payload, ...state],
  [actions.deletePhone]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
  [actions.clearFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
