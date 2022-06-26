import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import {
BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Registerpage from "./Pages/Register/Registerpage";
import Loginpage from "./Pages/Login/Loginpage";
import Mainpage from "./Pages/Home/Mainpage";


const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      {/* <Route  path="/login" element={<Loginpage />} ></Route> */}
      {/* <Route   path="/register" element={<Registerpage />} ></Route> */}
    </Routes>
  </ThemeProvider>
  );
}
