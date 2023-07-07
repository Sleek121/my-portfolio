import { useState, useEffect } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
const [isloading, setIsLoading] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setIsLoading(false)
  },2500)
})

  return (
    <div>
    {isloading ? (<Loading />) : 
    ( <div>
      <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </div> )
    }
    </div>
  );
}

export default App;
