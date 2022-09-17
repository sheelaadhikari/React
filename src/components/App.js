import React from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';

 


function App() {
const contacts =[
  {
    id: "1",
    name: "Dipesh",
    email: "malvia@gmail.com",
  },
  {
    id: "2",
    name: "Nikesh",
    email: "nicks@gmail.com",
  },
];

  return (
    <div className='container'>
      <Header></Header>
      <AddContact></AddContact>
      < ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
