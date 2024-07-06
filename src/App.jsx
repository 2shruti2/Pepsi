import { useEffect, useState } from "react";
import Hero from "./ui/sections/Hero";
import AnimatedLoadaer from "./ui/components/Hero/AnimatedLoadaer";
import Navbar from "./ui/components/Navbar";
import OurCollaborations from "./ui/sections/OurCollaborations";
import Footer from "./ui/components/Footer";
import About from "./ui/sections/About";
import Discover from "./ui/sections/Discover";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && (
        <AnimatedLoadaer
          setLoading={setLoading}
          imageRevel={"assets/HeroSection/animatedLogo.png"}
        />
      )}
      {!loading && (
        <main>
          {/* Your main website content */}
          <Navbar logo={"assets/HeroSection/Pepsi-Logo.png"}/>
          <Hero
            image1={"assets/HeroSection/lady2.webp"}
            image2={"assets/HeroSection/canp.webp"}
            image3={"assets/HeroSection/lady.webp"}
          />
          <About/>
          <OurCollaborations/>
          <Discover/>
          <Footer/>
        </main>
      )}
    </div>
  );
}

export default App;
