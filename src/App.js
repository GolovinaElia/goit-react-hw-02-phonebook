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
    const { name } = data;
    const { contacts } = this.state;
    const inputName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    
    if (inputName) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data]
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };


 
  render() {
    const visibleContacts = this.getVisibleContact();
    return (
      <>
        <ContactForm onSubmit={this.addContacts} />
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts}/>
    </>
    );
  }
}

export default App;
