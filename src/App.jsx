import './App.css'
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Personal from './pages/Personal'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  AOS.init({});
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const loadingTimer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   // Clean up the timer to avoid memory leaks
  //   return () => clearTimeout(loadingTimer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="grid place-items-center">
  //       <div className="first-letter:loading-ui">
  //         <div className="ui-abstergo ">
  //           <div className="abstergo-loader">
  //             <div></div>
  //             <div></div>
  //             <div></div>
  //           </div>
  //           <div className="ui-text">
  //             Homer Salazar
  //             <div className="ui-dot"></div>
  //             <div className="ui-dot"></div>
  //             <div className="ui-dot"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Home />
      <Skills />
      <About />
      <Projects />
      <Personal />
      <Contact />
      <Footer />
    </>
  )
}

export default App
