import Navbar from "./ui/components/Navbar";
import BestMissions from "./ui/sections/BestMissions";
import Hero from "./ui/sections/Hero";
import Highlights from "./ui/sections/Highlights";
import LatestNews from "./ui/sections/LatestNews";
import Locations from "./ui/sections/Locations";
import Portals from "./ui/sections/Portals";
import RecentUpdates from "./ui/sections/RecentUpdates";

function App() {
  return (
    <div className="page-wrapper">
      <div>hi</div>
      <Navbar />
      <Hero />
      <BestMissions/>
      <LatestNews />
      <Highlights />
      <Portals />
      <RecentUpdates />
      <Locations />
    </div>
  );
}

export default App;
