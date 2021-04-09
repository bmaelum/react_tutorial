import React from 'react';

import Header from "./Header.js";
import Item from "./item.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
  
    <ol>
      <Item done={false} text={"First Todo"} /> 
    </ol>


    </div>
  );
}

export default App;
