import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  HandHeart,
  Building2,
  CheckCircle2,
  ArrowRight,
  Users,
  Palette,
  Package,
  Award,
  Phone,
  Mail,
  Clock,
  Heart,
} from "lucide-react";
 import { Link } from "react-router-dom";
 import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    number: "01",
    title: "Registra tu centro",
    description:
      "Completa el formulario con los datos de tu asilo o centro de atención. Nuestro equipo se pondrá en contacto contigo.",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Evaluación y visita",
    description:
      "Visitamos tu centro para conocer las capacidades, espacios disponibles e intereses de los residentes.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Capacitación inicial",
    description:
      "Ofrecemos formación en técnicas artesanales adaptadas, manejo de materiales y estándares de calidad.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Integración a la red",
    description:
      "Tu centro comienza a producir y vender a través de nuestra plataforma, recibiendo ingresos directos.",
    icon: <Package className="w-6 h-6" />,
  },
];

const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Ingresos dignos",
    description: "Los residentes reciben el 60% del precio de venta, el centro recibe el 20%.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Terapia ocupacional",
    description: "Programa estructurado que mejora la salud mental y física de los participantes.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Materiales incluidos",
    description: "Proporcionamos materiales, herramientas y empaques sin costo inicial.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Capacitación continua",
    description: "Talleres mensuales para desarrollar nuevas habilidades y productos.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Reconocimiento",
    description: "Visibilidad nacional para tu centro y certificación de centro productor.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Comunidad de apoyo",
    description: "Red de más de 42 centros compartiendo experiencias y mejores prácticas.",
  },
];

const requirements = [
  "Ser asilo, centro de día o institución de atención a adultos mayores o personas con discapacidad",
  "Contar con espacio mínimo para taller (15m² aproximadamente)",
  "Tener al menos 5 residentes interesados en participar",
  "Designar un coordinador del programa en tu centro",
  "Compromiso de seguir los estándares de calidad de Legado Vivo",
];

const stats = [
  { value: "42+", label: "Centros en la red" },
  { value: "847", label: "Artesanos activos" },
  { value: "94%", label: "Satisfacción de centros" },
  { value: "3 meses", label: "Tiempo de integración" },
];

