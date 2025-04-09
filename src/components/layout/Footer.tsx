
import { Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 mt-8 pt-3 border-t border-cosmic-teal/20">
      <div className="flex flex-col md:flex-row justify-between items-center pb-4">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="flex items-center">
            <div className="size-2 rounded-full bg-cosmic-amber animate-pulse mr-2"></div>
            <span className="text-white/70 text-sm">All systems operational</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm">
          <div className="text-white/60 flex items-center">
            <Sparkles size={14} className="mr-1 text-cosmic-teal" />
            <span>&copy; {currentYear} HomeSphere. All rights reserved. Designed by Cristian Sas.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
