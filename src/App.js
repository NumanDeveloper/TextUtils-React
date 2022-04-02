import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <TextForm heading="Enter your text below to analyse"/>
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
