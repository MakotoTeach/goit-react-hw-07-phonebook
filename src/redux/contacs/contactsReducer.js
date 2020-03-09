import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contacsActions from "../contacs/contactsActions";

const AddContact = (state, action) => [...state, action.payload.contact];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [contacsActions.addContact]: AddContact,
  [contacsActions.removeContact]: removeContact
});

const filter = createReducer('', {
  [contacsActions.changeFilter]: (state, action ) => action.payload
})

export default combineReducers({
  items,
  filter
});
