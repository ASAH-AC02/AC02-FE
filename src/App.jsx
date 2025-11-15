import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import Dashboard from './pages/Dashboard'
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details" element={<DetailPage />} />
    </Routes>
  )
}

export default App
