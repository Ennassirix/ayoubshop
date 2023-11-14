import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Connect from './pages/Connect';
import Inscription from './pages/Inscription';
import './App.css'
import Profile from './pages/Profile';
import Cart from './pages/Cart';
export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/connect' element={<Connect/>} />
          <Route path='/inscription' element={<Inscription/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

