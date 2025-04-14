
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-padding">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Let's <span className="text-android-green">Connect</span>
        </h2>
        <div className="w-24 h-1 bg-android-green mx-auto mb-10 rounded-full"></div>
        
        <div className="animate-on-scroll max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a 
              href="mailto:jemishkhunt169@gmail.com" 
              className="flex items-center px-6 py-4 bg-android-green/5 hover:bg-android-green/10 rounded-lg transition-all duration-300 w-full md:w-auto"
            >
              <Mail className="w-6 h-6 text-android-green mr-3" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Email Me At</p>
                <p className="font-medium">jemishkhunt169@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center px-6 py-4 bg-android-green/5 rounded-lg w-full md:w-auto">
              <MapPin className="w-6 h-6 text-android-green mr-3" />
              <div className="text-left">
                <p className="text-sm text-gray-600">Based In</p>
                <p className="font-medium">Gujarat, India</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Follow Me On</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/jemish-khunt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-green/10 hover:bg-android-green/20 p-4 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-android-green" />
            </a>
            <a
              href="https://x.com/jemish_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-green/10 hover:bg-android-green/20 p-4 rounded-full transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-android-green" />
            </a>
            <a
              href="https://github.com/jemish-169" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-android-green/10 hover:bg-android-green/20 p-4 rounded-full transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-android-green" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
