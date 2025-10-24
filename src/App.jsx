import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import UserProfile from "./pages/userProfile";
import MainPage from './pages/mainPage';

function App() {
  
  return (<>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
 
      {/*<Route path="/user" element={<UserProfile />} /> */}
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  </>)
}

export default App