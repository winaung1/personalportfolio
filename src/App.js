import "./App.css";

// import Footer from "./components/Footer";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import Rights from "./components/Rights";

function App() {
  return (
    <div className="App bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
          <Footer />
          <Rights/>
          {/* <Footer/> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
