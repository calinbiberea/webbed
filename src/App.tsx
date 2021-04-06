import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavigationMenu from "./components/navigation/NavigationMenu";
import Portfolio from "./components/portfolio/Portfolio";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationMenu />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
