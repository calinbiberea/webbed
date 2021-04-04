import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";

const App: React.FC = () => (
  <div className="App">
    <Header />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
