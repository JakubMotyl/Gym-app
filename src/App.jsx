import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home';
import SignUp from './pages/SignUp';

export default function App() {
  const [loadAnimations, setLoadAnimations] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAnimations(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Navbar loadAnimations={loadAnimations} />
      <Routes>
        <Route path='/' element={<Home loadAnimations={loadAnimations} />} />
        <Route path='signin' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
