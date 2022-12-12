import React, { useState } from "react";
import "./AddContacts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContacts = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  //   console.log(name, lastName, photo);
  // console.log(props);
  function handleClick() {
    if (!name || !lastName || !photo) {
      toast.warn("🦄 Заполните все поля", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("")
    setLastName("")
    setPhoto("")
    // console.log(newContact);
  }

  return (
    <div className="add-block">
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
      <button onClick={handleClick}>Add new contact</button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AddContacts;
