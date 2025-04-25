import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Communications from "./pages/Communications";
import NotFound from "./pages/NotFound";
import OfflineShopping from "./pages/OfflineShopping";
import OnlineShopping from "./pages/OnlineShopping";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import PresidentDashboard from "./pages/PresidentDashboard";
import ShopDashboard from "./pages/ShopDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/offline-shopping" element={<OfflineShopping />} />
          <Route path="/online-shopping" element={<OnlineShopping />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/president-dashboard" element={<PresidentDashboard />} />
          <Route path="/shop-dashboard" element={<ShopDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
