
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import all our new pages
import Lights from "./pages/Lights";
import Climate from "./pages/Climate";
import Security from "./pages/Security";
import Energy from "./pages/Energy";
import Scenes from "./pages/Scenes";
import Assistant from "./pages/Assistant";
import Guests from "./pages/Guests";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";

// Import the new creative pages
import Automation from "./pages/Automation";
import Ecosystem from "./pages/Ecosystem";
import Analytics from "./pages/Analytics";
import Network from "./pages/Network"; 
import Spatial from "./pages/Spatial";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/lights" element={<Lights />} />
          <Route path="/climate" element={<Climate />} />
          <Route path="/security" element={<Security />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/scenes" element={<Scenes />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* New creative page routes */}
          <Route path="/automation" element={<Automation />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/network" element={<Network />} />
          <Route path="/spatial" element={<Spatial />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
