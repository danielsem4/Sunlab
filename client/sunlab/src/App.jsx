import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import ContactUs from "./Components/Contact";
import Footer from "./Components/Footer";
import LanguageProvider from "./providers/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <ContactUs />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
