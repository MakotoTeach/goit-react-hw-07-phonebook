import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacs/contactsActions";
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

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

