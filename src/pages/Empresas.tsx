import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Building2,
  Package,
  Users,
  ArrowRight,
  CheckCircle2,
  Gift,
  Award,
  FileText,
  Upload,
  Sparkles,
} from "lucide-react";
 import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Regalos Corporativos Premium",
    description:
      "Productos artesanales únicos para clientes, empleados y eventos especiales. Cada regalo cuenta una historia de impacto.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Impacto ESG medible",
    description:
      "Reportes detallados del impacto social generado para tus informes de responsabilidad empresarial y certificaciones.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Alianzas estratégicas",
    description:
      "Programa de colaboración continua con centros productores y beneficios exclusivos para socios comerciales.",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Personalización total",
    description:
      "Etiquetas de cuero grabadas, packaging de papel semilla, y productos adaptados a tu identidad de marca.",
  },
];

const pricingTiers = [
  { quantity: "50-99", discount: "10%", priceExample: "Desde $85/unidad" },
  { quantity: "100-249", discount: "15%", priceExample: "Desde $80/unidad" },
  { quantity: "250-499", discount: "20%", priceExample: "Desde $75/unidad" },
  { quantity: "500+", discount: "25%+", priceExample: "Cotización especial" },
];

const impactStats = [
  { label: "Empresas Aliadas", value: "47" },
  { label: "Pedidos corporativos/año", value: "380+" },
  { label: "Impacto social generado", value: "$2.3M MXN" },
];

const Empresas = () => {
   const { toast } = useToast();
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast({
       title: "¡Solicitud enviada!",
       description: "Nos pondremos en contacto contigo en menos de 24 horas.",
     });
   };
 
   const scrollToForm = () => {
     document.getElementById("cotizacion-form")?.scrollIntoView({ behavior: "smooth" });
   };
 
   const scrollToSimulator = () => {
     document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
   };
 
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-secondary text-secondary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                Soluciones Empresariales
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforma tu RSE en{" "}
                <span className="text-primary-foreground/80">Impacto real</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl">
                Conecta tu empresa con artesanos mayores o con alguna discapacidad. Ofrece
                regalos corporativos únicos mientras generas un impacto social
                verificable y significativo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90"
                  onClick={scrollToForm}
                >
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => {
                    toast({
                      title: "Descarga en proceso",
                      description: "El catálogo B2B estará disponible próximamente.",
                    });
                  }}
                >
                  Descargar catálogo B2B
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-sand-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="benefits-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                ¿Por qué elegir Legado Vivo?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Más que un proveedor, somos tu aliado en responsabilidad social
                empresarial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} variant="elevated" className="p-8">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section
          className="py-20 bg-gradient-to-br from-sand-light to-cream"
          aria-labelledby="pricing-heading"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="pricing-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Precios por volumen automatizados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A mayor cantidad, mayor descuento y mayor impacto social.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`text-center ${
                    index === 2 ? "ring-2 ring-primary shadow-elevated" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    {index === 2 && (
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                        Más Popular
                      </span>
                    )}
                    <p className="font-display text-3xl font-bold text-foreground mb-2">
                      {tier.quantity}
                    </p>
                    <p className="text-muted-foreground mb-4">unidades</p>
                    <p className="text-2xl font-bold text-primary mb-2">
                      {tier.discount}
                    </p>
                    <p className="text-sm text-muted-foreground">descuento</p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm font-medium text-foreground">
                        {tier.priceExample}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Simulator Teaser */}
        <section id="simulador" className="py-20" aria-labelledby="simulator-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  Simulador de producto
                </span>
                <h2
                  id="simulator-heading"
                  className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
                >
                  Visualiza tu logo en nuestros productos
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nuestra herramienta de simulación te permite previsualizar cómo
                  quedará tu marca en el packaging artesanal: etiquetas de cuero
                  grabadas, madera tallada o papel semilla.
                </p>
                <ul className="space-y-4 mb-8" role="list">
                  {[
                    "Previsualización en tiempo real",
                    "Múltiples materiales disponibles",
                    "Descarga de mockups en alta resolución",
                    "Asesoría de diseño incluida",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" onClick={scrollToSimulator}>
                  Abrir simulador
                  <Upload className="w-5 h-5" aria-hidden="true" />
                </Button>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-card to-sand-light">
                  <CardContent className="p-0">
                    <div className="aspect-square rounded-2xl bg-muted/50 border-2 border-dashed border-primary/30 flex flex-col items-center justify-center">
                      <Upload
                        className="w-16 h-16 text-primary/50 mb-4"
                        aria-hidden="true"
                      />
                      <p className="text-lg font-medium text-foreground mb-2">
                        Arrastra tu logo aquí
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PNG, SVG o JPG (máx. 5MB)
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-elevated">
                  <Award
                    className="w-12 h-12 text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="cotizacion-form"
          className="py-20 bg-secondary text-secondary-foreground"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2
                  id="contact-heading"
                  className="font-display text-3xl md:text-4xl font-bold mb-6"
                >
                  Solicita tu cotización empresarial
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8">
                  Cuéntanos sobre tu proyecto y te prepararemos una propuesta
                  personalizada con opciones de productos, packaging y cronograma de
                  entrega.
                </p>
                <div className="space-y-6">
                  {[
                    "Respuesta en menos de 24 horas",
                    "Asesoría personalizada sin costo",
                    "Muestras gratuitas para pedidos +100 unidades",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-primary-foreground flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
                <CardContent className="p-8">
                  <form className="space-y-6" aria-label="Formulario de cotización" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-secondary-foreground">
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          placeholder="Nombre de la empresa"
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact" className="text-secondary-foreground">
                          Contacto
                        </Label>
                        <Input
                          id="contact"
                          placeholder="Tu nombre"
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-secondary-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@empresa.com"
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-secondary-foreground">
                          Cantidad Estimada
                        </Label>
                        <Input
                          id="quantity"
                          type="number"
                          placeholder="100"
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-secondary-foreground">
                        Detalles del proyecto
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos sobre tu evento, productos de interés, fechas..."
                        rows={4}
                        className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full bg-primary-foreground text-secondary hover:bg-primary-foreground/90"
                    >
                      Enviar solicitud
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Empresas;
