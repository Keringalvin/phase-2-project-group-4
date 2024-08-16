import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import Form from './components/Form';
import Introduction from './components/Introduction';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade"
        >
          <div className="route-container">
            <Routes location={location}>
              <Route path='/' element={<Introduction />} />
              <Route path='/home' element={<Home />} />
              <Route path='/form' element={<Form />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
