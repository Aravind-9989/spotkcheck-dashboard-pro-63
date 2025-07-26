import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import HomePage from "./pages/HomePage";
import ClinicStatus from "./pages/ClinicStatus";
import ClinicianStatus from "./pages/ClinicianStatus";
import PatientStatus from "./pages/PatientStatus";
import CouponCodes from "./pages/CouponCodes";
import Revenue from "./pages/Revenue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clinic-status" element={<ClinicStatus />} />
            <Route path="/clinician-status" element={<ClinicianStatus />} />
            <Route path="/patient-status" element={<PatientStatus />} />
            <Route path="/coupon-codes" element={<CouponCodes />} />
            <Route path="/revenue" element={<Revenue />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AdminLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
