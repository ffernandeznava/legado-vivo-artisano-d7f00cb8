import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Heart, Building2, HandHeart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Registra tu Centro",
    description: "Completa el formulario con los datos de tu asilo o centro de atención.",
  },
  {
    number: "02",
    title: "Evaluación y Capacitación",
    description: "Nuestro equipo evalúa las capacidades y ofrece formación en producción artesanal.",
  },
  {
    number: "03",
    title: "Integración a la Red",
    description: "Tu centro comienza a producir y vender a través de nuestra plataforma.",
  },
];

const benefits = [
  "Ingresos adicionales para residentes y centro",
  "Programa de terapia ocupacional estructurado",
  "Capacitación continua en técnicas artesanales",
  "Materiales y herramientas proporcionadas",
  "Visibilidad y reconocimiento nacional",
  "Comunidad de apoyo entre centros",
];

export function JoinNetworkSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-sand-light to-cream"
      aria-labelledby="join-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <HandHeart className="w-4 h-4" aria-hidden="true" />
            Únete a la Red Nacional
          </span>
          <h2
            id="join-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            ¿Tienes un Asilo o Centro de Atención?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforma tu espacio en un taller de esperanza. Ayuda a tus residentes a generar ingresos dignos mientras participan en terapia ocupacional significativa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process Steps */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Proceso de Incorporación
            </h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold shadow-soft group-hover:scale-105 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="hero" size="lg">
                Registrar Mi Centro
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Benefits Card */}
          <Card variant="elevated" className="sticky top-24">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Beneficios para tu Centro
                </h3>
              </div>

              <ul className="space-y-4 mb-8" role="list">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">
                    +42 centros ya forman parte
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Únete a la comunidad de centros que están transformando la vida de sus residentes a través del trabajo significativo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
