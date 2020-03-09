import React from "react";
import Layout from "./Layout/Layout";
import ContactList from "./ContactList/ContactList";
import AddContactForm from "./AddContactForm/AddContactForm";
import Filter from "./Filter/Filter";
import ThemeContext from "../context/ThemeContext";

export default function App() {
  return (
    <ThemeContext>
      <Layout>
        <AddContactForm />
        <Filter />
        <ContactList />
      </Layout>
    </ThemeContext>
  );
}
