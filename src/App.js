import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Sales from './components/Sales'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
}

export default App;
