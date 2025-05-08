
import { Sparkles, Heart, ExternalLink, Diamond, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 mt-8 pt-5 border-t border-cosmic-teal/20">
      <div className="flex flex-col space-y-6 pb-6">
        {/* Premium badge at the top of the footer */}
        <div className="flex justify-center mb-2">
          <div className="flex items-center px-4 py-2 bg-gradient-to-r from-cosmic-teal/20 to-cosmic-amber/20 rounded-full backdrop-blur-sm border border-white/10">
            <Diamond size={14} className="text-cosmic-amber mr-2" />
            <span className="text-xs font-medium text-white/80">PREMIUM EXPERIENCE</span>
          </div>
        </div>
        
        {/* Enhanced footer with more navigation sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Home Hub</Link></li>
              <li><Link to="/assistant" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Sphere AI</Link></li>
              <li><Link to="/settings" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Settings</Link></li>
              <li><Link to="/logs" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Activity Log</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Control</h4>
            <ul className="space-y-2">
              <li><Link to="/lights" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Lighting</Link></li>
              <li><Link to="/climate" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Climate</Link></li>
              <li><Link to="/security" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Security</Link></li>
              <li><Link to="/energy" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Energy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Documentation <ExternalLink size={12} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">API <ExternalLink size={12} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">System Status <ExternalLink size={12} className="ml-1" /></a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Support Center <ExternalLink size={12} className="ml-1" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-teal font-orbitron mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Licenses</a></li>
              <li><a href="#" className="text-white/70 hover:text-cosmic-teal text-sm flex items-center">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Premium features banner */}
        <div className="bg-cosmic-blue/40 backdrop-blur-sm border border-cosmic-teal/10 rounded-xl py-4 px-6 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                icon: Shield, 
                title: "Premium Support", 
                description: "24/7 dedicated assistance" 
              },
              { 
                icon: Award, 
                title: "Quality Guarantee", 
                description: "99.9% uptime commitment" 
              },
              { 
                icon: Sparkles, 
                title: "Regular Updates", 
                description: "New features every month" 
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <div className="mr-3 p-2 bg-cosmic-teal/10 rounded-full">
                  <feature.icon size={18} className="text-cosmic-teal" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white">{feature.title}</h5>
                  <p className="text-xs text-white/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* System status and copyright with enhanced design */}
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
