// import Footer from "./ui/components/Footer";
// import Navbar from "./ui/components/Navbar";
import { useEffect, useState } from "react";
import Hero from "./ui/sections/Hero";
import ModelView from "./ui/sections/ModelView";
import OurProducts from "./ui/sections/OurProducts";
import AnimatedLoadaer from "./ui/components/Hero/AnimatedLoadaer";
import Navbar from "./ui/components/Navbar";
import Glance from "./ui/components/our-products/Glance";
import Footer from "./ui/components/Footer";

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
            image1={"assets/HeroSection/lady2.jpg"}
            image2={"assets/HeroSection/canp.jpg"}
            image3={"assets/HeroSection/lady.jpg"}
          />
          <div className="relative">
            <ModelView />
        
            <div className="max-sm:hidden absolute top-[61%] w-full bg-slate-900 h-64 overflow-hidden">
              <Glance />
            </div>
            <p className="max-sm:hidden w-full text-center fade-move-up text-xl font-extrabold uppercase text-primary italic absolute top-[61%] z-[100]">
              ^ Cheers ^
            </p>
          </div>
          
          <OurProducts />
          <Footer/>
        </main>
      )}
    </div>
  );
}

export default App;
