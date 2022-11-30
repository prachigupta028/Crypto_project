import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{backgroundColor:"rgb(6,17,33)",color:"white"}}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
