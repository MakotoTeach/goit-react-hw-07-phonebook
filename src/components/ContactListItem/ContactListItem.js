import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacs/contactsOperations";
import contactsSelectors from "../../redux/contacs/contactsSelectors";
import styles from "./ContactListItem.module.css";


function ContactListItem({ name, number, onRemove }) {
  return (
    <li className={styles.listItem}>
      <div className={styles.nameLine}>
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      <button className={styles.listItemBtn} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

const mapState = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    ...contact
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id))
});

export default connect(mapState, mapDispatchToProps)(ContactListItem);
