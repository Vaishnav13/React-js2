import React, { Components } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Message from './Components/Message'
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
      <ClassClick />
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
    </div>
  );
}

export default App;
