import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import NotFoundPage from "./page/NotFoundPage";
import { House } from "lucide-react";
import Home from "./page/HomePage";
import { useEffect } from "react";
import EventDetailsPage from "./page/EventDetailsPage";
import { Toaster, toast } from "sonner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:slug" element={<EventDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      <Toaster
        richColors
        toastOptions={{
          style: {
            borderRadius: "1rem",
            border: "1px solid #EBE8DF",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}

export default App;
