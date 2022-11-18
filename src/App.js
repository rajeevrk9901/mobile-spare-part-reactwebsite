import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './component/About';
import Header from './component/Header';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Homepage from './component/Homepage';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        {/* <Homepage /> */}

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route exact path="/about" id='about' element={<About />} />
          <Route exact path="/contactus" element={<Contact />} />
          {/* <About /> */}
          {/* <Contact /> */}

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
