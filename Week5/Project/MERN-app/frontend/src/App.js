// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { WorkoutsContextProvider } from './context/WorkoutsContext'; // Correct the import path
import { WorkoutDispatchContextProvider } from './context/WorkoutDispatchContext'; // Specify the correct import path

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Wrap Navbar with WorkoutsContextProvider */}
        <WorkoutsContextProvider>
          <Navbar />
        </WorkoutsContextProvider>
        
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
        
        {/* Wrap Routes with WorkoutDispatchContextProvider */}
        <WorkoutDispatchContextProvider>
          {/* Your Routes and components */}
        </WorkoutDispatchContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
