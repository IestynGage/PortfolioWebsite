import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Components/Navigation";
import ContactScreen from "../Screens/Contact/ContactScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import PortfolioScreen from "../Screens/Portfolio/PortfolioScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="portfolio" element={<PortfolioScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
