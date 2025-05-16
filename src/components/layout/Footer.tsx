
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto pt-6 pb-4 px-2 text-center">
      <div className="flex flex-wrap items-center justify-center gap-2 text-white/50 text-xs">
        <span>© 2025 HomeSphere</span>
        <span className="mx-2">•</span>
        <Link to="/landing" className="hover:text-white transition-colors flex items-center gap-1">
          <span>About</span>
          <ExternalLink size={10} />
        </Link>
        <span className="mx-2">•</span>
        <a 
          href="#" 
          className="hover:text-white transition-colors flex items-center gap-1"
          onClick={(e) => e.preventDefault()}
        >
          Privacy
        </a>
        <span className="mx-2">•</span>
        <a 
          href="#" 
          className="hover:text-white transition-colors flex items-center gap-1"
          onClick={(e) => e.preventDefault()}
        >
          Terms
        </a>
        <span className="mx-2">•</span>
        <span className="flex items-center gap-1">
          Made with <Heart size={10} className="text-cosmic-teal" fill="#00E5E5" /> in the cosmos
        </span>
      </div>
    </footer>
  );
};

export default Footer;
