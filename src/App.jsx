import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Features from './components/Features'
import Register from './pages/Register'
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <Features/>
        <Footer />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar/>
        <Contact/>
        <Footer/>
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Login/>
      </>
    ),
  },
  
  {
    path: '/register', // Register route without Navbar and Footer
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}



export default App