import React, { Component } from 'react';
// import { v4 } from 'uuid';
// import shortid from 'shortid';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  formSubmitHandler = data => {
    this.addContacts(data);
    console.log(this.state.contacts);
  };

  addContacts = data => {
    this.state.contacts.push(data);
//   const contact = [{
//       id: shortid.generate(),
//       name: name
//     }];

//     this.setState(prevState => ({
// contacts: [contact, ...prevState.contacts]
//      }))
  };
 
  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler}
      />
        <Contacts contacts={this.state.contacts}/>
    </>
    );
  }
}

export default App;
