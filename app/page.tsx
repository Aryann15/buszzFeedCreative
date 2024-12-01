import { Header } from "./components/Header";
import Hero from "./components/Hero";
import ServiceCards from "./components/ServiceCards";
import AnimationOverlay from "./components/AnimationOverlay";
import LatestWork from "./components/LatestWork";
import LearningSection from "./components/LearningSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* <AnimationOverlay /> */}
        <ServiceCards />
        <LatestWork />
        <LearningSection />
      </main>
      <Footer />
    </div>
  );
}
