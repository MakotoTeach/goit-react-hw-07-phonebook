import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacs/contactsActions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <div>
    <h2 className={styles.title}>Contacts</h2>
    <label className={styles.filterLabel}>
      Find contact by name
      <input
        className={styles.filterInput}
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter
};

Filter.propTypes = {
  value: PropTypes.string.isRequired
  // onChangeFilter: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
