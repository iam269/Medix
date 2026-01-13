import { useParams } from "react-router-dom";
import { Stethoscope, Activity, Shield, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceDetails = {
  "consultatii-medicale": {
    title: "Consultații Medicale",
    icon: Stethoscope,
    description: "Consultații medicale complete cu specialiști experimentați pentru toate problemele de sănătate. Oferim îngrijire personalizată și diagnostic precis.",
    details: [
      "Consultații generale pentru adulți și copii",
      "Examinări fizice complete",
      "Diagnostic și tratament pentru afecțiuni comune",
      "Recomandări pentru stil de viață sănătos",
      "Monitorizarea stării de sănătate pe termen lung"
    ],
    price: "Începând de la 150 RON"
  },
  "analize-de-sange": {
    title: "Analize de Sânge",
    icon: Activity,
    description: "Laboratoare moderne pentru analize de sânge și alte teste diagnostice. Rezultate rapide și precise pentru un diagnostic corect.",
    details: [
      "Analize de sânge complete (hemoleucograma)",
      "Teste biochimice (glicemie, colesterol, etc.)",
      "Markeri inflamatori și autoimuni",
      "Teste hormonale",
      "Rezultate disponibile în 24-48 ore"
    ],
    price: "Începând de la 50 RON"
  },
  "vaccinari": {
    title: "Vaccinări",
    icon: Shield,
    description: "Servicii de vaccinare pentru toate vârstele, conform schemei naționale și internaționale de vaccinare.",
    details: [
      "Vaccinuri pentru copii conform calendarului național",
      "Vaccinuri pentru adulți (gripă, pneumonie, etc.)",
      "Vaccinuri de călătorie",
      "Consultanță privind schema de vaccinare",
      "Administrare sigură și monitorizare post-vaccinare"
    ],
    price: "Conform schemei naționale sau prețuri specifice"
  },
  "ecografii": {
    title: "Ecografii",
    icon: Heart,
    description: "Ecografii diagnostice de înaltă calitate pentru evaluarea organelor interne și a sarcinii.",
    details: [
      "Ecografie abdominală",
      "Ecografie tiroidiană",
      "Ecografie cardiacă (ecocardiografie)",
      "Ecografie obstetricală (sarcină)",
      "Ecografie musculo-scheletică"
    ],
    price: "Începând de la 200 RON"
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Serviciu Negăsit</h1>
          <p className="text-muted-foreground">Serviciul solicitat nu există.</p>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
              <Icon className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ce Include</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informații Practice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Preț</h4>
                  <p className="text-muted-foreground">{service.price}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Programare</h4>
                  <p className="text-muted-foreground">Programare telefonică sau online</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact</h4>
                  <p className="text-muted-foreground">+40 123 456 789</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;