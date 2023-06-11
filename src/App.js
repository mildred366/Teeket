import './styles/main.css'
import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EventListings from './pages/EventListingPage';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

function App () {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/eventlistings' element={<EventListings />} />
              <Route path='/landingpage' element={<LandingPage />} />
              <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
