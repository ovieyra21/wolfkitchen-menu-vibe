import wolfLogo from "@/assets/wolf-logo.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <div className="mb-8 flex justify-center">
          <img 
            src={wolfLogo} 
            alt="Wolf Kitchen Social Club Logo" 
            className="w-32 h-32 md:w-48 md:h-48 filter drop-shadow-glow"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-wolf-text mb-4 tracking-wide">
          WOLF KITCHEN
        </h1>
        
        <div className="text-xl md:text-2xl text-wolf-orange font-semibold mb-8 tracking-widest">
          SOCIAL CLUB
        </div>
        
        <div className="text-lg md:text-xl text-wolf-text-muted max-w-2xl mx-auto leading-relaxed">
          Healthy Food
        </div>
        
        <div className="mt-12">
          <div className="w-20 h-1 bg-gradient-orange mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};