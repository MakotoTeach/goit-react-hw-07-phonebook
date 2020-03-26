import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "./Layout/Layout";
import ContactList from "./ContactList/ContactList";
import AddContactForm from "./AddContactForm/AddContactForm";
import Filter from "./Filter/Filter";
import Spinner from "../components/Spinner";
import ThemeContext from "../context/ThemeContext";
import contactsOperations from "../redux/contacs/contactsOperations";
import contactsSelectors from "../redux/contacs/contactsSelectors";

class App extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <ThemeContext>
        <Layout>
          {this.props.isLoadingContacts ? (
            <Spinner />
          ) : (
            <>
              <AddContactForm />
              <Filter />
              <ContactList />
            </>
          )}
        </Layout>
      </ThemeContext>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state)
});

const mapDispatchToProps = {
  onGetContacts: contactsOperations.getContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
