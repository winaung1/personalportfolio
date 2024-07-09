import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import Rights from "./components/Rights";
import AOS from "aos";
import "aos/dist/aos.css";
import MousePointer from "./components/MousePointer";
import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import TermsOfServices from "./components/TermsOfServices";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // ReactGA.initialize("UA-XXXXXXXXX-X");
  // ReactGA.pageview(window.location.pathname + window.location.search);


  // const location = useLocation();

  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);


  // Initialize AOS
  AOS.init();

  return (
    <div onMouseMove={handleMouseMove} className="App bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto">
        <BrowserRouter>
          {/* Render Navbar and Routes */}
          <Navbar />
          <Routes>
            <Route
              path={"/"}
              element={<Home setDisplayText={setDisplayText} />}
            />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/terms-of-service"} element={<TermsOfServices />} />
            <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
          </Routes>
          {/* Render Footer and Rights components */}
          <Footer />
          <Rights />
          {/* Render MousePointer component */}
          <MousePointer displayText={displayText} position={position} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
