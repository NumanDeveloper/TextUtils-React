import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  // TODO: give most control to App.js
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); // alert is an object here

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light' || mode === 'green' || mode === 'pink') {
      setMode('dark');
      document.body.style.backgroundColor = '#070a26';
      showAlert("Dark mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }

  const toggleGreenMode = () => {
    if (mode !== 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#90EE90';
      showAlert("Green mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }

  const togglePinkMode = () => {
    if (mode !== 'pink') {
      setMode('pink');
      document.body.style.backgroundColor = '#FF1493';
      showAlert("Pink mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }

  const toggleGoldMode = () => {
    if (mode !== 'gold') {
      setMode('gold');
      document.body.style.backgroundColor = '#FFD700';
      showAlert("Gold mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }

  const toggleCoffeeMode = () => {
    if (mode !== 'coffee') {
      setMode('coffee');
      document.body.style.backgroundColor = '#6f4e37';
      showAlert("Coffee mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} togglePinkMode={togglePinkMode} toggleGoldMode={toggleGoldMode} toggleCoffeeMode={toggleCoffeeMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter your text below to analyse" mode={mode} />
      {/* <About /> */}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

// if we don't send props, default props will be used
Navbar.defaultProps = {
  title: "Set title",
  about: "About"
}


export default App;
