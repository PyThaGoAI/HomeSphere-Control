
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { Users, User, Plus, Clock, Calendar, Mail, Check, X, Edit, Home, ChevronRight } from 'lucide-react';

const Guests = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  const activeGuests = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      email: "sarah.j@example.com", 
      access: ["Lights", "Climate"], 
      expires: "Apr 12, 2025 (3 days)", 
      lastActivity: "1 hour ago"
    },
    { 
      id: 2, 
      name: "Mike Peters", 
      email: "mike.p@example.com", 
      access: ["Lights", "Climate", "Security"], 
      expires: "Apr 15, 2025 (6 days)", 
      lastActivity: "2 days ago"
    }
  ];
  
  const pendingGuests = [
    { 
      id: 3, 
      name: "Alex Rivera", 
      email: "alex.r@example.com", 
      access: ["Lights", "Climate"], 
      expires: "Apr 20, 2025 (11 days)", 
      invited: "Yesterday"
    }
  ];
  
  const expiredGuests = [
    { 
      id: 4, 
      name: "James Wright", 
      email: "james.w@example.com", 
      access: ["Lights"], 
      expired: "Mar 28, 2025", 
      lastActivity: "14 days ago"
    },
    { 
      id: 5, 
      name: "Emma Landry", 
      email: "emma.l@example.com", 
      access: ["Lights", "Climate", "Security"], 
      expired: "Mar 25, 2025", 
      lastActivity: "17 days ago"
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-4 w-full max-w-full">
        <div className="flex flex-wrap items-center justify-between gap-3 w-full">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-cosmic-blue/50 mr-2">
              <Users size={20} className="text-cosmic-teal" />
            </div>
            <h1 className="text-xl sm:text-2xl font-orbitron">Guest Access</h1>
          </div>
          <div>
            <button className="px-3 sm:px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
              <Plus size={18} className="mr-1 sm:mr-2" />
              <span className="whitespace-nowrap">Invite Guest</span>
            </button>
          </div>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar border-b border-cosmic-teal/20">
          {[
            { id: "active", label: "Active", count: activeGuests.length },
            { id: "pending", label: "Pending", count: pendingGuests.length },
            { id: "expired", label: "Expired", count: expiredGuests.length }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-3 sm:px-5 py-2 sm:py-3 flex items-center ${activeTab === tab.id ? 'border-b-2 border-cosmic-teal text-cosmic-teal' : 'text-white/70 hover:text-white/90'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {tab.count > 0 && (
                <div className="ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 rounded-full bg-cosmic-blue/50 text-xs">
                  {tab.count}
                </div>
              )}
            </button>
          ))}
        </div>
        
        {activeTab === "active" && (
          <div className="space-y-4 w-full">
            {activeGuests.map((guest) => (
              <div key={guest.id} className="p-3 sm:p-5 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
                <div className="flex flex-wrap items-center gap-3 sm:gap-0">
                  <div className="p-2 sm:p-3 rounded-full bg-cosmic-teal/20 mr-0 sm:mr-3">
                    <User size={20} className="text-cosmic-teal" />
                  </div>
                  <div className="flex-grow min-w-[180px]">
                    <h3 className="font-medium">{guest.name}</h3>
                    <div className="flex items-center text-sm text-white/70">
                      <Mail size={14} className="mr-1" />
                      {guest.email}
                    </div>
                  </div>
                  <div className="flex ml-auto">
                    <button className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors mr-2">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Access</h4>
                    <div className="flex flex-wrap gap-2">
                      {guest.access.map((item, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-cosmic-blue/40 text-xs">{item}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Expires</h4>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2" />
                      <span className="text-sm">{guest.expires}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Last Activity</h4>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-sm">{guest.lastActivity}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-cosmic-blue/20 rounded-lg">
                  <h4 className="text-xs text-white/70 mb-3">Recent Activity</h4>
                  <div className="space-y-2">
                    {[
                      { action: "Turned on living room lights", time: "1 hour ago" },
                      { action: "Adjusted thermostat to 22°C", time: "2 hours ago" },
                      { action: "Viewed security camera", time: "1 day ago" }
                    ].map((activity, i) => (
                      <div key={i} className="flex flex-wrap justify-between text-sm gap-2">
                        <span className="break-words">{activity.action}</span>
                        <span className="text-white/70 text-xs whitespace-nowrap">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-center">
                    <button className="text-xs text-cosmic-teal hover:underline">
                      View Full Activity Log
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "pending" && (
          <div className="space-y-4 w-full">
            {pendingGuests.map((guest) => (
              <div key={guest.id} className="p-3 sm:p-5 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="p-2 sm:p-3 rounded-full bg-cosmic-amber/20 mr-0 sm:mr-3">
                    <User size={20} className="text-cosmic-amber" />
                  </div>
                  <div className="flex-grow min-w-[180px]">
                    <h3 className="font-medium">{guest.name}</h3>
                    <div className="flex items-center text-sm text-white/70">
                      <Mail size={14} className="mr-1" />
                      {guest.email}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center ml-auto gap-2">
                    <div className="text-xs text-cosmic-amber">Awaiting acceptance</div>
                    <button className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Access</h4>
                    <div className="flex flex-wrap gap-2">
                      {guest.access.map((item, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-cosmic-blue/40 text-xs">{item}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Will Expire</h4>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2" />
                      <span className="text-sm">{guest.expires}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Invited</h4>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-sm">{guest.invited}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-cosmic-blue/20 rounded-lg">
                  <h4 className="text-xs text-white/70 mb-2">Actions</h4>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button className="flex-1 py-2 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                      Resend Invitation
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                      Edit Access
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                      Cancel Invitation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "expired" && (
          <div className="space-y-4 w-full">
            {expiredGuests.map((guest) => (
              <div key={guest.id} className="p-3 sm:p-5 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl opacity-70">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="p-2 sm:p-3 rounded-full bg-white/10 mr-0 sm:mr-3">
                    <User size={20} className="text-white/70" />
                  </div>
                  <div className="flex-grow min-w-[180px]">
                    <h3 className="font-medium">{guest.name}</h3>
                    <div className="flex items-center text-sm text-white/70">
                      <Mail size={14} className="mr-1" />
                      {guest.email}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center ml-auto gap-2">
                    <div className="text-xs text-white/70">Expired {guest.expired}</div>
                    <button className="px-3 py-1.5 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-xs whitespace-nowrap">
                      Renew Access
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Had Access To</h4>
                    <div className="flex flex-wrap gap-2">
                      {guest.access.map((item, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-cosmic-blue/40 text-xs">{item}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Access Expired</h4>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2" />
                      <span className="text-sm">{guest.expired}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-cosmic-blue/20 rounded-lg">
                    <h4 className="text-xs text-white/70 mb-1">Last Activity</h4>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-sm">{guest.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Guests;
