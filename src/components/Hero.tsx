
import { ArrowDown } from 'lucide-react';
import { profileData } from '@/data/profileData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-white via-gray-50 to-android-gray/20">
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-android-green/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-1/4 h-1/4 bg-android-green/5 rounded-full blur-2xl -z-10" />
      
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="slide-animate text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
            <span className="text-android-green">{profileData.name}</span>
          </h1>
          <h2 className="slide-animate text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-6">
            {profileData.title}
          </h2>
          <p className="animate-on-scroll text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 mb-8">
            Building innovative Android applications with modern technologies like Kotlin, Jetpack Compose, and Clean Architecture.
          </p>
          
          <div className="animate-on-scroll flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-android-green text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:bg-android-green/90 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-android-green text-android-dark font-medium py-3 px-6 rounded-lg hover:bg-android-green/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
  <div className="animate-bounce">
    <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-android-green/20 hover:bg-android-green/30 transition-all duration-300">
      <ArrowDown className="w-5 h-5 text-android-green" />
    </a>
  </div>
</div>
    </section>
  );
};

export default Hero;
