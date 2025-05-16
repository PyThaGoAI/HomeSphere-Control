
import { useState } from 'react';
import { Lock, Camera, Shield, CheckCircle } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { cn } from '@/lib/utils';

interface SecurityDevice {
  id: string;
  name: string;
  type: 'camera' | 'lock' | 'sensor';
  status: 'secure' | 'unsecure' | 'motion' | 'offline';
  lastEvent?: string;
}

const SecurityModule = () => {
  const [devices, setDevices] = useState<SecurityDevice[]>([
    { id: 'frontdoor', name: 'Front Door', type: 'lock', status: 'secure' },
    { id: 'backdoor', name: 'Back Door', type: 'lock', status: 'secure' },
    { id: 'frontcam', name: 'Front Camera', type: 'camera', status: 'secure' },
    { id: 'backcam', name: 'Back Camera', type: 'camera', status: 'motion', lastEvent: '18:40' },
    { id: 'garage', name: 'Garage Door', type: 'sensor', status: 'secure' },
  ]);

  const toggleLock = (id: string) => {
    setDevices(devices.map(device => {
      if (device.id === id && device.type === 'lock') {
        return {
          ...device,
          status: device.status === 'secure' ? 'unsecure' : 'secure'
        };
      }
      return device;
    }));
  };

  // Check if all security devices are secure
  const allSecure = devices.every(d => d.status === 'secure' || d.status === 'offline');
  const hasMotion = devices.some(d => d.status === 'motion');

  return (
    <ModuleCard 
      title="Security Hub" 
      icon={<Shield className={allSecure ? "text-cosmic-teal" : "text-cosmic-amber"} size={22} />}
      status={allSecure ? 'optimal' : hasMotion ? 'warning' : 'alert'}
      className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "flex items-center px-4 py-1.5 rounded-full",
          allSecure ? "bg-cosmic-teal/20 border border-cosmic-teal/30" : "bg-cosmic-amber/20 border border-cosmic-amber/30"
        )}>
          {allSecure ? 
            <CheckCircle size={18} className="text-cosmic-teal mr-2" /> : 
            <Lock size={18} className="text-cosmic-amber mr-2" />
          }
          <span className="text-base font-medium tracking-wide">
            {allSecure ? "All Secure" : "Attention Needed"}
          </span>
        </div>

        <button className="text-sm font-medium text-cosmic-teal hover:underline transition-all">
          View All Cameras
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {devices.map(device => (
          <div 
            key={device.id} 
            className={cn(
              "flex items-center justify-between p-3.5 rounded-lg border",
              device.status === 'secure' ? "bg-cosmic-blue/40 border-cosmic-teal/10" : 
              device.status === 'motion' ? "bg-cosmic-amber/20 border-cosmic-amber/20" : 
              device.status === 'unsecure' ? "bg-red-500/20 border-red-500/30" : "bg-gray-500/20 border-gray-500/30"
            )}
          >
            <div className="flex items-center">
              {device.type === 'camera' && <Camera size={18} className="mr-2.5" />}
              {device.type === 'lock' && <Lock size={18} className="mr-2.5" />}
              {device.type === 'sensor' && <Shield size={18} className="mr-2.5" />}
              
              <div>
                <div className="text-base font-medium">{device.name}</div>
                <div className="text-xs text-white/70 mt-0.5 font-light">
                  {device.status === 'secure' && 'Secure'}
                  {device.status === 'unsecure' && 'Unlocked'}
                  {device.status === 'motion' && `Motion detected ${device.lastEvent}`}
                  {device.status === 'offline' && 'Offline'}
                </div>
              </div>
            </div>
            
            {device.type === 'lock' && (
              <button 
                onClick={() => toggleLock(device.id)}
                className={cn(
                  "text-sm px-3 py-1.5 rounded-md transition-colors",
                  device.status === 'secure' ? 
                    "bg-cosmic-teal/20 hover:bg-cosmic-teal/30 text-cosmic-teal" : 
                    "bg-cosmic-amber/20 hover:bg-cosmic-amber/30 text-cosmic-amber"
                )}
              >
                {device.status === 'secure' ? 'Unlock' : 'Lock'}
              </button>
            )}
            
            {device.type === 'camera' && (
              <button className="text-sm px-3 py-1.5 rounded-md bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors">
                View
              </button>
            )}
          </div>
        ))}
      </div>
    </ModuleCard>
  );
};

export default SecurityModule;
