import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './components/Main/Main';
import Notice from './components/Notice/Notice';
import Question from './components/Question/Question';
import Submit from './components/Submit/Submit';
import SubmitComplete from './components/Submit/SubmitComplete';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import ScrollTop from "./components/ScrollTop.js"


import './App.css';

function App() {

  return (
    <Router basename='/likelionpage-front/'>
      <div id='load'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/Submit/SubmitComplete" element={<SubmitComplete />} />
          <Route path="/Login" element={<Notice />} />
        </Routes>
      </div>
      <ScrollTop/>
      <Footer />
    </Router>

    );
}
export default App;
