import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Activity, Users, Award, Clock } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Maria Popescu",
    role: "Medic Specialist Cardiologie",
    experience: "15+ ani",
    specializations: ["Cardiologie", "Ecocardiografie", "Hipertensiune"],
    icon: Heart,
    description: "Specializată în diagnosticarea și tratarea afecțiunilor cardiovasculare, cu peste 10.000 de pacienți tratați cu succes."
  },
  {
    name: "Dr. Andrei Ionescu",
    role: "Medic Specialist Medicină Internă",
    experience: "12+ ani",
    specializations: ["Medicină Internă", "Diabetologie", "Endocrinologie"],
    icon: Stethoscope,
    description: "Expert în medicina internă și gestionarea bolilor cronice, cu focus pe prevenție și îngrijire holistică."
  },
  {
    name: "Dr. Elena Dumitrescu",
    role: "Medic Specialist Pediatrie",
    experience: "10+ ani",
    specializations: ["Pediatrie", "Vaccinări", "Medicină Preventivă"],
    icon: Users,
    description: "Specializată în sănătatea copiilor, de la nou-născuți până la adolescenți, cu abordare blândă și empatică."
  },
  {
    name: "Dr. Mihai Vasilescu",
    role: "Medic Specialist Radiologie",
    experience: "8+ ani",
    specializations: ["Radiologie", "Ecografie", "RMN"],
    icon: Activity,
    description: "Expert în imagistică medicală, oferind diagnostice precise prin ecografii și alte investigații imagistice."
  },
  {
    name: "Asist. Med. Ana Georgescu",
    role: "Asistent Medical Principal",
    experience: "20+ ani",
    specializations: ["Îngrijire Pacient", "Proceduri Medicale", "Suport Terapeutic"],
    icon: Award,
    description: "Profesionist dedicat cu experiență vastă în îngrijirea pacienților și asistență medicală de calitate."
  },
  {
    name: "Soră Med. Cristina Nicolae",
    role: "Soră Medicală",
    experience: "14+ ani",
    specializations: ["Îngrijire Post-Operatorie", "Administrare Medicamente", "Monitorizare Vitală"],
    icon: Clock,
    description: "Specializată în îngrijirea pacienților în toate etapele tratamentului, asigurând confort și recuperare rapidă."
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Echipa Noastră Medicală
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O echipă de profesioniști dedicați sănătății dumneavoastră, cu experiență vastă și pasiune pentru medicină.
            Fiecare membru al echipei noastre este pregătit să ofere cele mai bune servicii medicale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] border-border bg-card">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="mb-4">
                      {member.experience} experiență
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Specializări:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              De Ce Să Alegi Echipa Noastră?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Ani Experiență Combinată</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
                <p className="text-muted-foreground">Pacienți Îngrijiți</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Dedicație pentru Pacienți</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;