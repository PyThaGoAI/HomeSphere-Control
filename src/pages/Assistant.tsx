
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { Bot, Send, Mic, Lightbulb, ThermometerSnowflake, Lock, Zap, Film } from 'lucide-react';

const Assistant = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'assistant',
      content: 'Hello! I am Sphere AI, your smart home assistant. How can I help you today?' 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add the user message
    const newMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputText
    };
    setMessages([...messages, newMessage]);
    setInputText('');
    
    // Simulate an assistant response after a delay
    setTimeout(() => {
      let responseContent = "I'm processing your request.";
      
      // Simple response logic based on keywords
      const userInput = inputText.toLowerCase();
      if (userInput.includes('light') || userInput.includes('lamp')) {
        responseContent = "I've adjusted the lights for you. Anything else you'd like me to control?";
      } else if (userInput.includes('temperature') || userInput.includes('thermostat')) {
        responseContent = "The temperature has been set. Current indoor temperature is 22.5°C.";
      } else if (userInput.includes('door') || userInput.includes('lock')) {
        responseContent = "I've checked all doors. Front door and back door are locked. Garage door is closed.";
      } else if (userInput.includes('energy') || userInput.includes('power')) {
        responseContent = "Your current energy consumption is 1.2 kW. Today's usage so far is 15.8 kWh.";
      } else if (userInput.includes('scene') || userInput.includes('mode')) {
        responseContent = "I've activated the requested scene. All settings have been adjusted accordingly.";
      }
      
      const assistantMessage = {
        id: messages.length + 2,
        role: 'assistant',
        content: responseContent
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const toggleListening = () => {
    setIsListening(!isListening);
    
    // Simulate voice recognition ending after 3 seconds
    if (!isListening) {
      setTimeout(() => {
        setInputText('What\'s the current temperature?');
        setIsListening(false);
      }, 3000);
    }
  };

  const quickCommands = [
    { icon: Lightbulb, text: "Turn off all lights", color: "bg-cosmic-amber/20", iconColor: "text-cosmic-amber" },
    { icon: ThermometerSnowflake, text: "Set temp to 22°C", color: "bg-cosmic-teal/20", iconColor: "text-cosmic-teal" },
    { icon: Lock, text: "Lock all doors", color: "bg-white/20", iconColor: "text-white" },
    { icon: Zap, text: "Energy report", color: "bg-cosmic-amber/20", iconColor: "text-cosmic-amber" },
    { icon: Film, text: "Movie scene", color: "bg-purple-400/20", iconColor: "text-purple-400" }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6 h-[calc(100vh-7rem)]">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-cosmic-teal/20 mr-2">
              <Bot size={24} className="text-cosmic-teal" />
            </div>
            <h1 className="text-2xl font-orbitron">Sphere AI Assistant</h1>
          </div>
          <div className="ml-auto flex space-x-3">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              History
            </button>
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              Settings
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === 'user' 
                        ? 'bg-cosmic-blue/70 rounded-tr-none' 
                        : 'bg-cosmic-teal/20 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isListening && (
                <div className="flex justify-start">
                  <div className="bg-cosmic-teal/20 rounded-2xl rounded-tl-none p-3 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-cosmic-teal animate-bounce" style={{animationDelay: "0ms"}}></div>
                      <div className="w-2 h-2 rounded-full bg-cosmic-teal animate-bounce" style={{animationDelay: "150ms"}}></div>
                      <div className="w-2 h-2 rounded-full bg-cosmic-teal animate-bounce" style={{animationDelay: "300ms"}}></div>
                    </div>
                    <span className="ml-2 text-sm">Listening...</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-4 border-t border-cosmic-teal/20">
              <div className="flex space-x-2 overflow-x-auto pb-4">
                {quickCommands.map((cmd, index) => (
                  <button 
                    key={index}
                    className={`flex items-center space-x-2 p-2 rounded-full ${cmd.color} whitespace-nowrap`}
                    onClick={() => setInputText(cmd.text)}
                  >
                    <cmd.icon size={14} className={cmd.iconColor} />
                    <span className="text-xs">{cmd.text}</span>
                  </button>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message or command..."
                    className="w-full bg-cosmic-blue/50 border border-cosmic-teal/30 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-cosmic-teal"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-cosmic-blue/70"
                  >
                    <Send size={18} className="text-cosmic-teal" />
                  </button>
                </div>
                <button 
                  onClick={toggleListening}
                  className={`p-3 rounded-full ${isListening ? 'bg-cosmic-teal/30 text-cosmic-teal animate-pulse' : 'bg-cosmic-blue/50 hover:bg-cosmic-blue/70'}`}
                >
                  <Mic size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <h2 className="font-orbitron text-lg mb-4">Things You Can Ask Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-cosmic-blue/20 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Control Your Home</h3>
              <ul className="text-xs text-white/70 space-y-1">
                <li>"Turn off all lights downstairs"</li>
                <li>"Set bedroom temperature to 21°C"</li>
                <li>"Lock the front door"</li>
              </ul>
            </div>
            <div className="p-3 bg-cosmic-blue/20 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Get Information</h3>
              <ul className="text-xs text-white/70 space-y-1">
                <li>"How much energy am I using?"</li>
                <li>"Is the back door locked?"</li>
                <li>"What's the temperature in the living room?"</li>
              </ul>
            </div>
            <div className="p-3 bg-cosmic-blue/20 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Automation</h3>
              <ul className="text-xs text-white/70 space-y-1">
                <li>"Activate movie night scene"</li>
                <li>"Schedule sleep mode for 11 PM"</li>
                <li>"Create a new morning routine"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assistant;
