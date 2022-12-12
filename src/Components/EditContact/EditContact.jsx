import React, {useState} from "react";
import "./EditContact.css";

const EditContact = (props) => {
  const [name, setName] = useState(props.editContact.name);
  const [lastName, setLastName] = useState(props.editContact.lastName);
  const [photo, setPhoto] = useState(props.editContact.photo);
  console.log(name);

  function handleSaveContact(){
    let contact = {...props.editContact}
    console.log(contact)
    contact.name = name
    contact.lastName = lastName
    contact.photo = photo

    props.handleSaveEditedContact(contact)
    setName("")
    setLastName("")
    setPhoto("")
  }
  return (
      <div>
        <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        type="text"
        placeholder="LastName"
      />
      <input
        onChange={(e) => setPhoto(e.target.value)}
        value={photo}
        type="text"
        placeholder="Photo"
      />
      <button onClick={handleSaveContact}>save</button>
  </div>);
};

export default EditContact;
