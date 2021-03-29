import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addPhone = createAction('phone/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deletePhone = createAction('phone/delete');
const changeFilter = createAction('phone/changeFilter');
const clearFilter = createAction('phone/clearFilter');

const action = { addPhone, deletePhone, changeFilter, clearFilter };

export default action;
