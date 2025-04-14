
import { useEffect, useRef } from "react";

export const useAnimateOnScroll = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const slideElements = document.querySelectorAll('.slide-animate');
    
    const options = { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Starts animation slightly before element enters viewport
    };
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a slight delay for staggered animations
          const delay = (Array.from(entry.target.parentNode?.children || []).indexOf(entry.target) % 5) * 100;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);
    
    animateElements.forEach((element) => {
      observerRef.current?.observe(element);
    });
    
    slideElements.forEach((element) => {
      observerRef.current?.observe(element);
    });
    
    return () => {
      if (observerRef.current) {
        animateElements.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
        
        slideElements.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
      }
    };
  }, []);
  
  return observerRef;
};
