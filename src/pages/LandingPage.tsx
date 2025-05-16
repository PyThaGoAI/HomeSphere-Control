
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Home, 
  Check, 
  Star, 
  Calendar, 
  Activity, 
  Settings, 
  Brain, 
  Leaf, 
  ChevronRight,
  Crown,
  Diamond,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const LandingPage = () => {
  useEffect(() => {
    document.title = "HomeSphere - Future of Smart Home Control";
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        
        if (isInViewport) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    { title: "Dashboard", icon: Home, description: "Central control hub for your entire smart home", link: "/" },
    { title: "Lighting", icon: Star, description: "Customize lighting scenes and schedules", link: "/lights" },
    { title: "Climate", icon: Calendar, description: "Precise temperature and humidity control", link: "/climate" },
    { title: "Security", icon: Shield, description: "Camera feeds and entry point monitoring", link: "/security" },
    { title: "Energy", icon: Zap, description: "Track and optimize energy consumption", link: "/energy" },
    { title: "Scenes", icon: Sparkles, description: "Create and activate custom automation scenes", link: "/scenes" },
    { title: "AI Assistant", icon: Brain, description: "Voice control and intelligent suggestions", link: "/assistant" },
    { title: "Guests", icon: Activity, description: "Manage visitor access and permissions", link: "/guests" },
    { title: "Analytics", icon: Activity, description: "Detailed reports and usage patterns", link: "/analytics" },
    { title: "Network", icon: Activity, description: "Monitor and optimize your smart devices network", link: "/network" },
    { title: "Ecosystem", icon: Leaf, description: "View all connected devices and their status", link: "/ecosystem" },
    { title: "Settings", icon: Settings, description: "Customize your HomeSphere experience", link: "/settings" }
  ];
  
  const premiumFeatures = [
    { 
      title: "Advanced AI Control", 
      description: "Multi-room voice control with custom routines and advanced learning capabilities.",
      icon: Brain,
      link: "/assistant"
    },
    { 
      title: "Energy Optimization", 
      description: "Save up to 35% on utility costs with intelligent scheduling and consumption analysis.",
      icon: Leaf,
      link: "/energy"
    },
    { 
      title: "3D Visualization", 
      description: "Interactive 3D model of your home with real-time device status and controls.",
      icon: Diamond,
      link: "/visualization-3d"
    },
    { 
      title: "Predictive Automation", 
      description: "AI-powered system that learns your habits and adjusts your home automatically.",
      icon: Sparkles,
      link: "/predictions"
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-cosmic-teal/10 rounded-full blur-[100px] opacity-60 animate-float"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-cosmic-amber/10 rounded-full blur-[100px] opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[30%] left-[50%] w-[25%] h-[25%] bg-cosmic-teal/5 rounded-full blur-[80px] opacity-40 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Enhanced stars */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        
        {/* Enhanced meteors */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`meteor-${i}`}
            className="absolute h-[1px] w-[150px] bg-white/30 animate-meteor"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100 + 100}px`,
              animationDelay: `${Math.random() * 20 + i * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Premium Header with animation */}
      <header className={`relative z-10 p-6 lg:p-8 flex justify-between items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[-20px]'}`}>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 orb flex items-center justify-center">
            <span className="text-xl font-orbitron font-bold">HS</span>
          </div>
          <div>
            <span className="font-orbitron text-2xl text-white block">HomeSphere</span>
            <span className="text-cosmic-teal text-xs tracking-widest uppercase">Premium Smart Experience</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-exo">
          <a href="#features" className="text-white/80 hover:text-cosmic-teal transition-colors duration-300 border-b-2 border-transparent hover:border-cosmic-teal/30 pb-1 text-sm uppercase tracking-wider">Features</a>
          <a href="#modules" className="text-white/80 hover:text-cosmic-teal transition-colors duration-300 border-b-2 border-transparent hover:border-cosmic-teal/30 pb-1 text-sm uppercase tracking-wider">Modules</a>
          <a href="#premium" className="text-white/80 hover:text-cosmic-teal transition-colors duration-300 border-b-2 border-transparent hover:border-cosmic-teal/30 pb-1 text-sm uppercase tracking-wider">Premium</a>
          <a href="#testimonials" className="text-white/80 hover:text-cosmic-teal transition-colors duration-300 border-b-2 border-transparent hover:border-cosmic-teal/30 pb-1 text-sm uppercase tracking-wider">Testimonials</a>
          
          <Button asChild variant="outline" className="border-cosmic-teal text-cosmic-teal hover:bg-cosmic-teal/10 ml-4">
            <Link to="/">Dashboard</Link>
          </Button>
        </div>
        
        <Button asChild className="bg-cosmic-teal hover:bg-cosmic-teal/90 text-black lg:hidden">
          <Link to="/"><Home size={18} /></Link>
        </Button>
      </header>

      {/* Hero Section with enhanced animations */}
      <section className="relative z-10 px-6 lg:px-16 pt-10 lg:pt-16 pb-24 flex flex-col lg:flex-row items-center">
        <div className={`lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[-20px]'}`}>
          <div className="flex items-center mb-4">
            <Crown className="text-cosmic-amber mr-2" size={20} />
            <span className="text-sm text-cosmic-amber uppercase tracking-[0.2em] font-medium">Premium Experience</span>
          </div>
          
          <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-teal">The Future</span> of Smart Home Control
          </h1>
          
          <p className="text-white/80 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
            Experience unparalleled control with HomeSphere's immersive cosmic interface. Connect all your smart devices into one beautiful, intelligent ecosystem.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-cosmic-teal hover:bg-cosmic-teal/90 text-black font-medium px-8 py-6 rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105">
              <Link to="/">Launch Dashboard <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105">
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </div>
        
        <div className={`lg:w-1/2 relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
          <div className="relative z-10 glass-card rounded-2xl overflow-hidden border border-cosmic-teal/30 shadow-[0_0_40px_rgba(0,229,229,0.2)]">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="HomeSphere Dashboard"
              className="w-full h-auto rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic to-transparent opacity-60"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-5 -right-5 px-4 py-2 glass-card rounded-lg border border-cosmic-teal/30 backdrop-blur-md shadow-lg animate-float z-20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cosmic-teal animate-pulse"></div>
              <span className="text-sm text-white">Optimal Temperature</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 left-1/4 px-4 py-2 glass-card rounded-lg border border-cosmic-amber/30 backdrop-blur-md shadow-lg animate-float z-20" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cosmic-amber animate-pulse"></div>
              <span className="text-sm text-white">Energy Saving Mode</span>
            </div>
          </div>
          
          <div className="absolute top-1/3 -left-10 px-4 py-2 glass-card rounded-lg border border-cosmic-teal/30 backdrop-blur-md shadow-lg animate-float z-20" style={{ animationDelay: '2.7s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cosmic-teal animate-pulse"></div>
              <span className="text-sm text-white">Security System Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="relative z-10 px-6 py-12 glass-card mx-6 lg:mx-16 border-t border-b border-cosmic-teal/20 reveal-on-scroll">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "10+", label: "Smart Modules" },
            { value: "35%", label: "Energy Savings" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-orbitron text-white mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features section with enhanced design */}
      <section id="features" className="relative z-10 px-6 lg:px-16 py-24 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cosmic-teal/10 border border-cosmic-teal/30 text-cosmic-teal text-xs font-medium uppercase tracking-wider mb-4">Premium Features</div>
            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cosmic-teal via-white to-cosmic-teal bg-clip-text text-transparent mb-6">Smart Living Redefined</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Elevate your lifestyle with HomeSphere's advanced smart home controls</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Comprehensive Security', text: 'Multi-layered protection with facial recognition and behavioral analysis' },
              { icon: Zap, title: 'Energy Optimization', text: 'Reduce costs with AI-powered consumption analysis and intelligent scheduling' },
              { icon: Sparkles, title: 'Custom Scenes', text: 'Create perfect environments for any occasion with a single tap' },
              { icon: Brain, title: 'AI Assistant', text: 'Voice controls and intelligent suggestions that learn from your preferences' },
              { icon: Clock, title: 'Automation', text: 'Set it and forget it with powerful rule-based automations and schedules' },
              { icon: Activity, title: 'Health Monitoring', text: 'Track air quality, temperature, and humidity for optimal living conditions' },
            ].map((feature, i) => (
              <div key={i} className="module-card p-8 hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col">
                <div className="h-14 w-14 rounded-lg bg-cosmic-teal/10 flex items-center justify-center mb-6">
                  <feature.icon className="text-cosmic-teal" size={28} />
                </div>
                <h3 className="font-orbitron text-2xl text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 flex-grow">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="relative z-10 px-6 lg:px-16 py-24 bg-cosmic-blue/30 backdrop-blur-md border-t border-b border-cosmic-teal/20 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cosmic-amber/10 border border-cosmic-amber/30 text-cosmic-amber text-xs font-medium uppercase tracking-wider mb-4">Complete System</div>
            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-6">All-In-One Control Center</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Every aspect of your smart home in one beautiful interface</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, i) => (
              <Link key={i} to={module.link} className="glass-card p-6 border border-white/10 hover:border-cosmic-teal/30 transition-all duration-300 hover:shadow-lg hover:shadow-cosmic-teal/10 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-cosmic-teal/10 group-hover:bg-cosmic-teal/20 flex items-center justify-center transition-all duration-300">
                    <module.icon className="text-cosmic-teal" size={20} />
                  </div>
                  <h3 className="font-orbitron text-lg text-white">{module.title}</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">{module.description}</p>
                <div className="flex items-center text-sm text-cosmic-teal/80 group-hover:text-cosmic-teal transition-all duration-300">
                  <span>Explore</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section with enhanced cards */}
      <section id="premium" className="relative z-10 px-6 lg:px-16 py-24 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Diamond className="text-cosmic-amber" size={24} />
              <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-white">Premium Features</h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Exclusive capabilities for the ultimate smart home experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumFeatures.map((feature, idx) => (
              <Link
                to={feature.link}
                key={idx}
                className="bg-gradient-to-br from-cosmic-blue to-cosmic-blue-light p-8 rounded-xl border border-cosmic-teal/20 hover:border-cosmic-teal/50 transition-all duration-500 hover:shadow-xl hover:shadow-cosmic-teal/10 group"
              >
                <div className="flex items-center mb-5">
                  <feature.icon size={32} className="text-cosmic-teal mr-4" />
                  <h3 className="text-2xl lg:text-3xl font-orbitron text-white group-hover:text-cosmic-teal transition-all duration-300">{feature.title}</h3>
                </div>
                <p className="text-white/70 mb-8 font-exo text-lg">{feature.description}</p>
                <div className="flex items-center text-cosmic-teal text-sm font-medium group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-orbitron">Discover</span>
                  <ChevronRight size={18} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Showcase Feature */}
      <section className="relative z-10 px-6 lg:px-16 py-24 bg-cosmic-blue/30 backdrop-blur-md reveal-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-cosmic-teal/10 border border-cosmic-teal/30 text-cosmic-teal text-xs font-medium uppercase tracking-wider mb-6">Featured</div>
            <h2 className="font-orbitron text-3xl lg:text-4xl font-bold text-white mb-6">3D Home Visualization</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Navigate your smart home in an immersive 3D environment. Control devices by interacting directly with the virtual representation of your home. See real-time status updates and measurements visualized in their actual location.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Interactive 3D model of your entire home',
                'Real-time device status visualization',
                'Room-by-room navigation with detailed controls',
                'Augmented reality mode for in-person interaction'
              ].map((feature, i) => (
                <li key={i} className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cosmic-teal/10 flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-cosmic-teal" />
                  </div>
                  <p className="text-white/80">{feature}</p>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-cosmic-teal hover:bg-cosmic-teal/90 text-black px-8 py-6 rounded-lg">
              <Link to="/visualization-3d">
                Explore 3D Features <ExternalLink size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="relative glass-card rounded-2xl overflow-hidden border border-cosmic-teal/30 shadow-[0_0_40px_rgba(0,229,229,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="3D Home Visualization" 
                className="w-full h-auto rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic to-transparent opacity-40"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 px-4 py-2 glass-card rounded-lg border border-cosmic-teal/30 backdrop-blur-md shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cosmic-teal"></div>
                <span className="text-xs text-white">Living Room</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 right-10 px-4 py-2 glass-card rounded-lg border border-cosmic-amber/30 backdrop-blur-md shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cosmic-amber"></div>
                <span className="text-xs text-white">Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with enhanced design */}
      <section id="testimonials" className="relative z-10 px-6 lg:px-16 py-24 reveal-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium uppercase tracking-wider mb-4">Trusted by Thousands</div>
            <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-6">What Our Users Say</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Join our community of satisfied HomeSphere users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "HomeSphere transformed the way I interact with my smart home. The interface is stunning and incredibly intuitive.",
                author: "Alex Chen",
                role: "Tech Enthusiast",
                image: "AC"
              },
              {
                text: "The energy monitoring features helped me reduce my electricity bill by 30%. The best smart home system I've ever used.",
                author: "Sarah Johnson",
                role: "Homeowner",
                image: "SJ"
              },
              {
                text: "The 3D visualization feature is mind-blowing. I can control my entire home from a digital twin of my house.",
                author: "Michael Reynolds",
                role: "Smart Home Advocate",
                image: "MR"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-card p-8 border border-white/10 backdrop-blur-lg hover:border-cosmic-teal/20 transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="text-cosmic-amber" />
                  ))}
                </div>
                <p className="text-white/90 mb-8 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-cosmic-blue flex items-center justify-center border border-cosmic-teal/30 text-cosmic-teal font-medium">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">{testimonial.author}</p>
                    <p className="text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="relative z-10 px-6 lg:px-16 py-24 reveal-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-cosmic-teal/10 border border-cosmic-teal/30 text-cosmic-teal text-xs font-medium uppercase tracking-wider mb-6">
            <Crown size={16} />
            <span>Ultra Premium Experience</span>
          </div>
          
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your Smart Home?</h2>
          
          <p className="text-white/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of smart homeowners who've elevated their living spaces with HomeSphere's cosmic interface.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-cosmic-teal hover:bg-cosmic-teal/90 text-black font-medium px-8 py-6 rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105">
              <Link to="/">
                Launch Dashboard
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-cosmic-teal/50 text-cosmic-teal hover:bg-cosmic-teal/10 px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105">
              <Link to="/system-health">
                Check Compatibility
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 lg:px-16 py-16 bg-cosmic-blue/40 backdrop-blur-md border-t border-cosmic-teal/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 orb flex items-center justify-center">
                  <span className="text-lg font-orbitron font-bold">HS</span>
                </div>
                <div>
                  <span className="font-orbitron text-xl text-white block">HomeSphere</span>
                  <span className="text-cosmic-teal text-xs">Smart Home Control</span>
                </div>
              </div>
              <p className="text-white/60 mb-6 pr-8">
                The ultimate smart home experience with intuitive controls, powerful automation, and stunning visualizations.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a key={social} href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cosmic-teal/20 transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="h-4 w-4 rounded-full bg-white/70"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-orbitron text-white mb-4">Features</h3>
              <ul className="space-y-2">
                {['Dashboard', 'Security', 'Energy', 'Automation', '3D View', 'AI Assistant'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-cosmic-teal transition-all duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Documentation', 'API', 'Support', 'Community', 'Tutorials', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-cosmic-teal transition-all duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Partners', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-cosmic-teal transition-all duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} HomeSphere. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-cosmic-teal transition-colors text-sm">Privacy</a>
              <a href="#" className="text-white/40 hover:text-cosmic-teal transition-colors text-sm">Terms</a>
              <a href="#" className="text-white/40 hover:text-cosmic-teal transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