const Unete = () => {
   const { toast } = useToast();
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast({
       title: "¡Registro enviado!",
       description: "Nos pondremos en contacto contigo en menos de 48 horas.",
     });
   };
 
   const scrollToForm = () => {
     document.getElementById("registro-form")?.scrollIntoView({ behavior: "smooth" });
   };
 
   const handleScheduleCall = () => {
     toast({
       title: "Agendar llamada",
       description: "Próximamente habilitaremos el sistema de agendamiento.",
     });
   };
 
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-sand-light">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <HandHeart className="w-4 h-4" aria-hidden="true" />
                Únete a la Red nacional
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transforma tu centro en un{" "}
                <span className="text-primary">taller de esperanza</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                ¿Tienes un asilo o centro de atención? Ayuda a tus residentes a
                generar ingresos dignos mientras participan en terapia ocupacional
                significativa a través de la producción artesanal.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" onClick={scrollToForm}>
                  Registrar mi centro
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleScheduleCall}>
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Agendar llamada
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-secondary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20" aria-labelledby="process-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="process-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Proceso de incorporación
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un camino claro y acompañado hacia la integración de tu centro a
                nuestra red.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card variant="elevated" className="h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold shadow-soft">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          className="py-20 bg-gradient-to-br from-sand-light to-cream"
          aria-labelledby="benefits-heading"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="benefits-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Beneficios para tu centro
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Más que un programa, una transformación integral.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20" aria-labelledby="requirements-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  id="requirements-heading"
                  className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
                >
                  Requisitos para participar
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Buscamos centros comprometidos con el bienestar de sus residentes
                  y con ganas de formar parte de esta red de impacto.
                </p>
                <ul className="space-y-4" role="list">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card variant="elevated" className="p-4">
                <CardContent className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    ¿No cumples todos los requisitos?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    No te preocupes. Podemos ayudarte a preparar tu centro para el
                    programa. Agenda una llamada exploratoria y evaluemos juntos las
                    posibilidades.
                  </p>
                  <Button variant="outline" className="w-full" onClick={handleScheduleCall}>
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Agendar llamada exploratoria
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section
          id="registro-form"
          className="py-20 bg-secondary text-secondary-foreground"
          aria-labelledby="form-heading"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  id="form-heading"
                  className="font-display text-3xl md:text-4xl font-bold mb-4"
                >
                  Registra tu centro
                </h2>
                <p className="text-lg text-secondary-foreground/80">
                  Completa el formulario y nos pondremos en contacto contigo en
                  menos de 48 horas.
                </p>
              </div>

              <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
                <CardContent className="p-8">
                  <form className="space-y-6" aria-label="Formulario de registro" onSubmit={handleSubmit}>
                    {/* Center Info */}
                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-secondary-foreground border-b border-secondary-foreground/20 pb-2">
                        Información del centro
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="centerName"
                            className="text-secondary-foreground"
                          >
                            Nombre del centro *
                          </Label>
                          <Input
                            id="centerName"
                            placeholder="Ej: Asilo San José"
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="centerType"
                            className="text-secondary-foreground"
                          >
                            Tipo de centro *
                          </Label>
                          <Input
                            id="centerType"
                            placeholder="Asilo, Centro de Día, etc."
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="state"
                            className="text-secondary-foreground"
                          >
                            Estado *
                          </Label>
                          <Input
                            id="state"
                            placeholder="Ej: Jalisco"
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="city"
                            className="text-secondary-foreground"
                          >
                            Ciudad *
                          </Label>
                          <Input
                            id="city"
                            placeholder="Ej: Guadalajara"
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="residents"
                          className="text-secondary-foreground"
                        >
                          Número aproximado de residentes
                        </Label>
                        <Input
                          id="residents"
                          type="number"
                          placeholder="50"
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-secondary-foreground border-b border-secondary-foreground/20 pb-2">
                        Información de contacto
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="contactName"
                            className="text-secondary-foreground"
                          >
                            Nombre del contacto *
                          </Label>
                          <Input
                            id="contactName"
                            placeholder="Tu nombre completo"
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="role"
                            className="text-secondary-foreground"
                          >
                            Cargo
                          </Label>
                          <Input
                            id="role"
                            placeholder="Ej: Director/a, Coordinador/a"
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-secondary-foreground"
                          >
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@centro.org"
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-secondary-foreground"
                          >
                            Teléfono *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+52 33 1234 5678"
                            required
                            className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-4">
                      <h3 className="font-display text-lg font-semibold text-secondary-foreground border-b border-secondary-foreground/20 pb-2">
                        Información adicional
                      </h3>
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-secondary-foreground"
                        >
                          ¿Por qué te interesa unirte a Legado Vivo?
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Cuéntanos sobre tu centro, los intereses de tus residentes, experiencia previa en talleres..."
                          rows={4}
                          className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full bg-primary-foreground text-secondary hover:bg-primary-foreground/90"
                    >
                      Enviar registro
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Button>

                    <p className="text-sm text-secondary-foreground/60 text-center">
                      Al enviar este formulario, aceptas que te contactemos para
                      discutir la posible integración de tu centro.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact alternatives */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                      <Phone
                        className="w-6 h-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-foreground">
                        ¿Prefieres llamar?
                      </p>
                      <p className="text-secondary-foreground/80">
                        +52 55 1234 5678
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary-foreground/10 border-secondary-foreground/20">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                      <Mail
                        className="w-6 h-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-foreground">
                        Escríbenos
                      </p>
                      <p className="text-secondary-foreground/80">
                        centros@legadovivo.mx
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Unete;
