import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
// import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

/*
  FIXME:
  * Add a button to generate a random paragraph
*/
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
    if (mode === 'light' /*|| mode === 'green' || mode === 'pink'*/) {
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

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />
      {/* <About /> */}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

// if we don't send props, default props will be sent
Navbar.defaultProps = {
  title: "Set title",
  about: "About"
}


export default App;
