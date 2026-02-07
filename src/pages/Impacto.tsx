import { useState } from "react";
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
import { MexicoMap } from "@/components/MexicoMap";

const impactMetrics = [
  {
    icon: <Users className="w-8 h-8" aria-hidden="true" />,
    value: "847",
    label: "Artesanos empoderados",
    description: "Personas mayores o con alguna discapacidad generando ingresos dignos",
    trend: "+23% este año",
  },
  {
    icon: <Building2 className="w-8 h-8" aria-hidden="true" />,
    value: "42",
    label: "Centros vinculados",
    description: "Asilos y centros de atención en todo México",
    trend: "+8 nuevos centros",
  },
  {
    icon: <Clock className="w-8 h-8" aria-hidden="true" />,
    value: "12,450",
    label: "Horas de terapia",
    description: "Terapia ocupacional significativa generada",
    trend: "+34% vs año anterior",
  },
  {
    icon: <Heart className="w-8 h-8" aria-hidden="true" />,
    value: "$4.2M",
    label: "Ingresos generados",
    description: "Pesos mexicanos distribuidos a artesanos y centros",
    trend: "+45% crecimiento",
  },
];

// Real approximate coordinates for Mexican states on 800x500 viewBox
const mapLocations = [
  { id: 1, state: "Oaxaca", centers: 6, specialty: "Textiles tradicionales y barro negro", x: 480, y: 400 },
  { id: 2, state: "CDMX", centers: 8, specialty: "Artículos de cuero artesanal", x: 420, y: 340 },
  { id: 3, state: "Jalisco", centers: 5, specialty: "Productos gourmet y cerámica", x: 320, y: 300 },
  { id: 4, state: "Yucatán", centers: 4, specialty: "Miel de abeja y bordados", x: 700, y: 300 },
  { id: 5, state: "Michoacán", centers: 5, specialty: "Cerámica de Talavera y lacas", x: 360, y: 340 },
  { id: 6, state: "Chiapas", centers: 3, specialty: "Café de altura y textiles", x: 540, y: 420 },
  { id: 7, state: "Querétaro", centers: 4, specialty: "Velas aromáticas y jabones", x: 400, y: 290 },
  { id: 8, state: "Puebla", centers: 4, specialty: "Talavera poblana y conservas", x: 460, y: 350 },
];

const testimonials = [
  {
    quote:
      "Después de 40 años trabajando, pensé que mi vida productiva había terminado. Legado Vivo me devolvió el propósito. Ahora enseño a otros y mis jabones llegan a todo México.",
    author: "Doña Lupita",
    age: 75,
    center: "Asilo Santa María, Guadalajara",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
    alt: "Retrato de Doña Lupita, artesana de jabones de 75 años, sonriendo cálidamente",
  },
  {
    quote:
      "Mis manos ya no son tan firmes, pero mi experiencia de 60 años tejiendo vale oro. Cada bolsa que hago lleva mi historia y ahora puedo ayudar con los gastos del centro.",
    author: "María Elena",
    age: 82,
    center: "Hogar San José, Querétaro",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop",
    alt: "Retrato de María Elena, tejedora de 82 años con expresión serena y sabia",
  },
  {
    quote:
      "Mi discapacidad visual no me limita para crear. Con las adaptaciones del taller, hago las mejores velas del centro. Cada venta es un triunfo personal.",
    author: "Roberto",
    age: 68,
    center: "CADI Luz y Vida, CDMX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    alt: "Retrato de Roberto, artesano de velas de 68 años con discapacidad visual",
  },
];

const yearlyProgress = [
  { year: "2021", artisans: 120, centers: 12, revenue: "0.5M" },
  { year: "2022", artisans: 340, centers: 24, revenue: "1.8M" },
  { year: "2023", artisans: 580, centers: 34, revenue: "2.9M" },
  { year: "2024", artisans: 847, centers: 42, revenue: "4.2M" },
];

