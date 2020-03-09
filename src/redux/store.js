import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacs/contactsReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  }
});

export default store;
