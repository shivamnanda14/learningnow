import Hero from "../components/Hero";
import LearningNowPhilosophy from "../components/LearningNowPhilosophy";
import Stats from "../components/Stats";
import LearningPaths from "../components/LearningPaths";
import FeaturedPodcast from "../components/FeaturedPodcast";
import AboutLearningNow from "../components/AboutLearningNow";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LearningNowPhilosophy />
      <Stats />
      <LearningPaths />
      <FeaturedPodcast />
      <AboutLearningNow />
     
    </>
  );
}