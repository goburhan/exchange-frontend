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
import Enterance from "./Components/Enterance";
import BasicTable from "./Components/Tablee";
import BuyAndSellText from "./Components/BuyAndSellText";
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

const Footer = lazy(() => import("./Components/Footer"));

const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};



export default function App() {
  return  (
  //   <ThemeProvider theme={theme}>
  //   <Navbar />
  //   <Enterance />
  //   <OurFeatures />
  //   <Aboutus />
  //   <Shield />
  //   <Lock />
  //   <Carrer />
  //   <Footer />
  // </ThemeProvider>

  
<Registerpage />

    // <BrowserRouter>
    //   <Routes>
    //     <ThemeProvider theme={theme}>
    //       <Route path="/" >
    //       <Mainpage />
    //       </Route>
    //       <Route path="/register">
    //         <Registerpage />
    //       </Route>
    //       <Route path="/login">
    //         <Loginpage />
    //       </Route>

    //       {/* <Loginpage /> */}
    //     </ThemeProvider>
    //   </Routes>
    // </BrowserRouter>
  );
}

