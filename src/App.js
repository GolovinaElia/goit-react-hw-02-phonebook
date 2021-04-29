import React, { Component } from 'react';
import Phonebook from './components/Phonebook/Phonebook';

class App extends Component {
  state = {
  contacts: [],
  name: ''
}

//   handleIncrement = event => {
//     const name = event.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

  render() {
    

    return (
      <Phonebook />
    
    );
  }
}

export default App;
