
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { Lock, AlertTriangle, Bell, Video, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Security = () => {
  const [activeTab, setActiveTab] = useState("cameras");
  const isMobile = useIsMobile();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-4 md:space-y-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h1 className="text-xl md:text-2xl font-orbitron">Security Hub</h1>
          <div className="flex items-center">
            <div className="px-3 py-1 bg-cosmic-teal/20 rounded-full text-cosmic-teal text-sm flex items-center">
              <Shield size={14} className="mr-1" />
              System Armed
            </div>
          </div>
          <div className="sm:ml-auto flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-0">
            <button className="px-3 sm:px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
              <Lock size={16} className="mr-2" />
              Lock All
            </button>
            <button className="px-3 sm:px-4 py-2 bg-cosmic-amber/30 rounded-lg hover:bg-cosmic-amber/40 transition-colors flex items-center">
              <AlertTriangle size={16} className="mr-2" />
              Emergency
            </button>
          </div>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar border-b border-cosmic-teal/20">
          {[
            { id: "cameras", label: "Cameras", icon: Video },
            { id: "doors", label: "Doors & Windows", icon: Lock },
            { id: "alarms", label: "Alarm System", icon: Bell },
            { id: "history", label: "Activity Log", icon: AlertTriangle }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-3 sm:px-5 py-3 flex-shrink-0 whitespace-nowrap flex items-center ${activeTab === tab.id ? 'border-b-2 border-cosmic-teal text-cosmic-teal' : 'text-white/70 hover:text-white/90'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
        
        {activeTab === "cameras" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {["Front Door", "Back Yard", "Living Room", "Garage"].map((camera) => (
              <div key={camera} className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl overflow-hidden">
                <div className="aspect-video bg-black/50 flex items-center justify-center">
                  <span className="text-white/50">Camera feed: {camera}</span>
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm sm:text-base">{camera}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cosmic-teal animate-pulse"></div>
                      <span className="text-xs text-white/70">Live</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-2 space-x-1 sm:space-x-2">
                    <button className="flex-1 py-1 text-xs bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors">
                      Full Screen
                    </button>
                    <button className="flex-1 py-1 text-xs bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors">
                      Recording
                    </button>
                    <button className="flex-1 py-1 text-xs bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors">
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "doors" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { name: "Front Door", type: "door", status: "locked" },
              { name: "Back Door", type: "door", status: "locked" },
              { name: "Garage Door", type: "door", status: "locked" },
              { name: "Kitchen Window", type: "window", status: "closed" },
              { name: "Living Room Window", type: "window", status: "closed" },
              { name: "Bedroom Window", type: "window", status: "open" }
            ].map((entry) => (
              <div 
                key={entry.name} 
                className={`p-3 sm:p-5 rounded-xl flex items-center justify-between ${
                  entry.status === "locked" || entry.status === "closed" 
                    ? 'bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20' 
                    : 'bg-cosmic-amber/20 backdrop-blur-md border border-cosmic-amber/20'
                }`}
              >
                <div>
                  <h3 className="font-medium text-sm sm:text-base">{entry.name}</h3>
                  <p className="text-xs text-white/70">{entry.type}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`font-medium text-xs sm:text-sm ${
                    entry.status === "locked" || entry.status === "closed" 
                      ? 'text-cosmic-teal' 
                      : 'text-cosmic-amber'
                  }`}>
                    {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                  </span>
                  <button className="text-xs underline mt-1">
                    {entry.status === "locked" || entry.status === "closed" ? "Unlock" : "Lock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === "alarms" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
              <h2 className="font-orbitron text-base md:text-lg mb-4">Alarm System Status</h2>
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cosmic-teal/20 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cosmic-teal animate-pulse"></div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="font-medium text-sm sm:text-base">System Armed</h3>
                  <p className="text-xs sm:text-sm text-white/70">All zones monitored</p>
                </div>
                <button className="ml-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-xs sm:text-sm">
                  Disarm
                </button>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {["Perimeter", "Interior", "Windows", "Motion"].map((zone) => (
                  <div key={zone} className="flex items-center justify-between p-2 sm:p-3 bg-cosmic-blue/20 rounded-lg">
                    <span className="text-xs sm:text-sm">{zone} Sensors</span>
                    <div className="flex items-center">
                      <span className="text-cosmic-teal text-xs mr-2">Active</span>
                      <div className="w-8 h-4 sm:w-10 sm:h-5 bg-cosmic-teal/50 rounded-full flex items-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cosmic-teal ml-0.5"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 md:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
              <h2 className="font-orbitron text-base md:text-lg mb-4">Alarm Settings</h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Entry Delay</span>
                  <select className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded p-1 text-xs sm:text-sm">
                    <option>30 seconds</option>
                    <option>45 seconds</option>
                    <option>60 seconds</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Exit Delay</span>
                  <select className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded p-1 text-xs sm:text-sm">
                    <option>60 seconds</option>
                    <option>90 seconds</option>
                    <option>120 seconds</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Alert Notifications</span>
                  <div className="flex items-center">
                    <span className="text-white/70 text-xs mr-2">Enabled</span>
                    <div className="w-8 h-4 sm:w-10 sm:h-5 bg-cosmic-teal/50 rounded-full flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cosmic-teal ml-0.5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm">Silent Alarm</span>
                  <div className="flex items-center">
                    <span className="text-white/70 text-xs mr-2">Disabled</span>
                    <div className="w-8 h-4 sm:w-10 sm:h-5 bg-cosmic-blue/50 rounded-full flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/70 ml-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "history" && (
          <div className="p-4 md:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-base md:text-lg mb-4">Security Activity Log</h2>
            <div className="space-y-2 sm:space-y-3">
              {[
                { time: "18:45", event: "System armed", user: "John", type: "system" },
                { time: "18:30", event: "Front door unlocked", user: "John", type: "access" },
                { time: "17:22", event: "Motion detected: Back Yard", user: "System", type: "alert" },
                { time: "16:45", event: "System disarmed", user: "Sarah", type: "system" },
                { time: "15:30", event: "Garage door opened", user: "Sarah", type: "access" },
                { time: "14:22", event: "Bedroom window opened", user: "John", type: "access" },
                { time: "12:45", event: "System armed", user: "System", type: "system" }
              ].map((log, index) => (
                <div 
                  key={index} 
                  className={`p-2 sm:p-3 rounded-lg flex items-center ${
                    log.type === "alert" ? 'bg-cosmic-amber/20' : 'bg-cosmic-blue/20'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${
                    log.type === "alert" ? 'bg-cosmic-amber' :
                    log.type === "access" ? 'bg-white/70' : 'bg-cosmic-teal'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="font-medium text-xs sm:text-sm">{log.event}</span>
                      <span className="text-xs text-white/70 sm:ml-2">{log.time}</span>
                    </div>
                    <div className="text-xs text-white/70">By: {log.user}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-xs sm:text-sm">
                Load More History
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Security;
