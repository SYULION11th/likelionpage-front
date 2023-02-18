import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './components/Main/Main';
import Question from './components/Question/Question';
import Page1 from './components/Question/Page1';
import Page2 from './components/Question/Page2';
import Page3 from './components/Question/Page3';
import Page4 from './components/Question/Page4';
import Page5 from './components/Question/Page5';
import Submit from './components/Submit/Submit';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import SignUp from './components/SignUp/SignUp';
import SubmitComplete from './components/Submit/SubmitComplete';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
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
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
          
        </Routes>
      </div>
      <ScrollTop/>
      <Footer />
    </Router>

    );
}
export default App;
