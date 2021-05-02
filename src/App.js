import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: []
  };

  // formSubmitHandler = data => {
  //   this.addContacts(data);
  //   console.log(this.state.contacts);
  // };

  addContacts = (name, number) => {
    // this.state.contacts.push(data);
  const contact = {
    id: uuidv4(),
    name,
    number
    };

//     this.setState(prevState => ({
// contacts: [contact, ...prevState.contacts]
//      }))
  };
 
  render() {
    return (
      <>
        <Form onSubmit={this.addContacts}/>
        <Contacts />
    </>
    );
  }
}

export default App;
