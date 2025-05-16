
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Dashboard from "./components/dashboard/Dashboard";
import Ecosystem from "./pages/Ecosystem";
import Climate from "./pages/Climate";
import Security from "./pages/Security";
import Energy from "./pages/Energy";
import Lights from "./pages/Lights";
import Scenes from "./pages/Scenes";
import Analytics from "./pages/Analytics";
import Network from "./pages/Network";
import Guests from "./pages/Guests";
import Assistant from "./pages/Assistant";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Automation from "./pages/Automation";
import Spatial from "./pages/Spatial";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Apply saved color scheme on app load
    const savedColorName = localStorage.getItem('accentColor');
    if (savedColorName) {
      // Find the color from the name
      // We need to import this info here for first load
      const accentColors = [
        { name: "Cosmic Teal", color: "#00E5E5", cssVar: "#00E5E5" },
        { name: "Cosmic Purple", color: "#9b87f5", cssVar: "#9b87f5" },
        { name: "Cosmic Pink", color: "#D946EF", cssVar: "#D946EF" },
        { name: "Cosmic Orange", color: "#F97316", cssVar: "#F97316" },
        { name: "Cosmic Blue", color: "#0EA5E9", cssVar: "#0EA5E9" },
        { name: "Cosmic Green", color: "#10B981", cssVar: "#10B981" }
      ];
      
      const savedColor = accentColors.find(color => color.name === savedColorName);
      if (savedColor) {
        document.documentElement.style.setProperty('--accent-color', savedColor.cssVar);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/climate" element={<Climate />} />
        <Route path="/security" element={<Security />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/scenes" element={<Scenes />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/spatial" element={<Spatial />} />
        <Route path="/network" element={<Network />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
