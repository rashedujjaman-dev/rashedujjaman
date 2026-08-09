import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";




export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkExperience />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
      
    </div>
  );
}
