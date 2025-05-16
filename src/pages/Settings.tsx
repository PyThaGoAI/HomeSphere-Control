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
  Plus,
  Lock,
  Key,
  UserCircle,
  Mail,
  Calendar,
  Eye,
  EyeOff,
  Upload,
  Trash,
  AlertTriangle,
  Save
} from 'lucide-react';

const SettingsSection = ({ title, children }) => {
  return (
    <div className="p-3 sm:p-4 md:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl mb-4 md:mb-6 overflow-hidden w-full">
      <h2 className="font-orbitron text-base sm:text-lg mb-2 sm:mb-3 md:mb-4">{title}</h2>
      <div className="w-full">
        {children}
      </div>
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
            
            {activeTab === "profile" && (
              <div>
                <SettingsSection title="Personal Information">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-cosmic-blue/50 border border-cosmic-teal/30 flex items-center justify-center mb-2">
                          <UserCircle size={64} className="text-cosmic-teal/80" />
                        </div>
                        <button className="px-3 py-1.5 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-sm mt-2">
                          Change Photo
                        </button>
                      </div>
                      
                      <div className="md:w-3/4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-1">First Name</label>
                            <input 
                              type="text" 
                              defaultValue="Alex" 
                              className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">Last Name</label>
                            <input 
                              type="text" 
                              defaultValue="Morgan" 
                              className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm mb-1">Email</label>
                          <div className="flex">
                            <input 
                              type="email" 
                              defaultValue="alex.morgan@example.com" 
                              className="flex-grow bg-cosmic-blue/50 border border-cosmic-teal/30 rounded-l py-2 px-3"
                              readOnly
                            />
                            <button className="px-3 py-2 bg-cosmic-blue/70 hover:bg-cosmic-blue/90 transition-colors rounded-r border-l border-cosmic-teal/30 flex items-center">
                              <Mail size={16} className="mr-1" />
                              <span className="text-sm">Change</span>
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm mb-1">Date of Birth</label>
                          <div className="flex">
                            <div className="flex-grow bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3 flex items-center">
                              <Calendar size={16} className="mr-2 text-cosmic-teal/70" />
                              <span>June 15, 1990</span>
                            </div>
                            <button className="px-3 py-2 bg-cosmic-blue/70 hover:bg-cosmic-blue/90 transition-colors rounded-r border-l border-cosmic-teal/30">
                              <span className="text-sm">Edit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Account Preferences">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Account Type</h3>
                        <p className="text-sm text-white/70">Premium Subscription - Active</p>
                      </div>
                      <button className="px-4 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded-lg text-sm">
                        Manage Plan
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Connected Accounts</h3>
                        <p className="text-sm text-white/70">Link your social and other service accounts</p>
                      </div>
                      <button className="px-4 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded-lg text-sm">
                        Manage
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Account Management</h3>
                        <p className="text-sm text-white/70">Download data or delete account</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded-lg text-sm flex items-center">
                          <Download size={14} className="mr-1" />
                          Data
                        </button>
                        <button className="px-4 py-1.5 bg-red-500/30 hover:bg-red-500/40 transition-colors rounded-lg text-sm text-red-200 flex items-center">
                          <Trash size={14} className="mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "security" && (
              <div>
                <SettingsSection title="Password Management">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Change Password</h3>
                        <p className="text-sm text-white/70">Update your account password</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-white/70 mr-2">Last changed: 45 days ago</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="block text-sm mb-1">Current Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 pl-3 pr-10"
                          />
                          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-teal/70 hover:text-cosmic-teal transition-colors">
                            <Eye size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">New Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 pl-3 pr-10"
                          />
                          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-teal/70 hover:text-cosmic-teal transition-colors">
                            <EyeOff size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Confirm New Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 pl-3 pr-10"
                          />
                          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-teal/70 hover:text-cosmic-teal transition-colors">
                            <EyeOff size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button className="px-4 py-2 bg-cosmic-teal/40 hover:bg-cosmic-teal/50 transition-colors rounded-lg text-white">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Two-Factor Authentication">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-white/70">Add an extra layer of security to your account</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white/70 text-sm mr-2">
                          Disabled
                        </span>
                        <div 
                          className="w-10 h-5 bg-cosmic-blue/50 rounded-full flex items-center cursor-pointer"
                        >
                          <div className="w-4 h-4 rounded-full bg-white/70 ml-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 bg-cosmic-blue/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="bg-cosmic-blue/40 p-2 rounded-full">
                          <Lock size={16} className="text-cosmic-teal" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">SMS Authentication</h4>
                          <p className="text-xs text-white/70 mt-1">Receive verification codes via text message</p>
                        </div>
                        <button className="ml-auto px-3 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded text-xs">
                          Setup
                        </button>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-cosmic-blue/40 p-2 rounded-full">
                          <Key size={16} className="text-cosmic-teal" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Authentication App</h4>
                          <p className="text-xs text-white/70 mt-1">Use an authentication app like Google Authenticator</p>
                        </div>
                        <button className="ml-auto px-3 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded text-xs">
                          Setup
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Login Sessions">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Active Sessions</h3>
                        <p className="text-sm text-white/70">Manage your active login sessions</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { device: "Windows PC", browser: "Chrome", location: "New York, USA", current: true, lastActive: "Current session" },
                        { device: "iPhone 13", browser: "Safari", location: "New York, USA", current: false, lastActive: "2 hours ago" },
                        { device: "MacBook Pro", browser: "Firefox", location: "Boston, USA", current: false, lastActive: "Yesterday" }
                      ].map((session, i) => (
                        <div key={i} className="flex items-center justify-between bg-cosmic-blue/20 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-cosmic-blue/40 p-2 rounded-full mr-3">
                              <Smartphone size={16} className="text-cosmic-teal" />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium text-sm">{session.device} • {session.browser}</h4>
                                {session.current && (
                                  <span className="ml-2 px-1.5 py-0.5 bg-cosmic-teal/20 text-cosmic-teal rounded text-xs">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-white/70 mt-0.5">{session.location} • {session.lastActive}</p>
                            </div>
                          </div>
                          {!session.current && (
                            <button className="px-3 py-1 bg-red-500/30 hover:bg-red-500/40 transition-colors rounded text-xs text-red-200">
                              End
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "appearance" && (
              <div>
                <SettingsSection title="Theme Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Interface Theme</h3>
                        <p className="text-sm text-white/70">Choose your preferred display theme</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="relative cursor-pointer group">
                        <div className="border-2 border-cosmic-teal rounded-lg p-1">
                          <div className="h-24 rounded bg-cosmic-blue/80 overflow-hidden">
                            <div className="p-2">
                              <div className="h-3 w-full bg-cosmic-teal/20 rounded mb-2"></div>
                              <div className="h-3 w-2/3 bg-cosmic-teal/20 rounded"></div>
                            </div>
                          </div>
                          <div className="flex justify-between pt-2 px-2">
                            <span className="text-sm font-medium">Dark</span>
                            <div className="w-4 h-4 rounded-full bg-cosmic-teal flex items-center justify-center">
                              <Check size={10} className="text-black" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-cosmic-teal/10 transition-opacity pointer-events-none"></div>
                      </div>
                      
                      <div className="relative cursor-pointer group">
                        <div className="border-2 border-cosmic-blue/20 hover:border-cosmic-teal/50 transition-colors rounded-lg p-1">
                          <div className="h-24 rounded bg-white overflow-hidden">
                            <div className="p-2">
                              <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                              <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                          <div className="flex justify-between pt-2 px-2">
                            <span className="text-sm font-medium">Light</span>
                            <div className="w-4 h-4 rounded-full bg-cosmic-blue/20"></div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-cosmic-teal/10 transition-opacity pointer-events-none"></div>
                      </div>
                      
                      <div className="relative cursor-pointer group">
                        <div className="border-2 border-cosmic-blue/20 hover:border-cosmic-teal/50 transition-colors rounded-lg p-1">
                          <div className="h-24 rounded overflow-hidden" style={{ background: 'linear-gradient(to bottom, #fff 50%, #121726 50%)' }}>
                            <div className="p-2">
                              <div className="h-3 w-full bg-gray-200/50 rounded mb-2"></div>
                              <div className="h-3 w-2/3 bg-gray-200/50 rounded"></div>
                            </div>
                          </div>
                          <div className="flex justify-between pt-2 px-2">
                            <span className="text-sm font-medium">Auto</span>
                            <div className="w-4 h-4 rounded-full bg-cosmic-blue/20"></div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-cosmic-teal/10 transition-opacity pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Color Schemes">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Accent Color</h3>
                        <p className="text-sm text-white/70">Select your preferred accent color</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                      {[
                        { name: "Cosmic Teal", color: "#00E5E5", selected: true },
                        { name: "Cosmic Purple", color: "#9b87f5", selected: false },
                        { name: "Cosmic Pink", color: "#D946EF", selected: false },
                        { name: "Cosmic Orange", color: "#F97316", selected: false },
                        { name: "Cosmic Blue", color: "#0EA5E9", selected: false },
                        { name: "Cosmic Green", color: "#10B981", selected: false }
                      ].map((scheme) => (
                        <div key={scheme.name} className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full ${scheme.selected ? 'ring-2 ring-offset-4 ring-offset-cosmic-blue/30 ring-white' : ''}`} style={{ background: scheme.color }}></div>
                          <span className="text-xs mt-2">{scheme.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Font Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Font Size</h3>
                        <p className="text-sm text-white/70">Adjust the application font size</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-xs">A</span>
                      <div className="w-full h-1 bg-cosmic-blue/50 rounded-full">
                        <div className="w-2/3 h-full bg-cosmic-teal rounded-full"></div>
                      </div>
                      <span className="text-lg">A</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div>
                        <h3 className="font-medium">Animation Effects</h3>
                        <p className="text-sm text-white/70">Control UI animation and transitions</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white/70 text-sm mr-2">
                          Enabled
                        </span>
                        <div 
                          className="w-10 h-5 bg-cosmic-teal/50 rounded-full flex items-center cursor-pointer"
                        >
                          <div className="w-4 h-4 rounded-full bg-cosmic-teal ml-5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "language" && (
              <div>
                <SettingsSection title="Language Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Interface Language</h3>
                        <p className="text-sm text-white/70">Select your preferred language for the interface</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { code: "en", name: "English (US)", selected: true },
                        { code: "es", name: "Español", selected: false },
                        { code: "fr", name: "Français", selected: false },
                        { code: "de", name: "Deutsch", selected: false },
                        { code: "ja", name: "日本語", selected: false }
                      ].map((lang) => (
                        <div 
                          key={lang.code} 
                          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                            lang.selected ? 'bg-cosmic-teal/20' : 'bg-cosmic-blue/20 hover:bg-cosmic-blue/30'
                          }`}
                        >
                          <span>{lang.name}</span>
                          {lang.selected && (
                            <Check size={16} className="text-cosmic-teal" />
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <h3 className="font-medium">Date & Time Format</h3>
                        <p className="text-sm text-white/70">Set your preferred date and time display format</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm mb-1">Date Format</label>
                        <select className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>MM/DD/YYYY (05/16/2025)</option>
                          <option>DD/MM/YYYY (16/05/2025)</option>
                          <option>YYYY-MM-DD (2025-05-16)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Time Format</label>
                        <select className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>12-hour (2:30 PM)</option>
                          <option>24-hour (14:30)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Regional Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Region</h3>
                        <p className="text-sm text-white/70">Set your geographical region for localized features</p>
                      </div>
                    </div>
                    
                    <div>
                      <select className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                        <option>United States</option>
                        <option>European Union</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Japan</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h3 className="font-medium">Units of Measurement</h3>
                        <p className="text-sm text-white/70">Choose your preferred measurement system</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-teal/20 text-cosmic-teal text-sm">
                          Metric
                        </button>
                        <button className="px-4 py-1.5 rounded-lg bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors text-sm">
                          Imperial
                        </button>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "updates" && (
              <div>
                <SettingsSection title="System Updates">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-cosmic-teal/20 mr-2">
                        <Check size={16} className="text-cosmic-teal" />
                      </div>
                      <div>
                        <h3 className="font-medium">Your system is up to date</h3>
                        <p className="text-sm text-white/70">HomeSphere v2.4.8 • Last checked: Today, 8:45 AM</p>
                      </div>
                      <button className="ml-auto px-4 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded-lg text-sm">
                        Check Now
                      </button>
                    </div>
                    
                    <div className="p-4 bg-cosmic-blue/20 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-grow">
                          <h3 className="font-medium">Automatic Updates</h3>
                          <p className="text-sm text-white/70 mt-1">Allow the system to update automatically when new versions are available</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-white/70 text-sm mr-2">
                            Enabled
                          </span>
                          <div 
                            className="w-10 h-5 bg-cosmic-teal/50 rounded-full flex items-center cursor-pointer"
                          >
                            <div className="w-4 h-4 rounded-full bg-cosmic-teal ml-5"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm mb-1">Update Schedule</label>
                        <select className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>Install immediately</option>
                          <option>Install during inactive hours</option>
                          <option>Ask before installing</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Update History">
                  <div className="space-y-4">
                    {[
                      { version: "v2.4.8", date: "May 10, 2025", changes: "Performance improvements, bug fixes, and new energy monitoring features" },
                      { version: "v2.4.5", date: "April 24, 2025", changes: "Security patch and smart device connectivity enhancements" },
                      { version: "v2.4.0", date: "March 15, 2025", changes: "Major UI overhaul and new spatial mapping capabilities" }
                    ].map((update, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-cosmic-blue/30 p-2 rounded mr-3">
                          <RefreshCcw size={16} className="text-cosmic-teal" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center">
                            <h4 className="font-medium">{update.version}</h4>
                            <span className="text-xs text-white/70 ml-2">{update.date}</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">{update.changes}</p>
                        </div>
                        <button className="ml-2 text-xs text-cosmic-teal underline hover:text-cosmic-teal/80 transition-colors">
                          Details
                        </button>
                      </div>
                    ))}
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Beta Program">
                  <div className="p-4 border border-dashed border-cosmic-teal/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-cosmic-blue/40 mr-3">
                        <AlertTriangle size={16} className="text-cosmic-amber" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">Beta Features Program</h3>
                        <p className="text-sm text-white/70 mt-1">Get early access to new features before they're released</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white/70 text-sm mr-2">
                          Disabled
                        </span>
                        <div 
                          className="w-10 h-5 bg-cosmic-blue/50 rounded-full flex items-center cursor-pointer"
                        >
                          <div className="w-4 h-4 rounded-full bg-white/70 ml-0.5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "network" && (
              <div>
                <SettingsSection title="Network Status">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-cosmic-teal/20 mr-2">
                        <Check size={16} className="text-cosmic-teal" />
                      </div>
                      <div>
                        <h3 className="font-medium">Connected</h3>
                        <p className="text-sm text-white/70">HomeSphere Mesh Network • Good signal strength</p>
                      </div>
                      <button className="ml-auto px-4 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded-lg text-sm">
                        Diagnostics
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="bg-cosmic-blue/20 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Connection Type</h4>
                        <p className="text-lg font-orbitron">Wi-Fi</p>
                      </div>
                      
                      <div className="bg-cosmic-blue/20 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">IP Address</h4>
                        <p className="text-lg font-orbitron">192.168.1.5</p>
                      </div>
                      
                      <div className="bg-cosmic-blue/20 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Strength</h4>
                        <div className="flex items-center">
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-4 bg-cosmic-teal rounded"></div>
                            <div className="w-1.5 h-6 bg-cosmic-teal rounded"></div>
                            <div className="w-1.5 h-8 bg-cosmic-teal rounded"></div>
                            <div className="w-1.5 h-10 bg-cosmic-blue/40 rounded"></div>
                          </div>
                          <span className="ml-2 text-lg font-orbitron">75%</span>
                        </div>
                      </div>
                      
                      <div className="bg-cosmic-blue/20 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-1">Active Devices</h4>
                        <p className="text-lg font-orbitron">12</p>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Wi-Fi Configuration">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Current Network</h3>
                        <p className="text-sm text-white/70">HomeSphere_5G</p>
                      </div>
                      <button className="px-4 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded-lg text-sm">
                        Change
                      </button>
                    </div>
                    
                    <div className="pt-2">
                      <label className="block text-sm mb-1">Advanced Wi-Fi Settings</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <select className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>Channel: Auto</option>
                          <option>Channel: 1</option>
                          <option>Channel: 6</option>
                          <option>Channel: 11</option>
                        </select>
                        
                        <select className="bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>Bandwidth: 80MHz</option>
                          <option>Bandwidth: 40MHz</option>
                          <option>Bandwidth: 20MHz</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Mesh Network">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Mesh Network Nodes</h3>
                        <p className="text-sm text-white/70">Manage your connected mesh network devices</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { name: "Primary Hub", location: "Living Room", status: "Online", strength: "Excellent" },
                        { name: "Node 1", location: "Upstairs Hallway", status: "Online", strength: "Good" },
                        { name: "Node 2", location: "Basement", status: "Online", strength: "Fair" }
                      ].map((node, i) => (
                        <div key={i} className="flex items-center justify-between bg-cosmic-blue/20 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-cosmic-blue/40 p-2 rounded-full mr-3">
                              <WifiIcon size={16} className="text-cosmic-teal" />
                            </div>
                            <div>
                              <h4 className="font-medium">{node.name}</h4>
                              <p className="text-xs text-white/70">{node.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-3 text-right">
                              <div className={`text-sm ${node.status === "Online" ? "text-cosmic-teal" : "text-cosmic-amber"}`}>
                                {node.status}
                              </div>
                              <div className="text-xs text-white/70">{node.strength}</div>
                            </div>
                            <button className="px-3 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded text-xs">
                              Configure
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center pt-2">
                      <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
                        <Plus size={16} className="mr-2" />
                        Add Mesh Node
                      </button>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
            
            {activeTab === "backup" && (
              <div>
                <SettingsSection title="Backup Settings">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Automatic Backups</h3>
                        <p className="text-sm text-white/70">Regularly save your system configuration and data</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white/70 text-sm mr-2">
                          Enabled
                        </span>
                        <div 
                          className="w-10 h-5 bg-cosmic-teal/50 rounded-full flex items-center cursor-pointer"
                        >
                          <div className="w-4 h-4 rounded-full bg-cosmic-teal ml-5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm mb-1">Backup Frequency</label>
                        <select className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>Weekly</option>
                          <option>Daily</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Backup Location</label>
                        <select className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded py-2 px-3">
                          <option>Cloud Storage</option>
                          <option>Local Network</option>
                          <option>External Device</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-cosmic-blue/20 rounded-lg">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-cosmic-blue/40 mr-3">
                          <HardDrive size={16} className="text-cosmic-teal" />
                        </div>
                        <div>
                          <h3 className="font-medium">Last Backup</h3>
                          <p className="text-sm text-white/70 mt-1">May 15, 2025 at 2:30 AM • 45.8 MB</p>
                          <div className="flex items-center mt-2 space-x-2">
                            <button className="px-3 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded text-xs flex items-center">
                              <Download size={12} className="mr-1" />
                              Download
                            </button>
                            <button className="px-3 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded text-xs">
                              Restore
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="Manual Backup">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Create Backup Now</h3>
                        <p className="text-sm text-white/70">Save your current system state manually</p>
                      </div>
                      <button className="px-4 py-2 bg-cosmic-teal/40 hover:bg-cosmic-teal/50 transition-colors rounded-lg text-sm flex items-center">
                        <Save size={16} className="mr-1" />
                        Create Backup
                      </button>
                    </div>
                    
                    <div className="pt-2">
                      <div className="flex items-start space-x-2">
                        <input type="checkbox" className="mt-1" id="backup-settings" defaultChecked />
                        <label htmlFor="backup-settings" className="text-sm">Include system settings</label>
                      </div>
                      
                      <div className="flex items-start space-x-2 mt-2">
                        <input type="checkbox" className="mt-1" id="backup-user" defaultChecked />
                        <label htmlFor="backup-user" className="text-sm">Include user preferences</label>
                      </div>
                      
                      <div className="flex items-start space-x-2 mt-2">
                        <input type="checkbox" className="mt-1" id="backup-automations" defaultChecked />
                        <label htmlFor="backup-automations" className="text-sm">Include scenes and automations</label>
                      </div>
                      
                      <div className="flex items-start space-x-2 mt-2">
                        <input type="checkbox" className="mt-1" id="backup-history" />
                        <label htmlFor="backup-history" className="text-sm">Include historical data (increases backup size)</label>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
                
                <SettingsSection title="System Restore">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Restore Points</h3>
                        <p className="text-sm text-white/70">Previous system states that can be restored</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { date: "May 15, 2025", time: "2:30 AM", type: "Automatic", size: "45.8 MB" },
                        { date: "May 8, 2025", time: "3:15 AM", type: "Automatic", size: "44.2 MB" },
                        { date: "May 1, 2025", time: "10:45 PM", type: "Manual", size: "46.5 MB" },
                      ].map((point, i) => (
                        <div key={i} className="flex items-center justify-between bg-cosmic-blue/20 p-3 rounded-lg">
                          <div className="flex items-center">
                            <div className="bg-cosmic-blue/40 p-2 rounded-full mr-3">
                              <Clock size={16} className="text-cosmic-teal" />
                            </div>
                            <div>
                              <h4 className="font-medium">{point.date} • {point.time}</h4>
                              <p className="text-xs text-white/70">{point.type} backup • {point.size}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="px-3 py-1.5 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors rounded text-xs">
                              Download
                            </button>
                            <button className="px-3 py-1.5 bg-cosmic-teal/30 hover:bg-cosmic-teal/40 transition-colors rounded text-xs">
                              Restore
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border border-dashed border-cosmic-amber/50 bg-cosmic-amber/10 rounded-lg mt-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-cosmic-amber/20 mr-3 mt-1">
                          <AlertTriangle size={16} className="text-cosmic-amber" />
                        </div>
                        <div>
                          <h3 className="font-medium">Restore Warning</h3>
                          <p className="text-sm text-white/70 mt-1">Restoring your system will replace all current settings with those from the backup. This action cannot be undone.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SettingsSection>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
