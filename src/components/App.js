import React, { useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';




function App() {
  const [contacts, setContacts] = useState([]);

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <div className='container'>


      <Header></Header>
      <AddContact></AddContact>
      < ContactList contacts={contacts}></ContactList>
      <h1>{counter}</h1>
      <button onClick={increase} >increase</button>
    </div>
  );
}

export default App;
