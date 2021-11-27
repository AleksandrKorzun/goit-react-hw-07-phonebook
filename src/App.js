
import './App.css';
import React from 'react'
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';


const App = () => {

  
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Phonebook</h1>
        <Phonebook />

        <h2 style={{textAlign: "center"}}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
  );
}

export default App;


