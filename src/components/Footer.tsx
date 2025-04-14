
import { Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-android-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              <span className="text-android-green">J</span>emish 
              <span className="text-android-green">.</span>
            </p>
          </div>
          
          <div className="flex items-center">
            <p>&copy; {year} Jemish Khunt. All rights reserved.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm">Built with</span>
            <Heart className="w-4 h-4 text-android-green mx-1" />
            <span className="text-sm">using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
