import logo from "./logo.svg";
import React, { useEffect, Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import OurFeatures from "./Components/OurFeatures";
import Lock from "./Components/Lock";
import Banks from "./Components/Banks";
import OurBlog from "./Components/OurBlog";
import styled from "styled-components";
import Shield from "./Components/Shield";
import Registerpage from "./Pages/Register/Registerpage";
import Loginpage from "./Pages/Login/Loginpage";
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";
import Aboutus from "./Components/Aboutus";
import Carrer from "./Components/Carrer";
import Mainpage from "./Pages/Home/Mainpage";
import Login from "./Pages/Login/Loginpage";

const Footer = lazy(() => import("./Components/Footer"));

const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};

export default function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Routes>
    //     <Route path="/" component={<Mainpage />} />
    //     <Route path="/login" component={<Loginpage />} />
    //     <Route path="/register" component={<Registerpage />} />
    //   </Routes>
    // </ThemeProvider>
    <Registerpage/>
  );
}
