
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { FileText, Filter, Download, Search, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const LogItem = ({ log, isExpanded, toggleExpand }) => {
  const getIcon = () => {
    switch (log.category) {
      case 'security': return <div className="w-3 h-3 rounded-full bg-cosmic-amber"></div>;
      case 'climate': return <div className="w-3 h-3 rounded-full bg-cosmic-teal"></div>;
      case 'lights': return <div className="w-3 h-3 rounded-full bg-white/80"></div>;
      case 'energy': return <div className="w-3 h-3 rounded-full bg-green-400"></div>;
      case 'system': return <div className="w-3 h-3 rounded-full bg-purple-400"></div>;
      default: return <div className="w-3 h-3 rounded-full bg-white/50"></div>;
    }
  };

  return (
    <div className="mb-2">
      <div 
        className="p-4 bg-cosmic-blue/20 rounded-lg cursor-pointer hover:bg-cosmic-blue/30 transition-colors"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <div className="mr-3">
            {getIcon()}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-medium">{log.event}</span>
              <div className="text-xs text-white/70">{log.time}</div>
            </div>
            <div className="text-xs text-white/70 mt-0.5">
              {log.source} • {log.category.charAt(0).toUpperCase() + log.category.slice(1)}
            </div>
          </div>
          <div className="ml-2">
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-1 p-4 bg-cosmic-blue/10 rounded-lg text-sm space-y-2">
          <div>
            <span className="text-white/70">Details:</span> {log.details}
          </div>
          <div>
            <span className="text-white/70">User:</span> {log.user}
          </div>
          <div>
            <span className="text-white/70">Device ID:</span> {log.deviceId}
          </div>
          {log.previousValue && (
            <div>
              <span className="text-white/70">Previous Value:</span> {log.previousValue}
            </div>
          )}
          {log.newValue && (
            <div>
              <span className="text-white/70">New Value:</span> {log.newValue}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Logs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('today');
  const [selectedCategories, setSelectedCategories] = useState(['security', 'climate', 'lights', 'energy', 'system']);
  const [expandedLogs, setExpandedLogs] = useState([]);

  const toggleLogExpand = (logId) => {
    if (expandedLogs.includes(logId)) {
      setExpandedLogs(expandedLogs.filter(id => id !== logId));
    } else {
      setExpandedLogs([...expandedLogs, logId]);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const logs = [
    { 
      id: 1, 
      event: 'Front door unlocked', 
      time: '19:45:22',
      date: 'Today', 
      source: 'Front Door Lock',
      category: 'security',
      details: 'Front door was unlocked using digital code',
      user: 'John',
      deviceId: 'lock_front_001',
      previousValue: 'Locked',
      newValue: 'Unlocked'
    },
    { 
      id: 2, 
      event: 'Living room temperature changed', 
      time: '19:30:05',
      date: 'Today', 
      source: 'Thermostat',
      category: 'climate',
      details: 'Living room temperature set point changed via app',
      user: 'Sarah',
      deviceId: 'therm_living_001',
      previousValue: '21°C',
      newValue: '22.5°C'
    },
    { 
      id: 3, 
      event: 'Kitchen lights turned on', 
      time: '19:15:33',
      date: 'Today', 
      source: 'Kitchen Lighting',
      category: 'lights',
      details: 'Kitchen ceiling lights activated via motion sensor',
      user: 'System',
      deviceId: 'light_kitchen_array_001',
      previousValue: 'Off',
      newValue: 'On (100%)'
    },
    { 
      id: 4, 
      event: 'Energy usage spike detected', 
      time: '18:45:10',
      date: 'Today', 
      source: 'Energy Monitor',
      category: 'energy',
      details: 'Unusual energy consumption detected in garage',
      user: 'System',
      deviceId: 'energy_monitor_001',
      previousValue: '0.6 kW',
      newValue: '2.1 kW'
    },
    { 
      id: 5, 
      event: 'System update installed', 
      time: '17:30:00',
      date: 'Today', 
      source: 'System',
      category: 'system',
      details: 'HomeSphere firmware updated to version 2.4.1',
      user: 'System',
      deviceId: 'hub_main_001'
    },
    { 
      id: 6, 
      event: 'Garage door opened', 
      time: '16:15:42',
      date: 'Today', 
      source: 'Garage Door Controller',
      category: 'security',
      details: 'Garage door opened via remote control',
      user: 'John',
      deviceId: 'garage_door_001',
      previousValue: 'Closed',
      newValue: 'Open'
    },
    { 
      id: 7, 
      event: 'Movie night scene activated', 
      time: '20:30:18',
      date: 'Yesterday', 
      source: 'Scene Manager',
      category: 'system',
      details: 'Movie night scene activated via voice command',
      user: 'Sarah',
      deviceId: 'scene_manager_001'
    },
  ];

  const filteredLogs = logs.filter(log => {
    // Filter by search query
    if (searchQuery && !log.event.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by date range
    if (dateRange === 'today' && log.date !== 'Today') {
      return false;
    }
    
    // Filter by category
    if (!selectedCategories.includes(log.category)) {
      return false;
    }
    
    return true;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-cosmic-blue/50 mr-2">
              <FileText size={20} className="text-cosmic-teal" />
            </div>
            <h1 className="text-2xl font-orbitron">Activity Logs</h1>
          </div>
          <div className="ml-auto flex space-x-3">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
              <Filter size={16} className="mr-2" />
              Advanced Filter
            </button>
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        
        <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search size={16} className="text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-cosmic-teal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="flex items-center bg-cosmic-blue/50 border border-cosmic-teal/30 rounded-lg py-2 px-3">
                <Calendar size={16} className="text-white/70 mr-2" />
                <select 
                  className="bg-transparent text-sm focus:outline-none"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="week">Past Week</option>
                  <option value="month">Past Month</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { id: 'security', label: 'Security', color: 'bg-cosmic-amber' },
              { id: 'climate', label: 'Climate', color: 'bg-cosmic-teal' },
              { id: 'lights', label: 'Lights', color: 'bg-white/80' },
              { id: 'energy', label: 'Energy', color: 'bg-green-400' },
              { id: 'system', label: 'System', color: 'bg-purple-400' }
            ].map((category) => (
              <button 
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`px-3 py-1.5 rounded-full text-xs flex items-center ${
                  selectedCategories.includes(category.id) ? 'bg-cosmic-blue/70 border border-cosmic-teal/40' : 'bg-cosmic-blue/30 border border-cosmic-teal/10'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${category.color} mr-2`}></div>
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="space-y-2">
            {filteredLogs.map((log) => (
              <LogItem 
                key={log.id} 
                log={log} 
                isExpanded={expandedLogs.includes(log.id)}
                toggleExpand={() => toggleLogExpand(log.id)}
              />
            ))}
            
            {filteredLogs.length === 0 && (
              <div className="text-center py-8 text-white/70">
                No logs found matching your filter criteria
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-sm">
              Load More
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="text-sm font-medium mb-3">Most Active Devices</h2>
            <div className="space-y-2">
              {[
                { name: 'Living Room Lights', count: 24 },
                { name: 'Front Door Lock', count: 18 },
                { name: 'Main Thermostat', count: 12 }
              ].map((device, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span>{device.name}</span>
                  <span className="text-cosmic-teal">{device.count}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="text-sm font-medium mb-3">Activity by Category</h2>
            <div className="space-y-2">
              {[
                { name: 'Security', count: 35, color: 'bg-cosmic-amber' },
                { name: 'Lights', count: 28, color: 'bg-white/80' },
                { name: 'Climate', count: 15, color: 'bg-cosmic-teal' }
              ].map((category, i) => (
                <div key={i} className="flex items-center text-sm">
                  <div className={`w-2 h-2 rounded-full ${category.color} mr-2`}></div>
                  <span>{category.name}</span>
                  <div className="ml-3 flex-1 h-1.5 bg-cosmic-blue/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${category.color}`}
                      style={{ width: `${(category.count / 35) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-2">{category.count}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="text-sm font-medium mb-3">User Activity</h2>
            <div className="space-y-2">
              {[
                { name: 'System', count: 42 },
                { name: 'John', count: 23 },
                { name: 'Sarah', count: 19 }
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span>{user.name}</span>
                  <span className="text-cosmic-teal">{user.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Logs;
