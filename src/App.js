import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  // TODO: give most control to App.js
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#070a26';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter your text below to analyse" mode={mode}/>
      {/* <About/> */}
    </>
  );
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  about : PropTypes.string.isRequired
}

// if we don't send props, default props will be used
Navbar.defaultProps = {
  title : "Set title",
  about : "About"
}


export default App;
