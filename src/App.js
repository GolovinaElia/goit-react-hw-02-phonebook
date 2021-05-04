import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import contactArr from './contacts.json';

class App extends Component {
  state = {
    contacts: contactArr,
    filter: ''
  };

  addContacts = data => {
    // const { name } = data;
    const { contacts } = this.state;

    this.setState(prevState => ({
contacts: [...prevState.contacts, data]
     }))
  };
 
  render() {
    return (
      <>
        <ContactForm onSubmit={this.addContacts} />
        <Filter />
        <ContactList contacts={this.state.contacts}/>
    </>
    );
  }
}

export default App;
