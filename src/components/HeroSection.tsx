import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-artisan.jpg";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Manos de artesano trabajando cuero en un taller tradicional mexicano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gentle" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">
              Artesanía con Propósito Social
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Custodiamos Historias,{" "}
            <span className="text-primary">Creamos Dignidad</span>
          </h1>

          {/* Manifesto */}
          <blockquote
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-up border-l-4 border-primary pl-6"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <p className="italic">
              "En Legado Vivo, no solo creamos objetos; custodiamos historias. Cada producto es el resultado de décadas de experiencia y la superación de barreras. Creemos que la edad y la discapacidad no son límites, sino fuentes de una maestría única que el mundo merece conocer."
            </p>
          </blockquote>

          <p
            className="text-lg text-foreground/80 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Al elegirnos, no compras una artesanía: activas una red de dignidad, aseguras ingresos justos para nuestros mayores y transformas asilos en talleres de esperanza viva.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="lg" aria-label="Explorar catálogo de productos">
              Explorar Catálogo
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              variant="terracottaOutline"
              size="lg"
              aria-label="Ver video sobre nuestros artesanos"
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              Conoce a Nuestros Artesanos
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                ✓
              </span>
              <span className="text-sm">Comercio Justo Certificado</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                ✓
              </span>
              <span className="text-sm">100% Hecho en México</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                ✓
              </span>
              <span className="text-sm">Impacto Social Verificable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
