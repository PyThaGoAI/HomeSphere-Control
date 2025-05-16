import DashboardLayout from '@/components/layout/DashboardLayout';
import Dashboard from '@/components/dashboard/Dashboard';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Sparkles, Diamond, Crown, ExternalLink, Zap, Activity, Brain, Leaf, Shield, Clock, ChartLineUp, Home, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Index = () => {
  // Add page title
  useEffect(() => {
    document.title = "HomeSphere - Smart Home Control Dashboard";
  }, []);

  // Premium features with proper Tailwind classes and added icons
  const premiumFeatures = [
    { 
      title: "Advanced AI Control", 
      description: "Full voice control through every room with custom routines and advanced learning capabilities.",
      linkTo: "/assistant",
      bgClass: "bg-gradient-to-br from-cosmic-teal/20 to-cosmic-teal/5",
      hoverGlowClass: "hover:shadow-cosmic-teal/20",
      icon: Brain
    },
    { 
      title: "Energy Optimization", 
      description: "Save up to 35% on utility costs with intelligent scheduling and consumption analysis.",
      linkTo: "/energy",
      bgClass: "bg-gradient-to-br from-cosmic-amber/20 to-cosmic-amber/5",
      hoverGlowClass: "hover:shadow-cosmic-amber/20",
      icon: Leaf
    },
    { 
      title: "Security Shield", 
      description: "Multi-layered protection system with facial recognition and behavior analysis.",
      linkTo: "/security",
      bgClass: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
      hoverGlowClass: "hover:shadow-purple-500/20",
      icon: Shield
    }
  ];

  // Quick actions for users
  const quickActions = [
    {
      title: "Home Status",
      description: "Check system health & automation status",
      icon: Activity,
      linkTo: "/",
      color: "text-cosmic-teal"
    },
    {
      title: "Energy Report",
      description: "View today's consumption & savings",
      icon: Zap,
      linkTo: "/energy",
      color: "text-cosmic-amber"
    },
    {
      title: "Scene Manager",
      description: "Create & schedule custom scenes",
      icon: Sparkles,
      linkTo: "/scenes",
      color: "text-purple-400"
    }
  ];

  return (
    <DashboardLayout>
      <div className="relative w-full">
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
        
        {/* New welcome hero section with ultra modern typography */}
        <div className="mb-10 cosmic-gradient rounded-xl p-6 md:p-10 relative overflow-hidden border border-cosmic-teal/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-teal/10 to-cosmic-amber/10 opacity-50"></div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-cosmic-amber/10 rounded-full blur-3xl"></div>
          <div className="absolute left-20 bottom-0 w-40 h-40 bg-cosmic-teal/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center mb-2">
              <Crown className="text-cosmic-amber mr-2" size={24} />
              <h2 className="text-lg font-orbitron bg-gradient-to-r from-cosmic-teal via-white to-cosmic-amber bg-clip-text text-transparent tracking-wider">ULTRA PREMIUM EXPERIENCE</h2>
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-orbitron mb-4 tracking-tight leading-tight">
              Welcome to <span className="bg-gradient-to-r from-cosmic-teal to-cosmic-amber bg-clip-text text-transparent">HomeSphere</span>
            </h1>
            <p className="text-white/70 mb-6 max-w-2xl text-lg md:text-xl leading-relaxed font-exo">
              Your entire smart home ecosystem is optimized for maximum efficiency and luxury. All systems are operational and ready for your commands.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue font-medium px-8 py-6 rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105 font-exo tracking-wide text-base">
                Command Center 
                <ChevronRight size={18} />
              </Button>
              <Button variant="outline" className="border-cosmic-teal/30 hover:bg-cosmic-teal/10 text-cosmic-teal px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 font-exo tracking-wide text-base">
                View System Status
              </Button>
            </div>
          </div>
          
          {/* New Quick actions section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-cosmic-blue/20 backdrop-blur-lg p-4 rounded-lg border border-white/5">
            <h3 className="col-span-1 md:col-span-3 flex items-center pb-2 mb-2 border-b border-white/10">
              <Clock className="text-cosmic-amber mr-2" size={20} />
              <span className="font-orbitron text-lg">Quick Actions</span>
            </h3>
            {quickActions.map((action, index) => (
              <Link 
                to={action.linkTo}
                key={index} 
                className="flex items-center p-4 bg-cosmic-blue/30 rounded-lg border border-white/10 hover:border-cosmic-teal/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`p-3 rounded-full ${action.color}/20 mr-4`}>
                  <action.icon className={action.color} size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-orbitron text-base">{action.title}</h3>
                  <p className="text-xs text-white/60">{action.description}</p>
                </div>
                <ChevronRight size={16} className="ml-auto text-white/40" />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Dashboard section with improved spacing */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Home className="text-cosmic-teal mr-3" size={24} />
            <h2 className="text-3xl font-orbitron leading-none tracking-wide">Dashboard</h2>
          </div>
          <Dashboard />
        </div>
        
        {/* Enhanced Premium Features Section with better cards */}
        <div className="mt-16 mb-8">
          <div className="flex items-center mb-8">
            <Diamond className="text-cosmic-amber mr-3" size={28} />
            <h2 className="text-3xl font-orbitron leading-none tracking-wide">Premium Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, idx) => (
              <Link
                to={feature.linkTo}
                key={idx}
                className={cn(
                  "module-card p-6 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl", 
                  feature.bgClass,
                  feature.hoverGlowClass
                )}
              >
                <div className="flex items-center mb-3">
                  <feature.icon size={24} className="text-white mr-2" />
                  <h3 className="text-2xl font-orbitron text-white">{feature.title}</h3>
                </div>
                <p className="text-white/70 mb-8 font-exo">{feature.description}</p>
                <div className="flex items-center text-cosmic-teal text-sm font-medium">
                  <span className="font-orbitron">Explore</span>
                  <ChevronRight size={18} className="ml-1.5 animate-pulse" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Redesigned User Statistics & Insights */}
        <div className="mt-20 mb-16">
          <div className="flex items-center mb-8">
            <ChartLineUp className="text-cosmic-amber mr-3" size={28} />
            <h2 className="text-3xl font-orbitron leading-none tracking-wide">Your Smart Home Insights</h2>
          </div>
          
          <div className="bg-cosmic-blue/30 backdrop-blur-md rounded-xl border border-cosmic-teal/20 p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Energy Saved", value: "32%", trend: "+5% this month", color: "text-cosmic-teal" },
                { label: "System Uptime", value: "99.8%", trend: "30 days streak", color: "text-cosmic-amber" },
                { label: "Automations", value: "24", trend: "3 new this week", color: "text-cosmic-teal" },
                { label: "Comfort Score", value: "9.2", trend: "Premium level", color: "text-cosmic-amber" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-white/60 text-sm uppercase tracking-wider font-exo mb-2">{stat.label}</div>
                  <div className="text-4xl font-orbitron mb-1 tracking-tight">{stat.value}</div>
                  <div className={`text-sm ${stat.color} font-medium`}>{stat.trend}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-6 border-t border-cosmic-teal/10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h4 className="font-orbitron text-xl mb-2 flex items-center">
                    <Info className="text-cosmic-teal mr-2" size={18} />
                    Smart Home Health
                  </h4>
                  <p className="text-white/70 text-base font-exo">Your system is performing optimally with no critical alerts</p>
                </div>
                <Button className="bg-cosmic-blue/60 hover:bg-cosmic-blue/80 border border-cosmic-teal/30 text-white font-exo tracking-wide px-6 py-5 flex items-center gap-2">
                  View Full Report
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* New certification badge section */}
        <div className="mt-16 mb-8 flex items-center justify-center">
          <div className="flex items-center bg-cosmic-blue/30 backdrop-blur-sm rounded-full px-8 py-4 border border-cosmic-teal/20">
            <Sparkles className="text-cosmic-amber mr-2" size={20} />
            <p className="text-xs text-white/60 font-exo">Certified HomeSphere Premium Experience</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
