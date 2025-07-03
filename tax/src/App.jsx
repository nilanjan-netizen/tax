
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Step3 from './components/step3';
import Step4 from './components/Step4';
const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </Router>
  );
};

export default App;
