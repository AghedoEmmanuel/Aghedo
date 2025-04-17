import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { WorkPlaceSection } from "@/sections/WorkPlace";

export default function Home() {
  return (
    <div>
      <h1>
        <Header/>
        <HeroSection/>
        <ProjectsSection/>
        <TapeSection/>
        <AboutSection/>
        <WorkPlaceSection/>
        <ContactSection/>
        <Footer/>
      </h1>
    </div>
  );
}
