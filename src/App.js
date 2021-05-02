import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  // formSubmitHandler = data => {
  //   this.addContacts(data);
  //   console.log(this.state.contacts);
  // };

  addContacts = () => {
    // this.state.contacts.push(data);
  const contacts = {
    id: uuidv4(),
    name: this.state.name,
    number: this.state.number
    };

//     this.setState(prevState => ({
// contacts: [contact, ...prevState.contacts]
//      }))
  };
 
  render() {
    return (
      <>
        <Form onSubmit={this.addContacts}
      />
        <Contacts contacts={this.contacts}/>
    </>
    );
  }
}

export default App;
