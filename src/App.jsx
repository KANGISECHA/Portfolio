import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import HomePage from './pages/HomePage';
import Form from './components/Form';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<HomePage/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
