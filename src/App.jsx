import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

function App() {
  
  return (<>
    <Routes>
      <Route path="/" element={<h1>test</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </>)
}

export default App
