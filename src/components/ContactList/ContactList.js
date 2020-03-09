import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  )
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  }
};


export default connect(mapStateToProps)(ContactList);
