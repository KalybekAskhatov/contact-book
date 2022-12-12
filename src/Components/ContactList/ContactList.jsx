import React from "react";
import "./ContactList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactList = (props) => {
  // console.log(props);
  function handleBtnDelete(id) {
    props.handleDeleteContact(id);
    toast.success("🦄 Вы успешно удалили контакт", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastName}</li>
          <li>
            <img width={250} src={item.photo} alt={item.name} />
          </li>
          <li>
            <button onClick={() => handleBtnDelete(item.id)}>Delete</button>
            <button
              onClick={() => props.handleEditIndex(index)}
            >Edit</button>
          </li>
        </ul>
      ))}
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

export default ContactList;
