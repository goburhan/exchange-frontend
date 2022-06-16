import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Enterance from "./Components/Enterance";
import BasicTable from "./Components/Tablee";
import BuyAndSellText from "./Components/BuyAndSellText";
import { ThemeProvider } from "styled-components";
import OurFeatures from "./Components/OurFeatures";
import Willbelist from "./Components/Willbelist";
import Banks from "./Components/Banks";
import OurBlog from "./Components/OurBlog";
import Footer from "./Components/Footer";

const theme = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "1400px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Enterance />
      <BuyAndSellText />
      <BasicTable />
      <OurFeatures />
      <Willbelist />
      <Banks />
      <OurBlog />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
