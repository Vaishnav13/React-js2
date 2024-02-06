import React, { Components } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Message from './Components/Message'
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
    </div>
  );
}

export default App;
