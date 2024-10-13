import React, { useState, useEffect }from 'react'; //import React library
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Stories } from './components/Stories';

function App() {
  return (
    <div className="App">
      <h1>DubHacks App</h1>
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
