import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import Dashboard from './pages/Dashboard'
import DetailPage from './pages/DetailPage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details/:id" element={<DetailPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
