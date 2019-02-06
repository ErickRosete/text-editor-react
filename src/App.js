import React, { Component } from 'react';
import TextEditor from './Containers/TextEditor/TextEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextEditor></TextEditor>
      </div>
    );
  }
}

export default App;
