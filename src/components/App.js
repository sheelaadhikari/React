import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';




function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);

  };
  useEffect(() => {
   const retriveContacts= JSON.parse (localStorage.getItem(LOCAL_STORAGE_KEY));
   if( retriveContacts)setContacts(retriveContacts);
  }, [contacts]);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
   }, [contacts]);


  return (
    <div className='container'>


      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      < ContactList contacts={contacts}></ContactList>


    </div>
  );
}

export default App;
