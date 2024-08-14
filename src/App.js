
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path='/form' element={<Form/>} />
    </Routes>
    </>
  );
}

export default App;
