
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';

import Step1 from './components/Step1';
// import Step2 from './components/firebase-otp-react/src/Step2';
// import Dashboard from "./components/firebase-otp-react/src/Dashboard";
import Step2 from './components/Step2';
import Step2b from './components/Step2b';
import Step3 from './components/step3';
import Step4 from './components/Step4';
import Step5 from './components/step5';
import Step6 from './components/Step6';
import Step6b from './components/Step6b';
import Step7 from './components/Step7';
import Step8 from './components/Step8';
const App = () => {
  return (
    <Router>
      <Routes>
    
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step2b" element={<Step2b />} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4 />} />
         <Route path="/step5" element={<Step5/>} />
        <Route path="/step6b" element={<Step6b />} />
        <Route path="/step7" element={<Step7 />} />
        <Route path="/step8" element={<Step8 />} />
      </Routes>
    </Router>
  );
};

export default App;
