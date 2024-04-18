import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Homedetails from './Pages/Homedetails'
import Addproduct from './Pages/Addproduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login'
import { Navigate } from 'react-router-dom'
import Product from './Pages/Product'
import Edit from '../src/Pages/Edit'
import Register from './Pages/Register'
import Forget from './Pages/Forget'
import Dashboard from './Pages/Dashboard'
import Updatepassword from './Pages/Updatepassword'

const App = () => {

  // Create Function for private routing
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  const private_routing = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/homedetails/:id',
      component: <Homedetails />
    },
    {
      path: '/addproduct',
      component: <Addproduct />
    },
    {
      path:'/product',
      component:<Product/>
    },
    {
      path:'/edit/:id',
      component: <Edit/>
    },
    {
      path:'/dashboard',
      component: <Dashboard/>
    },
    {
      path:'/updatepassword',
      component:<Updatepassword/>
    }
  ]

  const public_routing = [
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/register',
      component: <Register/>
    },
    {
      path:'/forget',
      component:<Forget/>
    }
  ]

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {
            private_routing?.map((routing) => {
              return (
                <>
                  <Route path={routing?.path} element={<PrivateRoute>{routing?.component}</PrivateRoute>} />
                </>
              )
            })
          }

          {
            public_routing?.map((routing) => {
              return (
                <>
                  <Route path={routing.path} element={routing?.component} />
                </>
              )
            })
          }
        </Routes>
      </Router>
    </>
  )
}

export default App
