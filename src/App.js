import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
