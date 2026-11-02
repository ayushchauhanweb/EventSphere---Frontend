import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFoundPage from "./page/NotFoundPage";
import { House } from "lucide-react";
import Home from "./page/HomePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-[#E65100]">
      <Navbar />
      <div className="flex-1">
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
