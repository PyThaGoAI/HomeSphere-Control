import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AudioWaveform, Plus, Play, Save, ArrowRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [savedCommands, setSavedCommands] = useState([
    { id: 1, name: 'Evening Mode', command: 'Activate evening scene and set temperature to 72 degrees' },
    { id: 2, name: 'Morning Routine', command: 'Open blinds, turn on kitchen lights, set temperature to 70 degrees' },
    { id: 3, name: 'Away Mode', command: 'Lock all doors, activate security system, turn off all lights' }
  ]);
  const [commandName, setCommandName] = useState('');
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  const { toast } = useToast();
  const animationRef = useRef<number>();

  // Simulate voice recognition
  useEffect(() => {
    if (isListening) {
      const timer = setTimeout(() => {
        setTranscript('Setting living room lights to 50% and temperature to 72 degrees');
        setIsListening(false);
        
        toast({
          title: "Command Recognized",
          description: "Your voice command has been processed successfully.",
        });
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isListening, toast]);

  // Generate waveform animation
  useEffect(() => {
    if (isListening) {
      const generateWaveform = () => {
        const newData = Array(20).fill(0).map(() => 
          Math.random() * 100
        );
        setWaveformData(newData);
        animationRef.current = requestAnimationFrame(generateWaveform);
      };
      
      generateWaveform();
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      setWaveformData([]);
    }
  }, [isListening]);

  const handleListenToggle = () => {
    setIsListening(prev => !prev);
    if (!isListening) {
      setTranscript('');
    }
  };

  const handleSaveCommand = () => {
    if (commandName && transcript) {
      setSavedCommands(prev => [
        ...prev, 
        { id: prev.length + 4, name: commandName, command: transcript }
      ]);
      setShowSaveForm(false);
      setCommandName('');
      setTranscript('');
      
      toast({
        title: "Command Saved",
        description: `"${commandName}" has been added to your voice commands.`,
      });
    }
  };

  const executeCommand = (commandText: string) => {
    toast({
      title: "Executing Command",
      description: commandText,
    });
  };

  return (
    <DashboardLayout>
      <div className="pb-10 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="font-orbitron text-3xl text-gradient-premium">Voice Control Interface</h1>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              className="border-cosmic-teal/30 bg-cosmic-blue/30 hover:bg-cosmic-blue/50 text-white"
              onClick={() => setShowSaveForm(true)}
              disabled={!transcript || showSaveForm}
            >
              <Save className="mr-2 h-4 w-4" /> Save Command
            </Button>
          </div>
        </div>
        
        {/* Voice Recognition Area */}
        <ModuleCard
          title="Voice Recognition"
          icon={<AudioWaveform className="text-cosmic-teal" size={22} />}
          className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
        >
          <div className="flex flex-col items-center justify-center p-6 min-h-[300px]">
            <div 
              className={cn(
                "w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 mb-8",
                isListening 
                  ? "bg-cosmic-teal/20 border-4 border-cosmic-teal animate-pulse-glow" 
                  : "bg-cosmic-blue/50 border-2 border-white/20"
              )}
            >
              <button 
                onClick={handleListenToggle}
                className="w-32 h-32 rounded-full bg-cosmic-blue flex items-center justify-center hover:scale-105 transition-transform"
                aria-label={isListening ? "Stop listening" : "Start listening"}
              >
                {isListening ? (
                  <MicOff size={48} className="text-cosmic-amber" />
                ) : (
                  <Mic size={48} className="text-cosmic-teal" />
                )}
              </button>
            </div>
            
            {isListening && (
              <div className="flex items-end h-16 space-x-1 mb-4">
                {waveformData.map((height, index) => (
                  <div 
                    key={index}
                    className="w-2 bg-cosmic-teal"
                    style={{ 
                      height: `${height}%`,
                      opacity: height / 100,
                      transition: 'height 0.1s ease-in-out'
                    }}
                  ></div>
                ))}
              </div>
            )}
            
            <div className={cn(
              "w-full mt-4 min-h-[60px] p-4 rounded-lg transition-all duration-300",
              transcript ? "bg-cosmic-blue/40 border border-cosmic-teal/30" : "bg-transparent"
            )}>
              {transcript ? (
                <p className="text-white text-lg text-center">{transcript}</p>
              ) : (
                <p className="text-white/50 text-center">
                  {isListening ? "Listening..." : "Press the microphone button to start"}
                </p>
              )}
            </div>
            
            {showSaveForm && (
              <div className="w-full mt-6 p-4 bg-cosmic-blue/30 rounded-lg border border-cosmic-teal/20">
                <h3 className="font-orbitron text-lg mb-3">Save Command</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="commandName" className="block text-sm text-white/70 mb-1">Command Name</label>
                    <input 
                      type="text" 
                      id="commandName" 
                      value={commandName}
                      onChange={(e) => setCommandName(e.target.value)}
                      className="w-full p-2 bg-cosmic-blue/50 border border-white/20 rounded-md text-white"
                      placeholder="e.g., Evening Mode"
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <Button 
                      variant="outline" 
                      className="border-white/20 hover:bg-cosmic-blue/50"
                      onClick={() => setShowSaveForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSaveCommand}
                      className="bg-cosmic-teal text-black hover:bg-cosmic-teal/80"
                      disabled={!commandName}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ModuleCard>
        
        {/* Saved Voice Commands */}
        <ModuleCard
          title="Voice Command Library"
          icon={<Play className="text-cosmic-amber" size={22} />}
          className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
        >
          <div className="grid gap-4">
            {savedCommands.map((command) => (
              <div 
                key={command.id}
                className="p-4 bg-cosmic-blue/30 rounded-lg border border-white/10 hover:border-cosmic-teal/30 transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-orbitron text-white">{command.name}</h3>
                  <Button
                    size="sm"
                    onClick={() => executeCommand(command.command)}
                    className="bg-cosmic-teal/20 hover:bg-cosmic-teal/40 text-cosmic-teal"
                  >
                    <Play size={16} className="mr-1" />
                    Execute
                  </Button>
                </div>
                <p className="text-white/70 mt-1 text-sm">{command.command}</p>
              </div>
            ))}
            
            <button
              className="p-4 border border-dashed border-white/20 rounded-lg bg-cosmic-blue/20 flex items-center justify-center hover:bg-cosmic-blue/30 hover:border-cosmic-teal/30 transition-all"
              onClick={() => {
                setShowSaveForm(true);
                setTranscript('');
              }}
            >
              <Plus size={20} className="mr-2 text-cosmic-teal" />
              <span>Add New Command</span>
            </button>
          </div>
        </ModuleCard>
      </div>
    </DashboardLayout>
  );
};

export default VoiceControl;
