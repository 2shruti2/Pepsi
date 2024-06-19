import Footer from "./ui/components/Footer";
import Navbar from "./ui/components/Navbar";
import Hero from "./ui/sections/Hero";
import OurProducts from "./ui/sections/OurProducts";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <OurProducts/>
      <Footer/>
    </div>
  );
}

export default App;