const Impacto = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  // Split locations into two columns
  const midpoint = Math.ceil(mapLocations.length / 2);
  const leftColumnLocations = mapLocations.slice(0, midpoint);
  const rightColumnLocations = mapLocations.slice(midpoint);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-sand-light">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-base mb-6">
              <TrendingUp className="w-5 h-5" aria-hidden="true" />
              Impacto social verificable
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transformando vidas a través del trabajo digno
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
                    <p className="text-base text-muted-foreground mb-4">
                      {metric.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-base font-medium">
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
                Mapa de impacto nacional
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                Explora nuestra red de centros productores en todo México. Haz clic en cada punto para más detalles.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Real Mexico Map */}
              <div className="lg:col-span-2 bg-secondary-foreground/5 rounded-2xl p-6 border border-secondary-foreground/10">
                <MexicoMap 
                  locations={mapLocations} 
                  onLocationClick={(loc) => setActiveLocation(loc.id === activeLocation ? null : loc.id)}
                  activeLocationId={activeLocation}
                />
              </div>

              {/* Centers List - Two Columns */}
              <div>
                <h3 className="font-display text-xl font-semibold mb-6">
                  Centros por estado
                </h3>
                <div className="grid grid-cols-2 gap-3" role="list" aria-label="Lista de centros artesanales por estado">
                  {/* Left Column */}
                  <div className="space-y-3">
                    {leftColumnLocations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setActiveLocation(location.id === activeLocation ? null : location.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all border focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                          activeLocation === location.id
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary-foreground/10 border-secondary-foreground/10 hover:bg-secondary-foreground/20"
                        }`}
                        aria-pressed={activeLocation === location.id}
                        aria-label={`${location.state}: ${location.centers} centros especializados en ${location.specialty}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold flex items-center gap-2 text-base">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            {location.state}
                          </span>
                          <span className={`text-sm px-2 py-0.5 rounded-full ${
                            activeLocation === location.id 
                              ? "bg-primary-foreground/20" 
                              : "bg-primary/20 text-primary"
                          }`}>
                            {location.centers}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          activeLocation === location.id 
                            ? "text-primary-foreground/80" 
                            : "text-secondary-foreground/70"
                        }`}>
                          {location.specialty}
                        </p>
                      </button>
                    ))}
                  </div>
                  {/* Right Column */}
                  <div className="space-y-3">
                    {rightColumnLocations.map((location) => (
                      <button
                        key={location.id}
                        onClick={() => setActiveLocation(location.id === activeLocation ? null : location.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all border focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                          activeLocation === location.id
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary-foreground/10 border-secondary-foreground/10 hover:bg-secondary-foreground/20"
                        }`}
                        aria-pressed={activeLocation === location.id}
                        aria-label={`${location.state}: ${location.centers} centros especializados en ${location.specialty}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold flex items-center gap-2 text-base">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            {location.state}
                          </span>
                          <span className={`text-sm px-2 py-0.5 rounded-full ${
                            activeLocation === location.id 
                              ? "bg-primary-foreground/20" 
                              : "bg-primary/20 text-primary"
                          }`}>
                            {location.centers}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          activeLocation === location.id 
                            ? "text-primary-foreground/80" 
                            : "text-secondary-foreground/70"
                        }`}>
                          {location.specialty}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
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
                Voces de nuestros artesanos
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
                        alt={testimonial.alt}
                        className="w-14 h-14 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-display font-semibold text-foreground">
                          {testimonial.author}, {testimonial.age} años
                        </p>
                        <p className="text-base text-muted-foreground">
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
                Nuestro crecimiento
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
                    <div className="space-y-3 text-base">
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
                Sé parte del cambio
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Cada compra, cada mensaje, cada alianza suma a esta red de dignidad
                y esperanza.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/tienda">
                    Explorar tienda
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="forest" size="lg" asChild>
                  <Link to="/unete">
                    Unir mi centro
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
