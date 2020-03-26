import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import contactsSelectors from '../../redux/contacs/contactsSelectors'
import styles from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id}) => (
        <ContactListItem
          key={id}
          id={id}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  )
};

const mapStateToProps = state => ({
 contacts: contactsSelectors.getVisibleContacts(state)
});


export default connect(mapStateToProps)(ContactList);
