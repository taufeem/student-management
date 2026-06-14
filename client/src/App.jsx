import React from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
// import Popup from "./popup.jsx";
import Update from "./Update.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/popup" element={<Popup />} /> */}
        <Route path='/update' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
                                                  
export default App;
