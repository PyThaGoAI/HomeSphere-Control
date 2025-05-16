
interface LightingSceneProps {
  name: string;
  onClick?: () => void;
}

const LightingScene = ({ name, onClick }: LightingSceneProps) => {
  return (
    <button 
      onClick={onClick}
      className="p-2 sm:p-3 md:p-4 bg-cosmic-blue/50 rounded-lg text-center hover:bg-cosmic-blue/70 transition-colors"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2 rounded-full bg-cosmic-blue flex items-center justify-center">
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-cosmic-amber opacity-70"></div>
      </div>
      <span className="text-xs sm:text-sm">{name}</span>
    </button>
  );
};

export default LightingScene;
