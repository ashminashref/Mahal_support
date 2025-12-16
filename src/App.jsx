import { useEffect, useState } from 'react'
import './App.css'
import Preloader from './components/preloader/Preloader';
import { Route, Routes } from 'react-router-dom';
import Home from './components/preloader/Home';
import SignIn from './components/Signin/SignIn';

function App() {
  // state to track if the app is loading
  const [isLoading, setIsLoading] = useState(true)

  // a loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500);

    // cleans the timer if the components unmount
    return () => clearTimeout(timer)
  })
  return (
    <>
   {/* conditional rendering of preloader */}

   {isLoading? (
    <Preloader/>
   ):(
    <div className='App'>
      {/* main contents */}
      <Routes>
        <Route path = '' element = {<SignIn/>}/>
        <Route path = '/home' element = {<Home/>}/>
      </Routes>
    </div>
   )}
    </>
  )
}

export default App