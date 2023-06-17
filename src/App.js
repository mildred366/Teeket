import './styles/main.css'
import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EventListings from './pages/EventListingPage';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Attendees from './pages/Attendees';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App () {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
          <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/eventlistings' element={<EventListings />} />
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/attendees' element={<Attendees />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
