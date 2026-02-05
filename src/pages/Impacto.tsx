import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  MapPin,
  Users,
  Clock,
  TrendingUp,
  Building2,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
 import { Link } from "react-router-dom";

const impactMetrics = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "847",
    label: "Artesanos Empoderados",
    description: "Personas mayores y con discapacidad generando ingresos dignos",
    trend: "+23% este año",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "42",
    label: "Centros Vinculados",
    description: "Asilos y centros de atención en todo México",
    trend: "+8 nuevos centros",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "12,450",
    label: "Horas de Terapia",
    description: "Terapia ocupacional significativa generada",
    trend: "+34% vs año anterior",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: "$4.2M",
    label: "Ingresos Generados",
    description: "Pesos mexicanos distribuidos a artesanos y centros",
    trend: "+45% crecimiento",
  },
];

const mapLocations = [
  { id: 1, state: "Oaxaca", centers: 6, specialty: "Textiles y Barro Negro", x: "38%", y: "72%" },
  { id: 2, state: "CDMX", centers: 8, specialty: "Artículos de Cuero", x: "42%", y: "58%" },
  { id: 3, state: "Jalisco", centers: 5, specialty: "Productos Gourmet", x: "30%", y: "52%" },
  { id: 4, state: "Yucatán", centers: 4, specialty: "Miel y Bordados", x: "68%", y: "55%" },
  { id: 5, state: "Michoacán", centers: 5, specialty: "Cerámica y Madera", x: "32%", y: "58%" },
  { id: 6, state: "Chiapas", centers: 3, specialty: "Café y Textiles", x: "48%", y: "78%" },
  { id: 7, state: "Querétaro", centers: 4, specialty: "Velas y Jabones", x: "40%", y: "50%" },
  { id: 8, state: "Puebla", centers: 4, specialty: "Talavera y Conservas", x: "46%", y: "62%" },
  { id: 9, state: "Veracruz", centers: 3, specialty: "Café y Vainilla", x: "52%", y: "56%" },
];

