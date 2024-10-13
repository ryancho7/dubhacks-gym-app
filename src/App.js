import React, { useState, useEffect }from 'react'; //import React library
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Stories } from './components/Stories';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stories />
      <Footer />
    </div>
  );
}

export default App;
