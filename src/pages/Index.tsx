
import DashboardLayout from '@/components/layout/DashboardLayout';
import Dashboard from '@/components/dashboard/Dashboard';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Add page title
  useEffect(() => {
    document.title = "HomeSphere - Smart Home Control Dashboard";
  }, []);

  return (
    <DashboardLayout>
      <div className="relative">
        {/* Enhanced decorative background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cosmic-amber/5 rounded-full blur-3xl -z-10 animate-pulse-amber"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-cosmic-teal/3 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-cosmic-amber/3 rounded-full blur-3xl -z-10"></div>
        
        {/* Stars background effect */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {/* Premium Welcome Banner */}
        <div className="mb-8 cosmic-gradient rounded-xl p-6 relative overflow-hidden border border-cosmic-teal/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-teal/10 to-cosmic-amber/10 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <Star className="text-cosmic-amber mr-2" size={20} />
              <h2 className="text-lg font-orbitron bg-gradient-to-r from-cosmic-teal to-cosmic-amber bg-clip-text text-transparent">PREMIUM EXPERIENCE</h2>
            </div>
            <h1 className="text-3xl md:text-4xl font-orbitron mb-4">Welcome to <span className="bg-gradient-to-r from-cosmic-teal to-cosmic-amber bg-clip-text text-transparent">HomeSphere</span></h1>
            <p className="text-white/70 mb-6 max-w-2xl">Your entire home is optimized for maximum efficiency. All systems are operational and ready for your commands.</p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue font-medium">
                Command Center 
                <ChevronRight size={16} />
              </Button>
              <Button variant="outline" className="border-cosmic-teal/30 hover:bg-cosmic-teal/10 text-cosmic-teal">
                View System Status
              </Button>
            </div>
          </div>
        </div>
        
        <Dashboard />
        
        {/* Premium Features Section */}
        <div className="mt-10 mb-8">
          <div className="flex items-center mb-6">
            <Sparkles className="text-cosmic-amber mr-2" size={20} />
            <h2 className="text-2xl font-orbitron">Premium Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Advanced AI Control", 
                description: "Full voice control through every room with custom routines and advanced learning capabilities.",
                linkTo: "/assistant",
                color: "from-cosmic-teal/20 to-cosmic-teal/5"
              },
              { 
                title: "Energy Optimization", 
                description: "Save up to 35% on utility costs with intelligent scheduling and consumption analysis.",
                linkTo: "/energy",
                color: "from-cosmic-amber/20 to-cosmic-amber/5" 
              },
              { 
                title: "Security Shield", 
                description: "Multi-layered protection system with facial recognition and behavior analysis.",
                linkTo: "/security",
                color: "from-purple-500/20 to-purple-500/5" 
              }
            ].map((feature, idx) => (
              <Link
                to={feature.linkTo}
                key={idx}
                className="module-card bg-gradient-to-br hover:scale-[1.02] transition-all duration-300"
                style={{ backgroundImage: `linear-gradient(to bottom right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}
              >
                <h3 className="text-xl font-orbitron mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70 mb-4">{feature.description}</p>
                <div className="flex items-center text-cosmic-teal text-sm">
                  <span>Explore</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
