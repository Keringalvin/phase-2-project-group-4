
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Introduction from './components/Introduction';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Introduction />} />
      <Route path="/home" element={<Home />} />
      <Route path='/form' element={<Form/>} />
    </Routes>
    </>
  );
}

export default App;
