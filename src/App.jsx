import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Import Components
import Preloader from './components/preloader/Preloader';
import Home from './components/preloader/Home'; // Ensure this path is correct
import SignIn from './components/Signin/SignIn'; // Ensure this path is correct

function App() {
  // State to track loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching user data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Cleanup timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;