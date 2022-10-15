import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';




function App() {
  const [contacts, setContacts] = useState([]);
const addContactHandler=( contact) =>{
  console.log(contact);
setContacts([...contacts, contact]);

};




  return (
    <div className='container'>


      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      < ContactList contacts={contacts}></ContactList>
    
      
    </div>
  );
}

export default App;
