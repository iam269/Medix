import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-health.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mediu medical profesional" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold text-primary-foreground md:text-6xl lg:text-7xl animate-fade-in">
          Sănătatea Ta, Prioritatea Noastră
        </h1>
        <p className="mb-8 text-xl text-primary-foreground/90 md:text-2xl max-w-3xl mx-auto">
          Servicii medicale de calitate superioară cu o echipă dedicată pentru binele tău
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="bg-card text-card-foreground hover:bg-card/90">
            Programează Consultație
          </Button>
          <Button variant="secondary" size="lg">
            Serviciile Noastre
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="h-2 w-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};
