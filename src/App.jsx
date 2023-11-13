import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Connect from './pages/Connect';
import Inscription from './pages/Inscription';
import './App.css'
export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/connect' element={<Connect/>} />
          <Route path='/inscription' element={<Inscription/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

