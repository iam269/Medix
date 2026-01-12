import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresă",
    details: "Str. Sănătății nr. 123, București",
  },
  {
    icon: Phone,
    title: "Telefon",
    details: "+40 123 456 789",
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@sanatate.ro",
  },
  {
    icon: Clock,
    title: "Program",
    details: "Luni - Vineri: 08:00 - 20:00",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesaj trimis!",
      description: "Vă vom contacta în cel mai scurt timp posibil.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contactează-ne
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suntem aici pentru tine. Trimite-ne un mesaj sau programează o consultație
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Numele tău"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email-ul tău"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mesajul tău"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card"
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Trimite Mesaj
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
