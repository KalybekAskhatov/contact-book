import "./App.css";
import React, { useState } from "react";
import AddContacts from "./Components/AddContacts/AddContacts";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newArray = [...contacts];
    newArray.push(newContact);
    setContacts(newArray);
  }
  // console.log(contacts);
  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }
  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactsArray);
    setIsEdit(false);
  }
  return (
    <div>
      <AddContacts handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContact
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}

      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;
