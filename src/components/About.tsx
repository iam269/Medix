import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Echipă medicală cu experiență de peste 15 ani",
  "Echipamente medicale de ultimă generație",
  "Tratamente personalizate pentru fiecare pacient",
  "Rezultate rapide și precise la analize",
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Despre Noi
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Suntem o clinică medicală modernă dedicată furnizării de servicii de sănătate de cea mai înaltă calitate. 
              Cu o echipă de specialiști experimentați și echipamente de ultimă generație, ne asigurăm că fiecare pacient 
              primește îngrijirea pe care o merită.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Misiunea noastră este să oferim servicii medicale accesibile, profesionale și personalizate, 
              punând sănătatea și confortul pacienților pe primul loc.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <Button variant="default" size="lg" asChild>
              <Link to="/team">
                Cunoaște Echipa
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
              <div className="h-full w-full rounded-2xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-2">15+</div>
                  <div className="text-xl text-muted-foreground mb-8">Ani de Experiență</div>
                  <div className="text-6xl font-bold text-secondary mb-2">10,000+</div>
                  <div className="text-xl text-muted-foreground mb-8">Pacienți Mulțumiți</div>
                  <div className="text-6xl font-bold text-accent mb-2">50+</div>
                  <div className="text-xl text-muted-foreground">Specialiști Medicali</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
