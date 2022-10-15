import React, { useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';




function App() {
  const [contacts, setContacts] = useState([]);
const addContactHandler=( contacts) =>{
  console.log(contacts);
}




  return (
    <div className='container'>


      <Header></Header>
      <AddContact addContactHandler={addContactHandler}></AddContact>
      < ContactList contacts={contacts}></ContactList>
    
      
    </div>
  );
}

export default App;
