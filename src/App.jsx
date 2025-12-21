import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Import Components
import Preloader from './components/preloader/Preloader';
import SignIn from './components/Signin/SignIn';
import Home from './components/pages/Home';
import Layout from './components/layout/Layout';
import Payments from './components/pages/Payments';
import Notifications from './components/pages/Notifications';
import Certificates from './components/pages/Certificates';
import Family from './components/pages/Family';
import Profile from './components/pages/Profile';
import Register from './components/Signin/Register';
import ResetPassword from './components/Signin/ResetPassword';
import PayNow from './components/Navigatepages/PaymentModel';
import PaymentModal from './components/Navigatepages/PaymentModel';
import AddFamilyMember from './components/Navigatepages/AddFamilyMember';
import EditPages from './components/Navigatepages/EditPages';

// Import the Layout we designed (Ensure you have created this file from the previous step)


function App() {
  // State to track loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Routes>
       
            {/* The Login page stands alone */}
            <Route path="/" element={<SignIn />} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/payment-method' element={<PaymentModal/>}/>
            <Route path='/AddFamilyMember' element={<AddFamilyMember/>} />
            <Route path='/editpage' element={<EditPages/>}/>
            {/* --- 2. Protected Routes (With Sidebar) --- */}
            {/* We wrap these routes in the Layout component */}
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              {/* Add future pages here, e.g.: */}
              <Route path="/payments" element={<Payments />} />
              <Route path='/notifications' element = {<Notifications/>}/>
              <Route path='/certificates' element = {<Certificates/>}/>
              <Route path='/family' element = {<Family/>}/>
              <Route path='/profile' element = {<Profile/>}/>



            </Route>

          </Routes>
        </div>
      )}
    </>
  );
}

export default App;