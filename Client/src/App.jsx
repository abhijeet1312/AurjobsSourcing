import React, { useRef } from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import CompanyLogin from './components/CompanyLogin'
import CompanyRegistration from './components/CompanyRegistration'
import CandidateLogin from './components/CandidateLogin'
import CandidateSignUp from './components/CandidateSignUp'

// RouterContent component to handle refs and routing
const RouterContent = ({ pricingRef, contactRef }) => {
  const routeConfig = [
    {
      path: '/',
      element: <Home pricingRef={pricingRef} contactRef={contactRef} />
    },
    {
      path: '/dashboard',
      element: <Register />
    },
    {
      path: '/candidate',
      children: [
        {
          path: 'register',
          element: <CandidateSignUp />
        },
        {
          path: 'login',
          element: <CandidateLogin />
        }
      ]
    },
    {
      path: '/company',
      children: [
        {
          path: 'register',
          element: <CompanyRegistration />
        },
        {
          path: 'login',
          element: <CompanyLogin />
        }
      ]
    },
    {
      path: '/search',
      element: <Search />
    }
  ]

  const routes = useRoutes(routeConfig)
  return routes
}

const App = () => {
  const pricingRef = useRef(null)
  const contactRef = useRef(null)
  
  return (
    <div className="relative min-h-screen">
      <BrowserRouter>
        {/* Navbar with highest z-index */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar pricingRef={pricingRef} contactRef={contactRef} />
        </div>
        
        {/* Main content container with padding for fixed navbar */}
        <div className="relative pt-16">
          <RouterContent pricingRef={pricingRef} contactRef={contactRef} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App