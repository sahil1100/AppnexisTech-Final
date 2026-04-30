import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
