import React, { Component } from 'react';
import Phonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacs/Contacs';

class App extends Component {
  state = {
  contacts: [],
    name: ''
}

  handleNameChange = event => {
  this.setState({name: event.currentTarget.value})
  };

  render() {
    

    return (
      <>
        <Phonebook
          value={this.state.name}
          onChange={this.handleNameChange}
      />

      <Contacts />
    </>
    );
  }
}

export default App;
