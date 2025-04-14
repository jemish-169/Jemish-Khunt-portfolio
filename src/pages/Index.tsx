
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MinorProjects from "@/components/MinorProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/hooks/use-animation";

const Index = () => {
  const animationObserver = useAnimateOnScroll();
  
  useEffect(() => {
    document.title = "Jemish Khunt - Android Developer";
    
    // Initialize animation observer
    const elements = document.querySelectorAll('.animate-on-scroll, .slide-animate');
    elements.forEach(el => {
      animationObserver.current?.observe(el);
    });

    // Re-observe elements when visibility changes (e.g., after "Show More" is clicked)
    const handleVisibilityChange = () => {
      const newElements = document.querySelectorAll('.animate-on-scroll:not(.visible), .slide-animate:not(.visible)');
      newElements.forEach(el => {
        animationObserver.current?.observe(el);
      });
    };

    // Add event listeners to buttons that might reveal new content
    const showMoreButtons = document.querySelectorAll('button[class*="border-android-green"]');
    showMoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Allow time for DOM to update
        setTimeout(handleVisibilityChange, 100);
      });
    });

    return () => {
      // Cleanup event listeners
      showMoreButtons.forEach(button => {
        button.removeEventListener('click', handleVisibilityChange);
      });
    };
  }, [animationObserver]);

  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MinorProjects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
