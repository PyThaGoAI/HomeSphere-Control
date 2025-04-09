import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell, 
  Palette, 
  Globe, 
  RefreshCcw,
  WifiIcon,
  Clock,
  Download,
  HardDrive,
  Check,
  Smartphone,
  Plus
} from 'lucide-react';

const SettingsSection = ({ title, children }) => {
  return (
    <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl mb-6">
      <h2 className="font-orbitron text-lg mb-4">{title}</h2>
      {children}
    </div>
  );
};

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [notifications, setNotifications] = useState({
    securityAlerts: true,
    deviceOffline: true,
    energyReports: true,
    motionDetection: false,
    systemUpdates: true,
    guestActivity: true
  });
  
  const handleNotificationChange = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-cosmic-blue/50 mr-2">
              <SettingsIcon size={20} className="text-cosmic-teal" />
            </div>
            <h1 className="text-2xl font-orbitron">Settings</h1>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64">
            <div className="p-4 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl sticky top-6">
              <nav className="space-y-1">
                {[
                  { id: 'general', label: 'General', icon: SettingsIcon },
                  { id: 'profile', label: 'Profile', icon: User },
                  { id: 'security', label: 'Security', icon: Shield },
                  { id: 'notifications', label: 'Notifications', icon: Bell },
                  { id: 'appearance', label: 'Appearance', icon: Palette },
                  { id: 'language', label: 'Language', icon: Globe },
                  { id: 'updates', label: 'Updates', icon: RefreshCcw },
                  { id: 'network', label: 'Network', icon: WifiIcon },
                  { id: 'devices', label: 'Devices', icon: Smartphone },
                  { id: 'backup', label: 'Backup & Restore', icon: HardDrive }
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${
                      activeTab === item.id ? 'bg-cosmic-teal/20 text-cosmic-teal' : 'hover:bg-cosmic-blue/50'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <item.icon size={18} className="mr-2" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          <div className="flex-1">
            {activeTab === "general" && (
              <div>
                <SettingsSection title="System Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">System Name</h3>
                        <p className="text-sm text-white/70">Change the name of your HomeSphere system</p>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="text" 
                          defaultValue="HomeSphere Prime" 
                          className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-1.5 px-3 text-sm w-56"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Temperature Unit</h3>
                        <p className="text-sm text-white/70">Select your preferred temperature unit</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-teal/20 text-cosmic-teal text-sm">
                          Celsius (°C)
                        </button>
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                          Fahrenheit (°F)
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Time Format</h3>
                        <p className="text-sm text-white/70">Choose 12 or 24-hour time format</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-teal/20 text-cosmic-teal text-sm">
                          12 hour
                        </button>
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                          24 hour
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Auto Lock</h3>
                        <p className="text-sm text-white/70">Lock the interface after period of inactivity</p>
                      </div>
                      <div className="flex items-center">
                        <select className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-1.5 px-3 text-sm">
                          <option>Never</option>
                          <option>5 minutes</option>
                          <option selected>15 minutes</option>
                          <option>30 minutes</option>
                          <option>1 hour</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Data Privacy</h3>
                        <p className="text-sm text-white/70">Manage data collection and privacy settings</p>
                      </div>
                      <div>
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Location Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Time Zone</h3>
                        <p className="text-sm text-white/70">Current time zone for scheduling and automation</p>
                      </div>
                      <div className="flex items-center">
                        <select className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-1.5 px-3 text-sm w-56">
                          <option>Pacific Time (UTC−08:00)</option>
                          <option selected>Eastern Time (UTC−05:00)</option>
                          <option>Central European Time (UTC+01:00)</option>
                          <option>Japan Standard Time (UTC+09:00)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Home Location</h3>
                        <p className="text-sm text-white/70">Set your home address for weather and location-based services</p>
                      </div>
                      <div>
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                          Edit Location
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Advanced Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Developer Mode</h3>
                        <p className="text-sm text-white/70">Enable developer options and API access</p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <span className="text-white/70 text-sm mr-2">Disabled</span>
                          <div className="w-10 h-5 bg-cosmic-blue/50 rounded-full flex items-center">
                            <div className="w-4 h-4 rounded-full bg-white/70 ml-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Reset System</h3>
                        <p className="text-sm text-white/70">Reset your HomeSphere to factory settings</p>
                      </div>
                      <div>
                        <button className="px-4 py-1.5 rounded-lg bg-red-500/30 hover:bg-red-500/40 transition-colors text-sm text-red-200">
                          Reset
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "notifications" && (
              <div>
                <SettingsSection title="Notification Settings">
                  <div className="space-y-4">
                    {[
                      { key: "securityAlerts", label: "Security Alerts", desc: "Door/window openings, motion detection, alarms" },
                      { key: "deviceOffline", label: "Device Offline", desc: "Notifications when devices lose connection" },
                      { key: "energyReports", label: "Energy Reports", desc: "Daily and weekly energy consumption reports" },
                      { key: "motionDetection", label: "Motion Detection", desc: "All motion sensor activations" },
                      { key: "systemUpdates", label: "System Updates", desc: "Software updates and maintenance notifications" },
                      { key: "guestActivity", label: "Guest Activity", desc: "When guests access your home systems" },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{item.label}</h3>
                          <p className="text-sm text-white/70">{item.desc}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-white/70 text-sm mr-2">
                            {notifications[item.key] ? "Enabled" : "Disabled"}
                          </span>
                          <div 
                            className={`w-10 h-5 rounded-full flex items-center cursor-pointer ${
                              notifications[item.key] ? 'bg-cosmic-teal/50' : 'bg-cosmic-blue/50'
                            }`}
                            onClick={() => handleNotificationChange(item.key)}
                          >
                            <div 
                              className={`w-4 h-4 rounded-full transition-all ${
                                notifications[item.key] ? 'bg-cosmic-teal ml-5' : 'bg-white/70 ml-0.5'
                              }`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Notification Channels">
                  <div className="space-y-4">
                    {[
                      { channel: "Mobile App", status: "Connected" },
                      { channel: "Email", status: "Connected" },
                      { channel: "SMS", status: "Not connected" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-medium">{item.channel}</span>
                          {item.status === "Connected" && (
                            <span className="ml-2 px-2 py-0.5 bg-cosmic-teal/20 text-cosmic-teal rounded-full text-xs flex items-center">
                              <Check size={10} className="mr-1" />
                              {item.status}
                            </span>
                          )}
                          {item.status === "Not connected" && (
                            <span className="ml-2 px-2 py-0.5 bg-cosmic-blue/30 text-white/70 rounded-full text-xs">
                              {item.status}
                            </span>
                          )}
                        </div>
                        <button className="px-3 py-1 text-xs bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors">
                          {item.status === "Connected" ? "Configure" : "Connect"}
                        </button>
                      </div>
                    ))}
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "devices" && (
              <SettingsSection title="Connected Devices">
                <div className="space-y-4">
                  {[
                    { name: "Living Room Motion Sensor", type: "Motion Sensor", status: "Online", battery: "95%" },
                    { name: "Kitchen Smart Lights", type: "Light Control", status: "Online", battery: "N/A" },
                    { name: "Front Door Lock", type: "Smart Lock", status: "Online", battery: "65%" },
                    { name: "Bedroom Thermostat", type: "Climate Control", status: "Online", battery: "78%" },
                    { name: "Garage Door Opener", type: "Access Control", status: "Offline", battery: "20%" },
                  ].map((device, i) => (
                    <div key={i} className="p-4 bg-cosmic-blue/20 rounded-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{device.name}</h3>
                        <p className="text-sm text-white/70">{device.type}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex flex-col items-end mr-6">
                          <div className={`flex items-center ${device.status === 'Online' ? 'text-cosmic-teal' : 'text-cosmic-amber'}`}>
                            <div className={`w-2 h-2 rounded-full mr-1 ${device.status === 'Online' ? 'bg-cosmic-teal' : 'bg-cosmic-amber'}`}></div>
                            <span className="text-sm">{device.status}</span>
                          </div>
                          {device.battery !== "N/A" && (
                            <div className="text-xs text-white/70">
                              Battery: {device.battery}
                            </div>
                          )}
                        </div>
                        <button className="px-3 py-1.5 bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors text-sm">
                          Settings
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
                    <Plus size={16} className="mr-2" />
                    Add New Device
                  </button>
                </div>
              </SettingsSection>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
