
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const LandingPage = () => {
  const [features, setFeatures] = useState([
    {
      title: 'Integrated Smart Ecosystem',
      description: 'Control all your smart devices from a single dashboard with intuitive controls.',
      icon: '🔌',
      visible: false
    },
    {
      title: 'Energy Optimization',
      description: 'Reduce energy consumption by up to 35% with AI-powered recommendations.',
      icon: '⚡',
      visible: false
    },
    {
      title: 'Advanced Security',
      description: 'Keep your home safe with facial recognition, motion detection, and 24/7 monitoring.',
      icon: '🔒',
      visible: false
    },
    {
      title: 'Voice Control',
      description: 'Control your home with natural language commands from anywhere in your house.',
      icon: '🔊',
      visible: false
    },
    {
      title: 'Climate Intelligence',
      description: 'Maintain perfect temperature and humidity with predictive climate control.',
      icon: '🌡️',
      visible: false
    },
    {
      title: 'Scene Automation',
      description: 'Create custom scenes for different activities, moods, and times of day.',
      icon: '🎭',
      visible: false
    }
  ]);

  const [testimonials] = useState([
    {
      name: 'Sarah Johnson',
      role: 'Smart Home Enthusiast',
      quote: 'HomeSphere has transformed how I interact with my living space. The interface is intuitive and the automations save me hours every week.',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Michael Chen',
      role: 'Tech Executive',
      quote: 'After trying multiple smart home systems, HomeSphere is the only one that delivered on all its promises. The energy savings alone justified the investment.',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Interior Designer',
      quote: 'My clients are consistently impressed by how HomeSphere enhances their homes without compromising on aesthetics. The scene controls are particularly impressive.',
      avatar: '/placeholder.svg'
    }
  ]);

  const observer = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = featureRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setFeatures(prev => {
              const newFeatures = [...prev];
              newFeatures[index] = { ...newFeatures[index], visible: true };
              return newFeatures;
            });
          }
        }
      });
    }, { threshold: 0.2 });

    featureRefs.current.forEach(ref => {
      if (ref) observer.current.observe(ref);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [features.length]);

  return (
    <div className="min-h-screen bg-cosmic text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
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
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`meteor-${i}`}
              className="absolute h-0.5 w-20 bg-white/30 animate-meteor"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100 + 100}px`,
                animationDelay: `${Math.random() * 10 + i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 cosmic-gradient">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-cosmic-teal orb flex items-center justify-center text-cosmic-blue font-bold text-xl">H</div>
            <span className="ml-3 text-2xl font-orbitron">HomeSphere</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          </nav>
          <div>
            <Link to="/dashboard" className="px-5 py-2 bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue font-medium rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105">
              Launch App
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-orbitron mb-6 leading-tight">
                The Future of <span className="text-gradient-teal">Smart Living</span> Is Here
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                HomeSphere brings unprecedented control and intelligence to your living space, creating a home that anticipates your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard" className="px-6 py-3 bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue font-medium rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105 flex items-center">
                  Get Started
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <a href="#features" className="px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300 hover:scale-105">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cosmic-teal/20 rounded-full blur-3xl -z-10"></div>
              <div className="relative bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl p-2 shadow-xl animate-float">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full bg-cosmic-blue-light/40 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 orb mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl">🏠</span>
                      </div>
                      <p className="text-lg font-medium">HomeSphere Dashboard</p>
                      <p className="text-sm text-white/70">Interactive Preview</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cosmic-amber/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-cosmic-blue/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">Comprehensive Smart Home Control</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              HomeSphere brings together all your devices into one unified ecosystem, providing unprecedented control and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => featureRefs.current[index] = el}
                className={`module-card transform transition-all duration-700 ${
                  feature.visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-orbitron mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">What Our Users Say</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join thousands of homeowners who have transformed their living spaces with HomeSphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-cosmic-blue/50 overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/90 italic">{'"' + testimonial.quote + '"'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-20 bg-cosmic-blue/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron mb-4">Choose Your Plan</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From basic smart home control to advanced automation, we have a plan that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="glass-card p-6 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cosmic-blue/30 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
              <h3 className="text-2xl font-orbitron mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-white/70">/month</span>
              </div>
              <p className="text-white/70 mb-6">Perfect for beginners starting their smart home journey.</p>
              <ul className="space-y-3 mb-8">
                {['Up to 10 devices', 'Basic automation', 'Mobile app access', 'Standard support'].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={18} className="text-cosmic-teal mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dashboard" className="block w-full py-2 bg-white/10 hover:bg-white/20 text-white text-center rounded-lg transition-colors">
                Get Started
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="glass-card p-6 rounded-xl border border-cosmic-teal/30 relative overflow-hidden transform scale-105 shadow-xl shadow-cosmic-teal/10">
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-cosmic-teal text-cosmic-blue font-medium text-xs rounded-full">POPULAR</div>
              <div className="absolute top-0 right-0 w-60 h-60 bg-cosmic-teal/10 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
              <h3 className="text-2xl font-orbitron mb-2">Premium</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$24.99</span>
                <span className="text-white/70">/month</span>
              </div>
              <p className="text-white/70 mb-6">Enhanced features for a fully connected smart home experience.</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited devices',
                  'Advanced automation',
                  'Voice control integration',
                  'Energy optimization',
                  'Premium support',
                  'Custom scenes'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={18} className="text-cosmic-teal mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dashboard" className="block w-full py-2 bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue text-center rounded-lg transition-colors font-medium">
                Get Premium
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card p-6 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cosmic-amber/10 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
              <h3 className="text-2xl font-orbitron mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$49.99</span>
                <span className="text-white/70">/month</span>
              </div>
              <p className="text-white/70 mb-6">Complete solution for large properties and advanced requirements.</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited devices',
                  'Advanced automation',
                  'Multi-property management',
                  'Advanced security features',
                  'Energy optimization',
                  'Priority support',
                  'Custom integration'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={18} className="text-cosmic-teal mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dashboard" className="block w-full py-2 bg-white/10 hover:bg-white/20 text-white text-center rounded-lg transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-cosmic-blue to-cosmic-blue-light border border-cosmic-teal/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cosmic-teal/10 rounded-full translate-x-20 -translate-y-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cosmic-amber/10 rounded-full -translate-x-20 translate-y-20 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-orbitron mb-4">Ready to Transform Your Home?</h2>
                <p className="text-xl text-white/80 max-w-xl">
                  Join thousands of homeowners who have already revolutionized their living spaces with HomeSphere.
                </p>
              </div>
              <Link to="/dashboard" className="px-8 py-4 bg-cosmic-teal hover:bg-cosmic-teal/80 text-cosmic-blue font-medium rounded-lg shadow-lg shadow-cosmic-teal/20 transition-all duration-300 hover:scale-105 flex items-center whitespace-nowrap">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-cosmic-blue/50 border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-cosmic-teal orb flex items-center justify-center text-cosmic-blue font-bold text-sm">H</div>
                <span className="ml-2 text-xl font-orbitron">HomeSphere</span>
              </div>
              <p className="text-white/70">
                The future of smart home technology, bringing intelligence and control to your living space.
              </p>
            </div>
            
            <div>
              <h3 className="font-orbitron mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron mb-4">Resources</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-orbitron mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HomeSphere. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
