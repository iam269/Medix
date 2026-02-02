import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Popescu",
    role: "Pacient",
    content: "Am avut o experiență excelentă la Medix. Personalul este foarte profesionist și atent la nevoile pacienților. Recomand cu căldură!",
    rating: 5,
    avatar: "MP"
  },
  {
    id: 2,
    name: "Ion Andrei",
    role: "Pacient",
    content: "Cel mai bun serviciu medical pe care l-am primit vreodată. Doctorii sunt foarte competenți și explică totul clar.",
    rating: 5,
    avatar: "IA"
  },
  {
    id: 3,
    name: "Elena Dumitrescu",
    role: "Pacient",
    content: "O clinică modernă cu echipamente de ultimă generație. M-am simțit în siguranță și bine îngrijită de la primul moment.",
    rating: 5,
    avatar: "ED"
  },
  {
    id: 4,
    name: "Cristian Marinescu",
    role: "Pacient",
    content: "Procedura a fost simplă și nedureroasă. Mulțumesc întregii echipe Medix pentru profesionalismul lor!",
    rating: 5,
    avatar: "CM"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce spun pacienții noștri
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descoperă experiențele pacienților care au ales Medix pentru îngrijirea lor medicală.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
