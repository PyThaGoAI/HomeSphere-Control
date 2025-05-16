
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Check, Star, Shield, Zap, Calendar, Users, Activity } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cosmic relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
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
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`meteor-${i}`}
            className="absolute h-0.5 w-20 bg-white/30 animate-meteor"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100 + 100}px`,
              animationDelay: `${Math.random() * 10 + i * 5}s`,
            }}
          />
        ))}
        
        {/* Orbs */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full opacity-10 bg-cosmic-teal blur-3xl animate-float" />
        <div className="absolute bottom-[30%] left-[5%] w-48 h-48 rounded-full opacity-10 bg-cosmic-amber blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 lg:p-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 orb flex items-center justify-center">
            <span className="text-lg font-orbitron font-bold">HS</span>
          </div>
          <span className="font-orbitron text-xl text-white">HomeSphere</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
          <Button asChild variant="outline" className="border-cosmic-teal text-cosmic-teal hover:bg-cosmic-teal/10">
            <Link to="/">Go to Dashboard</Link>
          </Button>
        </div>
        <Button asChild variant="outline" className="md:hidden border-cosmic-teal text-cosmic-teal hover:bg-cosmic-teal/10">
          <Link to="/"><Home size={18} /></Link>
        </Button>
      </header>

      {/* Hero section */}
      <section className="relative z-10 flex-1 px-6 lg:px-10 pt-12 pb-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
          <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-gradient-teal">Smart Home,</span>
            <br />Smarter Living
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
            Experience the next generation of home automation with HomeSphere's intuitive cosmic interface. Control every aspect of your smart home from a single, beautiful dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-cosmic-teal hover:bg-cosmic-teal/90 text-black font-medium px-8 py-6">
              <Link to="/">Launch Dashboard <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6">
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative z-10 glass-card rounded-2xl overflow-hidden border border-cosmic-teal/30 shadow-[0_0_30px_rgba(0,229,229,0.2)]">
            <img 
              src="https://unsplash.com/photos/a-woman-sitting-on-a-bed-using-a-laptop-mVk7SkBtMGk" 
              alt="HomeSphere Dashboard"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic to-transparent opacity-60"></div>
          </div>
          
          {/* Floating elements around the image */}
          <div className="absolute -top-5 -right-5 px-4 py-2 glass-card rounded-lg border border-cosmic-teal/30 backdrop-blur-md shadow-lg animate-float">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cosmic-teal"></div>
              <span className="text-sm text-white">Optimal Temperature</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 left-1/4 px-4 py-2 glass-card rounded-lg border border-cosmic-amber/30 backdrop-blur-md shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cosmic-amber"></div>
              <span className="text-sm text-white">Energy Saving Mode</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="relative z-10 px-6 lg:px-10 py-24 bg-cosmic-blue/30 backdrop-blur-md border-y border-cosmic-teal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Control System</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Control every aspect of your home through our intuitive cosmic interface</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: 'Dashboard', text: 'All your smart home controls in one beautiful interface' },
              { icon: Zap, title: 'Energy', text: 'Monitor and optimize your home\'s energy consumption' },
              { icon: Shield, title: 'Security', text: 'Keep your home secure with real-time monitoring' },
              { icon: Star, title: 'Scenes', text: 'Create and activate custom automation scenes' },
              { icon: Calendar, title: 'Climate', text: 'Control temperature and humidity for perfect comfort' },
              { icon: Activity, title: 'Logs', text: 'Track activity and analyze patterns over time' },
            ].map((feature, i) => (
              <div key={i} className="module-card hover:translate-y-[-5px] transition-all p-6 h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-cosmic-teal/10 flex items-center justify-center mb-4">
                  <feature.icon className="text-cosmic-teal" />
                </div>
                <h3 className="font-orbitron text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 flex-grow">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section id="benefits" className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">Why Choose HomeSphere</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The future of smart home control is here</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://unsplash.com/photos/grey-and-black-laptop-computer-on-surface-za9zUKUQbC8" 
                alt="HomeSphere Interface" 
                className="rounded-xl border border-cosmic-teal/30 shadow-[0_0_30px_rgba(0,229,229,0.15)]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  'Beautiful cosmic interface designed for intuitive interaction',
                  'Comprehensive device compatibility with major smart home brands',
                  'Advanced energy monitoring and optimization features',
                  'Customizable scenes for one-touch control of multiple devices',
                  'Secure remote access from anywhere in the world'
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cosmic-teal/10 flex items-center justify-center">
                      <Check size={14} className="text-cosmic-teal" />
                    </div>
                    <p className="text-white/80">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 px-6 lg:px-10 py-24 bg-cosmic-blue/30 backdrop-blur-md border-y border-cosmic-teal/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Join thousands of satisfied HomeSphere users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "HomeSphere transformed the way I interact with my smart home. Everything is so intuitive and visually stunning.",
                author: "Alex Chen",
                role: "Tech Enthusiast"
              },
              {
                text: "The energy monitoring features helped me reduce my electricity bill by 30%. The interface is beautiful and functional.",
                author: "Sarah Johnson",
                role: "Homeowner"
              },
              {
                text: "Setting up scenes for different activities and times of day has made my home truly smart. The cosmic design is a refreshing change.",
                author: "Michael Reynolds",
                role: "Smart Home Advocate"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-card p-6 border border-white/10 backdrop-blur-lg">
                <p className="text-white/90 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-cosmic-blue flex items-center justify-center border border-cosmic-teal/30">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 px-6 lg:px-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of smart homeowners who've transformed their living spaces with HomeSphere's cosmic interface.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-cosmic-teal hover:bg-cosmic-teal/90 text-black font-medium px-8 py-6">
              <Link to="/">Launch Dashboard <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-10 py-12 bg-cosmic-blue/40 backdrop-blur-md border-t border-cosmic-teal/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="h-8 w-8 orb flex items-center justify-center">
                <span className="text-sm font-orbitron font-bold">HS</span>
              </div>
              <span className="font-orbitron text-lg text-white">HomeSphere</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#features" className="text-white/60 hover:text-white transition-colors text-sm">Features</a>
              <a href="#benefits" className="text-white/60 hover:text-white transition-colors text-sm">Benefits</a>
              <a href="#testimonials" className="text-white/60 hover:text-white transition-colors text-sm">Testimonials</a>
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">Dashboard</Link>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} HomeSphere. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
