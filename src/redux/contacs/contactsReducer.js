import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "../contacs/contactsActions";

const AddContact = (state, action) => [...state, action.payload];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [contactsActions.getContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: AddContact,
  [contactsActions.removeContactSuccess]: removeContact
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload
});

const loading = createReducer(false, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading
});
