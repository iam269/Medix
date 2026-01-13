import { Heart, Stethoscope, Activity, Users, Clock, Shield } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Stethoscope,
    title: "Consultații Generale",
    description: "Consultații medicale complete cu specialiști experimentați pentru toate problemele de sănătate",
  },
  {
    icon: Heart,
    title: "Cardiologie",
    description: "Servicii cardiologice avansate pentru monitorizarea și tratarea afecțiunilor cardiovasculare",
  },
  {
    icon: Activity,
    title: "Analize Medicale",
    description: "Laboratoare moderne pentru analize de sânge, urină și alte teste diagnostice",
  },
  {
    icon: Users,
    title: "Medicină de Familie",
    description: "Îngrijire continuă pentru întreaga familie, de la copii la vârstnici",
  },
  {
    icon: Clock,
    title: "Urgențe 24/7",
    description: "Servicii de urgență disponibile non-stop pentru situații medicale neprevăzute",
  },
  {
    icon: Shield,
    title: "Medicina Preventivă",
    description: "Programe de prevenție și screening pentru depistarea precoce a bolilor",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferim o gamă completă de servicii medicale adaptate nevoilor tale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
