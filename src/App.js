import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Enterance from "./Components/Enterance";
import BasicTable from "./Components/Tablee"
import BuyAndSellText from "./Components/BuyAndSellText"
import { ThemeProvider } from "styled-components";
import OurFeatures from "./Components/OurFeatures";
import Lock from "./Components/Lock";
import Banks from "./Components/Banks";
import OurBlog from "./Components/OurBlog";
import Footer from "./Components/Footer";
import styled from "styled-components";
import Shield from "./Components/Shield";
import Registerpage from "./Pages/Register/Registerpage";
import Loginpage from "./Pages/Login/Loginpage";

const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};

const Container = styled.div`
  max-width:1920px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    <Enterance />
    <OurFeatures />
    <Shield />
    <Lock />
    <Footer />
    {/* <Loginpage /> */}
  </ThemeProvider>
    
  );
}

export default App;
