
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Zap, 
  Settings, 
  Bot, 
  Globe, 
  Award, 
  Rocket,
  Lightbulb,
  Thermometer,
  Lock,
  Play
} from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Smart Lighting",
      description: "Intelligent lighting that adapts to your mood, schedule, and activities",
      icon: Lightbulb,
      color: "from-sky-400 to-indigo-500"
    },
    {
      title: "Climate Control",
      description: "Precision temperature management for optimal comfort and energy efficiency",
      icon: Thermometer,
      color: "from-emerald-400 to-cyan-500"
    },
    {
      title: "Advanced Security",
      description: "Comprehensive security monitoring with AI-powered threat detection",
      icon: Lock,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Energy Management",
      description: "Real-time energy monitoring with predictive optimization algorithms",
      icon: Zap,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "AI Assistant",
      description: "Intuitive voice-controlled assistant that learns your preferences",
      icon: Bot,
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Cycle through features automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-cosmic text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-teal/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-cosmic-amber/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '25s' }}></div>
        </div>
        <div className="stars-container absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
          {/* Meteors */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`meteor-${i}`}
              className="absolute h-0.5 w-40 bg-white/30 animate-meteor"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100 + 100}px`,
                animationDelay: `${Math.random() * 10 + i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 backdrop-blur-lg bg-cosmic-blue/30 shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-teal to-cosmic-blue-light flex items-center justify-center">
                <Sparkles size={24} className="text-white" />
                <div className="absolute inset-0 rounded-full animate-pulse opacity-50 bg-cosmic-teal/30"></div>
              </div>
            </div>
            <div className="font-orbitron text-xl font-bold tracking-wider">
              Home<span className="text-cosmic-teal">Sphere</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 font-medium text-white/90">
            <a href="#features" className="hover:text-cosmic-teal transition-colors">Features</a>
            <a href="#benefits" className="hover:text-cosmic-teal transition-colors">Benefits</a>
            <a href="#ecosystem" className="hover:text-cosmic-teal transition-colors">Ecosystem</a>
            <a href="#testimonials" className="hover:text-cosmic-teal transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-cosmic-teal to-cosmic-blue-light hover:shadow-lg hover:shadow-cosmic-teal/20 transition-all duration-300 group">
              <span className="relative z-10">Enter Dashboard</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-cosmic-teal/20 to-cosmic-amber/20 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-2">
                <Sparkles size={16} className="text-cosmic-amber" />
                <span className="text-sm font-medium text-white">The Future of Smart Living</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold leading-tight mb-6">
              Control Your Home From <span className="text-gradient-premium">Another Dimension</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
              HomeSphere transforms your living space into an intelligent ecosystem that adapts, learns, and anticipates your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white bg-gradient-to-r from-cosmic-teal to-cosmic-blue-light hover:shadow-lg hover:shadow-cosmic-teal/20 transition-all duration-300 group flex items-center justify-center">
                <span>Experience HomeSphere</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a href="#video" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium border border-white/20 hover:border-cosmic-teal/50 backdrop-blur-sm hover:bg-cosmic-blue/20 transition-all duration-300 flex items-center justify-center group">
                <Play size={18} className="mr-2 text-cosmic-teal" />
                <span>Watch Demo</span>
              </a>
            </div>
          </div>
          
          {/* 3D Floating Device */}
          <div className="relative max-w-6xl mx-auto mt-20">
            <div className="relative z-20 rounded-xl overflow-hidden shadow-2xl transform perspective-1000 hover:rotate-y-3 transition-transform duration-700 border border-cosmic-teal/30">
              <AspectRatio ratio={16/9} className="bg-cosmic-blue">
                <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue-light/80 to-cosmic-blue flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="HomeSphere Dashboard Interface" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue to-transparent"></div>
                </div>
              </AspectRatio>
              {/* Dashboard UI Elements Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 pointer-events-none">
                <div className="absolute top-5 left-10 p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-32 h-6 bg-cosmic-teal/10 rounded-md"></div>
                  <div className="mt-2 w-48 h-4 bg-white/10 rounded-md"></div>
                </div>
                <div className="absolute bottom-10 right-10 p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 animate-float" style={{ animationDelay: '0.8s' }}>
                  <div className="w-40 h-40 bg-cosmic-amber/10 rounded-md"></div>
                </div>
              </div>
              {/* Glowing edges */}
              <div className="absolute inset-0 border border-cosmic-teal/30 rounded-xl pointer-events-none"></div>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full animate-orbit" style={{ animationDuration: '20s' }}>
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-cosmic-teal/20 backdrop-blur-md border border-cosmic-teal/30 flex items-center justify-center teal-glow">
                  <Lightbulb size={20} className="text-cosmic-teal" />
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full animate-orbit-reverse" style={{ animationDuration: '15s' }}>
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-cosmic-amber/20 backdrop-blur-md border border-cosmic-amber/30 flex items-center justify-center amber-glow">
                  <Lock size={20} className="text-cosmic-amber" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-24">
            {[
              { value: "99.9%", label: "System Uptime", icon: Shield },
              { value: "30+", label: "Smart Integrations", icon: Settings },
              { value: "5 min", label: "Average Setup Time", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 backdrop-blur-xl border border-cosmic-teal/20 flex flex-col items-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4 p-3 rounded-full bg-cosmic-teal/10 backdrop-blur-sm">
                  <stat.icon size={24} className="text-cosmic-teal" />
                </div>
                <div className="text-3xl font-orbitron font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-cosmic-blue-light/20 to-cosmic-blue/20 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-2">
                <Rocket size={16} className="text-cosmic-teal" />
                <span className="text-sm font-medium text-white">Cutting-Edge Features</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              Advanced Technology, <span className="text-cosmic-teal">Simplified</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              HomeSphere combines AI-powered analytics with intuitive controls to give you unprecedented command over your home environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Feature Showcase */}
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`group p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                      activeFeature === index 
                        ? 'bg-gradient-to-r from-cosmic-blue-light/40 to-cosmic-blue/40 border border-cosmic-teal/30 shadow-lg' 
                        : 'bg-cosmic-blue/20 hover:bg-cosmic-blue/30 border border-white/5'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} mr-4`}>
                        <feature.icon size={22} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-white/70 transition-all duration-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Feature Visualization */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-blue-light opacity-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-4/5 h-4/5 rounded-full border border-cosmic-teal/30 animate-spin-slow">
                      {features.map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-cosmic-blue border border-cosmic-teal/30 flex items-center justify-center -ml-6 -mt-6"
                          style={{ 
                            transform: `rotate(${i * (360 / features.length)}deg) translateY(-120px) rotate(-${i * (360 / features.length)}deg)`,
                            opacity: activeFeature === i ? 1 : 0.4
                          }}
                        >
                          {i === activeFeature && (
                            <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center shadow-lg animate-pulse-glow`}>
                        <features[activeFeature].icon size={40} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-cosmic-amber/20 to-cosmic-teal/20 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-cosmic-amber" />
                <span className="text-sm font-medium text-white">Why HomeSphere</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              Transform Your <span className="text-cosmic-amber">Living Experience</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Beyond convenience, HomeSphere creates an environment that enhances wellbeing, security, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intuitive Control",
                description: "Natural voice commands and gesture recognition provide a seamless control experience",
                icon: Bot,
                color: "from-violet-500 to-purple-600"
              },
              {
                title: "Energy Efficiency",
                description: "AI-driven optimization reduces energy consumption while maintaining optimal comfort",
                icon: Zap,
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Enhanced Security",
                description: "Advanced biometrics and perimeter monitoring keep your home protected",
                icon: Shield,
                color: "from-red-500 to-rose-600"
              },
              {
                title: "Global Access",
                description: "Control your home from anywhere in the world with encrypted cloud connectivity",
                icon: Globe,
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Personalized Experience",
                description: "Machine learning adapts to your preferences and anticipates your needs",
                icon: Settings,
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Future-Proof",
                description: "Regular over-the-air updates bring new features and improvements",
                icon: Rocket,
                color: "from-sky-500 to-blue-600"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="glass-card p-8 backdrop-blur-xl border border-cosmic-teal/20 hover:border-cosmic-teal/40 transition-all duration-300 group"
              >
                <div className={`mb-6 p-4 rounded-lg bg-gradient-to-br ${benefit.color} w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="video" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-cosmic-teal/30 shadow-2xl">
              <AspectRatio ratio={16/9} className="bg-cosmic-blue-light">
                <div className="absolute inset-0 flex items-center justify-center bg-cosmic-blue/80">
                  <button className="w-20 h-20 rounded-full bg-cosmic-teal/90 flex items-center justify-center animate-pulse-glow">
                    <Play size={36} className="text-white ml-1" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue to-transparent opacity-60"></div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-cosmic-teal/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-cosmic-teal" />
                <span className="text-sm font-medium text-white">Connected Ecosystem</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              One Platform, <span className="text-gradient-premium">Infinite Possibilities</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              HomeSphere seamlessly integrates with your favorite devices and services to create a unified smart home ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-xl bg-cosmic-blue/30 backdrop-blur-md border border-white/10 flex items-center justify-center p-6 transition-all duration-300 hover:border-cosmic-teal/40 hover:shadow-lg group"
              >
                <div className="w-full h-full rounded-lg bg-white/5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-gradient-to-br from-cosmic-teal to-cosmic-blue-light transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-white/70 mb-4">and many more integrations coming soon!</p>
            <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-cosmic-amber/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-cosmic-amber" />
                <span className="text-sm font-medium text-white">Customer Stories</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
              Loved by <span className="text-cosmic-amber">Smart Homeowners</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              See what our customers are saying about their experience with HomeSphere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "HomeSphere completely transformed how I interact with my home. It's intuitive, responsive, and surprisingly easy to set up.",
                author: "Alex Chen",
                role: "Tech Enthusiast"
              },
              {
                quote: "The energy savings alone paid for HomeSphere within the first year. Now I can't imagine living without it.",
                author: "Sarah Johnson",
                role: "Sustainability Advocate"
              },
              {
                quote: "As someone who travels frequently, the peace of mind that HomeSphere provides is invaluable. I can check on my home from anywhere.",
                author: "Marcus Williams",
                role: "Business Executive"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card p-8 backdrop-blur-xl border border-cosmic-teal/20 flex flex-col"
              >
                <div className="flex-1">
                  <p className="text-white/80 italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-cosmic-teal text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-teal/20 to-cosmic-amber/20 rounded-2xl blur-3xl"></div>
            <div className="glass-card p-12 md:p-16 backdrop-blur-xl border border-cosmic-teal/30 rounded-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-cosmic-teal/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-cosmic-amber/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
                  Ready to Experience the <span className="text-gradient-premium">Future of Living?</span>
                </h2>
                
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Step into a world where your home anticipates your needs and responds to your desires.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-white bg-gradient-to-r from-cosmic-teal to-cosmic-blue-light hover:shadow-lg hover:shadow-cosmic-teal/20 transition-all duration-300 group flex items-center justify-center">
                    <span>Enter HomeSphere</span>
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium border border-white/20 hover:border-cosmic-teal/50 backdrop-blur-sm hover:bg-cosmic-blue/20 transition-all duration-300 flex items-center justify-center">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-20 pb-10 overflow-hidden border-t border-cosmic-teal/20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="relative mr-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-teal to-cosmic-blue-light flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                </div>
                <div className="font-orbitron text-xl font-bold tracking-wider">
                  Home<span className="text-cosmic-teal">Sphere</span>
                </div>
              </div>
              
              <p className="text-white/70 mb-6">
                The most advanced smart home platform for the modern living experience.
              </p>
              
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-cosmic-teal/50 hover:bg-cosmic-blue/30 transition-all duration-300"
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-3">
                {['Features', 'Security', 'Integrations', 'Pricing', 'FAQ'].map((item) => (
                  <li key={item}><a href="#" className="text-white/70 hover:text-cosmic-teal transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                  <li key={item}><a href="#" className="text-white/70 hover:text-cosmic-teal transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                {['Terms', 'Privacy', 'Cookies', 'Licenses', 'Compliance'].map((item) => (
                  <li key={item}><a href="#" className="text-white/70 hover:text-cosmic-teal transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HomeSphere. All rights reserved.
            </p>
            
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <div className="w-2 h-2 rounded-full bg-cosmic-teal animate-pulse mr-2"></div>
                <span className="text-white/70 text-sm">All systems operational</span>
              </div>
              
              <a href="#" className="text-white/70 hover:text-cosmic-teal transition-colors text-sm">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
