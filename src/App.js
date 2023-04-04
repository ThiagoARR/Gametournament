import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index'
import MyBuild from './pages/MyBuilds/index'
import Rift from './pages/Rifts/index'
import Login from "./pages/Login";
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />}/>
            <Route path="/Build" element={<MyBuild />}/>
            <Route path="/Rift" element={<Rift />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
