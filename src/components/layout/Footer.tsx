
import { Sparkles, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 mt-8 pt-5 border-t border-cosmic-teal/20">
      <div className="flex flex-col space-y-6 pb-6">
        {/* Premium footer with navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-cosmic-teal text-sm">Home</Link></li>
              <li><Link to="/assistant" className="text-white/70 hover:text-cosmic-teal text-sm">Sphere AI</Link></li>
              <li><Link to="/settings" className="text-white/70 hover:text-cosmic-teal text-sm">Settings</Link></li>
              <li><Link to="/logs" className="text-white/70 hover:text-cosmic-teal text-sm">Activity Log</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Control</h4>
            <ul className="space-y-2">
              <li><Link to="/lights" className="text-white/70 hover:text-cosmic-teal text-sm">Lighting</Link></li>
              <li><Link to="/climate" className="text-white/70 hover:text-cosmic-teal text-sm">Climate</Link></li>
              <li><Link to="/security" className="text-white/70 hover:text-cosmic-teal text-sm">Security</Link></li>
              <li><Link to="/energy" className="text-white/70 hover:text-cosmic-teal text-sm">Energy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Documentation <ExternalLink size={12} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">API <ExternalLink size={12} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">System Status <ExternalLink size={12} className="ml-1" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        {/* System status and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-cosmic-teal/10 pt-5">
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mb-3 md:mb-0">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="size-2 rounded-full bg-cosmic-amber animate-pulse mr-2"></div>
              <span className="text-white/70 text-sm">All systems operational</span>
            </div>
            <div className="hidden md:flex items-center">
              <div className="h-4 w-px bg-cosmic-teal/20 mx-2"></div>
              <span className="text-white/50 text-xs">Last update: Today, 14:32</span>
            </div>
          </div>
          
          <div className="flex items-center text-sm">
            <div className="text-white/60 flex items-center">
              <Sparkles size={14} className="mr-1 text-cosmic-teal" />
              <span>&copy; {currentYear} HomeSphere. All rights reserved.</span>
              <span className="px-1">·</span>
              <span className="flex items-center">
                Designed with <Heart size={12} className="text-cosmic-amber mx-1 animate-pulse-amber" /> by Cristian Sas
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
