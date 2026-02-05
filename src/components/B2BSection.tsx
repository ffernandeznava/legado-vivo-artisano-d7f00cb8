import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Package, Users, ArrowRight, CheckCircle2 } from "lucide-react";
 import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Pedidos Personalizados",
    description: "Productos artesanales con tu marca para regalos corporativos, eventos y programas de fidelización.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Impacto ESG Medible",
    description: "Reportes detallados del impacto social generado para tus informes de responsabilidad empresarial.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Alianzas a Largo Plazo",
    description: "Programa de colaboración continua con centros productores y beneficios exclusivos.",
  },
];

const features = [
  "Precios por volumen automatizados",
  "Simulador de producto con tu logo",
  "Etiquetas de cuero grabadas",
  "Packaging de papel semilla",
  "Certificado de impacto social",
  "Atención personalizada B2B",
];

export function B2BSection() {
  return (
    <section
      className="py-20 bg-secondary text-secondary-foreground"
      aria-labelledby="b2b-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground font-medium text-sm mb-6">
              Para Empresas
            </span>
            <h2
              id="b2b-heading"
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Transforma tu Responsabilidad Social en{" "}
              <span className="text-primary-foreground/80">Impacto Real</span>
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Ofrecemos soluciones corporativas que combinan productos artesanales premium con un impacto social verificable. Ideal para regalos empresariales, eventos y programas de RSE.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-foreground">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90" asChild>
              <Link to="/empresas">
              Solicitar Cotización Empresarial
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Features Card */}
          <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-secondary-foreground">
                Incluye Nuestro Servicio B2B
              </h3>
              <ul className="space-y-4" role="list">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-secondary-foreground"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-primary-foreground flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/20">
                <p className="text-sm text-secondary-foreground/80 mb-2">
                  Simulador de Producto
                </p>
                <p className="font-display text-lg font-semibold text-secondary-foreground">
                  Sube tu logo y visualiza cómo quedará en nuestros productos artesanales
                </p>
                <Button variant="terracottaOutline" className="mt-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary" size="sm" asChild>
                  <Link to="/empresas#simulador">
                  Probar Simulador
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
