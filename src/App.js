// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import React from "react";
import Signin from "./components/Signin";
import {Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Connection from "./components/Connection";
import Invitation from "./components/Invitation";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/main" element={<Main />} />
        <Route path="//connect" element={<Connection />} />
        <Route path="//invite" element={<Invitation/>} />
      </Routes>
      

    </div>
  )
}
export default App;