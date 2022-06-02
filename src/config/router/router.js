import React from "react";
import Dashboard from './../../pages.js/dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
        <Routes>
          <Route path="/*" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}