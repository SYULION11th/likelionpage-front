import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Preloader from "../src/components/Pre";
import Main from './components/Main/Main';
import Notice from './components/Notice/Notice';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import ScrollTop from "./components/ScrollTop.js"


import './App.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router basename='/likelionpage-front/'>
      <Preloader load={load} />
      <div id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Question" element={<Notice />} />
          <Route path="/Submit" element={<Notice />} />
          <Route path="/Login" element={<Notice />} />
        </Routes>
      </div>
      <ScrollTop/>
      <Footer />
    </Router>

    );
}
export default App;
