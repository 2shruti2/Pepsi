// import Footer from "./ui/components/Footer";
// import Navbar from "./ui/components/Navbar";
import { useEffect, useState } from "react";
import Hero from "./ui/sections/Hero";
import OurProducts from "./ui/sections/OurProducts";
import AnimatedLoadaer from "./ui/components/Hero/AnimatedLoadaer";
import Navbar from "./ui/components/Navbar";


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
            {loading && <AnimatedLoadaer setLoading={setLoading} imageRevel = {"assets/HeroSection/animatedLogo.png"} />}
            {!loading && (
                <main>
                    {/* Your main website content */}
                    <Navbar/>
                    <Hero image1={"assets/HeroSection/lady2.jpg"} image2={"assets/HeroSection/canp.jpg"} image3={"assets/HeroSection/lady.jpg"} /> 
                    <OurProducts/>
                </main>
            )}
        </div>
    );
  
 
}

export default App;
