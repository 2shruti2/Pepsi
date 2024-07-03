import Glance from "../components/our-products/Glance"
import ModelView from "./ModelView" 

const About = () => {
  return (
    <div className="relative">
    <ModelView />
    <div className="max-sm:hidden background absolute top-[61%] w-full bg-secondary h-64 overflow-hidden">
      <Glance />
    </div>
    <p className="max-sm:hidden w-full text-center fade-move-up text-3xl font-extrabold uppercase text-white italic absolute top-[61%] z-[100]">
      ^ Cheers ^
    </p>
  </div>
  )
}

export default About