import contactsActions from "../contacs/contactsActions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/v1";
axios.defaults.headers.common['Authorization'] = "23d3ca50-1209-4518-b35d-a5f4505fa444";
axios.defaults.headers.post['Content-Type'] = 'application/json';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const getContacts = () => dispatch => {
  dispatch(contactsActions.getContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.getContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.getContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactError(error)));
};

export default {
  addContact,
  getContacts,
  removeContact
};
