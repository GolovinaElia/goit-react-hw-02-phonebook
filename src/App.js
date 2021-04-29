import React, { Component } from 'react';
import Phonebook from './components/Phonebook/Phonebook';

class App extends Component {
  state = {
  contacts: [],
    name: '',
  value: 'jjjj'
}

  handleInputChange = event => {
    console.log(event);
  };

  render() {
    

    return (
      <Phonebook>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
      </Phonebook>
    
    );
  }
}

export default App;
