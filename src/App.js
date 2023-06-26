import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Routes, Route } from "react-router-dom";
// import { NotFound, MyComponent } from "./Components/spaceBar/Error";
import Header from "./Header/Header";
import Click from "./Components/click";
import Scroll from "./Components/scroll";
import SpaceBar from "./Components/spaceBar";
import Typing from "./Components/typing";
import Privacy from "./Components/privacy";
import About from "./Components/about";
import Terms from "./Components/terms";
import Jitter from "./Components/jitter";
import Kohi from "./Components/kohi";
import Contact from "./Components/contact";
import { Footer } from "./Footer/Footer";
import { AuthProvider } from "./Hooks/rootContext/rootContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="AppMain">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/*" element={<Click />} />
          <Route path="/Click" element={<Click />} />
          <Route path="/Click/:id" element={<Click />} />
          <Route path="/Scroll" element={<Scroll />} />
          <Route path="/Spacebar" element={<SpaceBar />} />
          <Route path="/Spacebar/:id" element={<SpaceBar />} />
          <Route path="/Typing" element={<Typing />} />
          <Route path="/Typing/:id" element={<Typing />} />
          <Route path="/Jitter" element={<Jitter />} />
          <Route path="/Jitter/:id" element={<Jitter />} />
          <Route path="/Kohi" element={<Kohi />} />
          <Route path="/Kohi/:id" element={<Kohi />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
