import React from 'react';
import './App.css';
import Giftcard from './components/Giftcard';
import data from "./Data/data.json"

function App() {
  return (
    <div className="">
      <Giftcard data={data}/>
    </div>
  );
}

export default App;
