
import DashboardLayout from '@/components/layout/DashboardLayout';
import Dashboard from '@/components/dashboard/Dashboard';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Sparkles, Diamond, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Index = () => {
  // Add page title
  useEffect(() => {
    document.title = "HomeSphere - Smart Home Control Dashboard";
  }, []);

  // Premium features with proper Tailwind classes
  const premiumFeatures = [
    { 
      title: "Advanced AI Control", 
      description: "Full voice control through every room with custom routines and advanced learning capabilities.",
      linkTo: "/assistant",
      bgClass: "bg-gradient-to-br from-cosmic-teal/20 to-cosmic-teal/5",
      hoverGlowClass: "hover:shadow-cosmic-teal/20"
    },
    { 
      title: "Energy Optimization", 
      description: "Save up to 35% on utility costs with intelligent scheduling and consumption analysis.",
      linkTo: "/energy",
      bgClass: "bg-gradient-to-br from-cosmic-amber/20 to-cosmic-amber/5",
      hoverGlowClass: "hover:shadow-cosmic-amber/20"
    },
    { 
      title: "Security Shield", 
      description: "Multi-layered protection system with facial recognition and behavior analysis.",
      linkTo: "/security",
      bgClass: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
      hoverGlowClass: "hover:shadow-purple-500/20"
    }
  ];

  return (
    <DashboardLayout>
      <div className="relative">
        {/* Enhanced decorative background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cosmic-amber/5 rounded-full blur-3xl -z-10 animate-pulse-amber"></div>
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-cosmic-teal/3 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-cosmic-amber/3 rounded-full blur-3xl -z-10"></div>
        
        {/* Enhanced Stars background effect with more stars */}
        {[...Array(30)].map((_, i) => (
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
        
        {/* Enhanced Premium Welcome Banner with glass morphism */}
        <div className="mb-8 cosmic-gradient rounded-xl p-6 relative overflow-hidden border border-cosmic-teal/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-teal/10 to-cosmic-amber/10 opacity-50"></div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-cosmic-amber/10 rounded-full blur-3xl"></div>
          <div className="absolute left-20 bottom-0 w-40 h-40 bg-cosmic-teal/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <Crown className="text-cosmic-amber mr-2" size={24} />
              <h2 className="text-lg font-orbitron bg-gradient-to-r from-cosmic-teal via-white to-cosmic-amber bg-clip-text text-transparent">ULTRA PREMIUM EXPERIENCE</h2>
            </div>
            <h1 className="text-3xl md:text-5xl font-orbitron mb-4 tracking-tight">Welcome to <span className="bg-gradient-to-r from-cosmic-teal to-cosmic-amber bg-clip-text text-transparent">HomeSphere</span></h1>
            <p className="text-white/70 mb-6 max-w-2xl text-lg">Your entire smart home ecosystem is optimized for maximum efficiency and luxury. All systems are operational and ready for your commands.</p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue font-medium px-6 py-5 rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105">
                Command Center 
                <ChevronRight size={18} />
              </Button>
              <Button variant="outline" className="border-cosmic-teal/30 hover:bg-cosmic-teal/10 text-cosmic-teal px-6 py-5 rounded-lg transition-all duration-300 hover:scale-105">
                View System Status
              </Button>
            </div>
          </div>
        </div>
        
        <Dashboard />
        
        {/* Enhanced Premium Features Section with animatable cards */}
        <div className="mt-10 mb-8">
          <div className="flex items-center mb-6">
            <Diamond className="text-cosmic-amber mr-2" size={24} />
            <h2 className="text-2xl font-orbitron">Premium Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, idx) => (
              <Link
                to={feature.linkTo}
                key={idx}
                className={cn(
                  "module-card hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl", 
                  feature.bgClass,
                  feature.hoverGlowClass
                )}
              >
                <h3 className="text-xl font-orbitron mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70 mb-6">{feature.description}</p>
                <div className="flex items-center text-cosmic-teal text-sm font-medium">
                  <span>Explore</span>
                  <ChevronRight size={18} className="ml-1 animate-pulse" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* New Section: User Statistics & Insights */}
        <div className="mt-12 mb-10">
          <div className="flex items-center mb-6">
            <Star className="text-cosmic-amber mr-2" size={24} />
            <h2 className="text-2xl font-orbitron">Your Smart Home Insights</h2>
          </div>
          
          <div className="bg-cosmic-blue/30 backdrop-blur-md rounded-xl border border-cosmic-teal/20 p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Energy Saved", value: "32%", trend: "+5% this month", color: "text-cosmic-teal" },
                { label: "System Uptime", value: "99.8%", trend: "30 days streak", color: "text-cosmic-amber" },
                { label: "Automations", value: "24", trend: "3 new this week", color: "text-cosmic-teal" },
                { label: "Comfort Score", value: "9.2", trend: "Premium level", color: "text-cosmic-amber" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-white/60 text-sm mb-1">{stat.label}</div>
                  <div className="text-3xl font-orbitron mb-1">{stat.value}</div>
                  <div className={`text-xs ${stat.color}`}>{stat.trend}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-cosmic-teal/10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="font-orbitron text-lg mb-1">Smart Home Health</h4>
                  <p className="text-white/60 text-sm">Your system is performing optimally with no critical alerts</p>
                </div>
                <Button className="bg-cosmic-blue/60 hover:bg-cosmic-blue/80 border border-cosmic-teal/30 text-white">
                  View Full Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
