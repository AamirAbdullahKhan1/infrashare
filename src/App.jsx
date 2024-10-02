import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Features from './components/Features'
import Register from './pages/Register'
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import Login from './pages/Login';
import IndiaMap from './components/IndiaMap';
import Equipment from './components/Equipment';
import About from './pages/About';
import AboutWithout from './pages/AboutWithout';
import UserProfile from './pages/UserProfile';
import AdminPanel from './pages/AdminPanel';
import Duplicate from './pages/Duplicate';
import Research from './pages/Research'
import Incubation from './pages/Incubation'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
        <IndiaMap/>
        <Features/>
        <AboutWithout/>
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
    path: '/equipment',
    element: (
      <>
        <Navbar/>
        <Equipment/>
        <Footer/>
      </>
    ),
  },

  {
    path: '/research',
    element: (
      <>
        <Navbar/>
        <Research/>
        <Footer/>
      </>
    ),
  },

  {
    path: '/incubation',
    element: (
      <>
        <Navbar/>
        <Incubation/>
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
    path: '/about',
    element: (
      <>
        <Navbar/>
        <Duplicate/>
        <Footer/>
      </>
    ),
  },
  {
    path: '/userprofile',
    element: (
      <>
        <Navbar/>
        <UserProfile/>
        <Footer/>
      </>
    ),
  },
  {
    path: '/adminpanel',
    element: (
      <>
        <Navbar/>
        <AdminPanel/>
        <Footer/>
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