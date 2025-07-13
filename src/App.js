import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Work from './Components/Work/Work';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext, useEffect } from "react";
import { themeContext } from "./Context.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import JiomatrimonyVideoPage from './Components/jiomatrimony.jsx'; // ✅ Add this file
import Certifications from './Components/Certificates/certificates.jsx';
import CareerJourney from './Components/Journey/journey.jsx';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode,"darkMode")

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
       

        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
             <Intro />
    <Services />
    <Portfolio />
    <Certifications />
    <Experience />
    <CareerJourney/>
    <Work />
    <Testimonials />
    <Contact />
    <Footer />
            </>
          } />
          
          <Route path="/jiomatrimony" element={<JiomatrimonyVideoPage/>} /> {/* ✅ New Route */}

        </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
