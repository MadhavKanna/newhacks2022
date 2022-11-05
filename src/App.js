import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
