import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';


const LOCAL_STORAGE_KEY = "contacts";


function App() {
  const [contacts, setContacts] = useState([]);






  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);

  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });


    setContacts(newContactList);

  };



  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retriveContacts);
    if (retriveContacts) setContacts([...retriveContacts]);
  }, []);

  console.log(contacts, 'from outslde')


  useEffect(() => {
    console.log(contacts, 'from second one')
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);





  return (
    <div className='container'>


      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      < ContactList contacts={contacts} getContactId={removeContactHandler} ></ContactList>


    </div>
  );
}

export default App;
