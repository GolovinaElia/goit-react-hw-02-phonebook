import React, { Component } from 'react';
import Phonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacs/Contacs';

class App extends Component {
  state = {
  contacts: [],
    name: ''
}

  handleInputChange = event => {
    console.log(event);
  };

  render() {
    

    return (
      <>
      <Phonebook
      />

      <Contacts />
    </>
    );
  }
}

export default App;