const testimonials = [
  {
    quote:
      "Después de 40 años trabajando, pensé que mi vida productiva había terminado. Legado Vivo me devolvió el propósito. Ahora enseño a otros y mis jabones llegan a todo México.",
    author: "Doña Lupita",
    age: 75,
    center: "Asilo Santa María, Guadalajara",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Mis manos ya no son tan firmes, pero mi experiencia de 60 años tejiendo vale oro. Cada bolsa que hago lleva mi historia y ahora puedo ayudar con los gastos del centro.",
    author: "María Elena",
    age: 82,
    center: "Hogar San José, Querétaro",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Mi discapacidad visual no me limita para crear. Con las adaptaciones del taller, hago las mejores velas del centro. Cada venta es un triunfo personal.",
    author: "Roberto",
    age: 68,
    center: "CADI Luz y Vida, CDMX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

const yearlyProgress = [
  { year: "2021", artisans: 120, centers: 12, revenue: "0.5M" },
  { year: "2022", artisans: 340, centers: 24, revenue: "1.8M" },
  { year: "2023", artisans: 580, centers: 34, revenue: "2.9M" },
  { year: "2024", artisans: 847, centers: 42, revenue: "4.2M" },
];

const Impacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-sand-light">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
              Impacto Social Verificable
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transformando Vidas a Través del Trabajo Digno
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada producto que vendes, cada compra que realizas, genera un impacto
              directo y medible en la vida de nuestros artesanos y sus comunidades.
            </p>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16" aria-labelledby="metrics-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 id="metrics-heading" className="sr-only">
              Métricas de Impacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <Card key={index} variant="elevated" className="text-center p-8">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                      {metric.icon}
                    </div>
                    <p className="font-display text-4xl font-bold text-primary mb-2">
                      {metric.value}
                    </p>
                    <p className="font-display text-lg font-semibold text-foreground mb-2">
                      {metric.label}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {metric.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                      {metric.trend}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section
          className="py-20 bg-secondary text-secondary-foreground"
          aria-labelledby="map-heading"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="map-heading"
                className="font-display text-3xl md:text-4xl font-bold mb-4"
              >
                Mapa de Impacto Nacional
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                Explora nuestra red de centros productores en todo México.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Map Placeholder */}
              <div className="lg:col-span-2">
                <div className="relative aspect-[4/3] bg-secondary-foreground/10 rounded-2xl overflow-hidden border border-secondary-foreground/20">
                  {/* Simplified Mexico map outline */}
                  <svg
                    viewBox="0 0 100 80"
                    className="w-full h-full"
                    aria-label="Mapa de México con centros marcados"
                  >
                    <path
                      d="M10,25 Q15,20 25,22 L35,18 Q45,15 55,20 L70,15 Q80,18 85,25 L88,35 Q90,45 85,55 L75,65 Q65,70 55,68 L45,72 Q35,75 25,70 L15,60 Q8,50 10,40 Z"
                      fill="hsl(var(--secondary-foreground) / 0.1)"
                      stroke="hsl(var(--primary-foreground) / 0.3)"
                      strokeWidth="0.5"
                    />
                    {mapLocations.map((location) => (
                      <g key={location.id}>
                        <circle
                          cx={location.x}
                          cy={location.y}
                          r="2.5"
                          fill="hsl(var(--primary))"
                          className="animate-pulse"
                        />
                        <circle
                          cx={location.x}
                          cy={location.y}
                          r="4"
                          fill="hsl(var(--primary) / 0.3)"
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Location markers overlay */}
                  {mapLocations.map((location) => (
                    <button
                      key={location.id}
                      className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: location.x, top: location.y }}
                      aria-label={`${location.state}: ${location.centers} centros, especialidad ${location.specialty}`}
                    >
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-background text-foreground rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity shadow-elevated pointer-events-none">
                        <span className="font-semibold">{location.state}</span>
                        <br />
                        {location.centers} centros · {location.specialty}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Centers List */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Centros por Estado
                </h3>
                <ul className="space-y-3" role="list">
                  {mapLocations.map((location) => (
                    <li key={location.id}>
                      <button className="w-full text-left p-4 rounded-xl bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors border border-secondary-foreground/10">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold flex items-center gap-2">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            {location.state}
                          </span>
                          <span className="text-sm bg-primary-foreground/20 px-2 py-0.5 rounded-full">
                            {location.centers} centros
                          </span>
                        </div>
                        <p className="text-sm text-secondary-foreground/70">
                          {location.specialty}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="testimonials-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Voces de Nuestros Artesanos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Las historias de quienes dan vida a cada producto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} variant="elevated" className="relative">
                  <CardContent className="p-8">
                    <Quote
                      className="w-10 h-10 text-primary/20 mb-4"
                      aria-hidden="true"
                    />
                    <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-display font-semibold text-foreground">
                          {testimonial.author}, {testimonial.age} años
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.center}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Timeline */}
        <section
          className="py-20 bg-gradient-to-br from-sand-light to-cream"
          aria-labelledby="growth-heading"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="growth-heading"
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Nuestro Crecimiento
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un camino de expansión constante del impacto social.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {yearlyProgress.map((year, index) => (
                <Card
                  key={index}
                  className={`text-center ${
                    index === 3 ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <p className="font-display text-5xl font-bold text-primary mb-4">
                      {year.year}
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Artesanos</span>
                        <span className="font-semibold text-foreground">
                          {year.artisans}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Centros</span>
                        <span className="font-semibold text-foreground">
                          {year.centers}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ingresos</span>
                        <span className="font-semibold text-foreground">
                          ${year.revenue}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Star
                className="w-16 h-16 text-primary mx-auto mb-6"
                aria-hidden="true"
              />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sé Parte del Cambio
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cada compra, cada mensaje, cada alianza suma a esta red de dignidad
                y esperanza.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/tienda">
                  Explorar Tienda
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="forest" size="lg" asChild>
                  <Link to="/unete">
                  Unir Mi Centro
                  <Building2 className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impacto;
