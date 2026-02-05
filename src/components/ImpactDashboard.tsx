import { useEffect, useState, useRef } from "react";
import { Users, Building2, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
}

const impactStats: ImpactStat[] = [
  {
    id: "artisans",
    label: "Artesanos empoderados",
    value: 847,
    suffix: "+",
    icon: <Users className="w-8 h-8" aria-hidden="true" />,
    description: "Personas mayores o con alguna discapacidad generando ingresos dignos",
  },
  {
    id: "centers",
    label: "Centros vinculados",
    value: 42,
    suffix: "",
    icon: <Building2 className="w-8 h-8" aria-hidden="true" />,
    description: "Asilos y centros activos a nivel nacional",
  },
  {
    id: "therapy",
    label: "Horas de terapia ocupacional",
    value: 12450,
    suffix: "+",
    icon: <Clock className="w-8 h-8" aria-hidden="true" />,
    description: "Horas de actividad significativa generadas",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = Math.floor(easeOutQuart * end);
      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function formatNumber(num: number): string {
  return num.toLocaleString("es-MX");
}

interface StatCardProps {
  stat: ImpactStat;
  isVisible: boolean;
  delay: number;
}

function StatCard({ stat, isVisible, delay }: StatCardProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountUp(stat.value, 2500, shouldAnimate);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <Card
      variant="stat"
      className="text-center p-8 opacity-0 animate-scale-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
      role="article"
      aria-labelledby={`stat-label-${stat.id}`}
    >
      <CardContent className="p-0">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          {stat.icon}
        </div>
        <p
          className="impact-number text-4xl md:text-5xl text-primary mb-2"
          aria-live="polite"
        >
          {formatNumber(count)}
          {stat.suffix}
        </p>
        <h3
          id={`stat-label-${stat.id}`}
          className="font-display text-xl font-semibold text-foreground mb-2"
        >
          {stat.label}
        </h3>
        <p className="text-muted-foreground text-base">
          {stat.description}
        </p>
      </CardContent>
    </Card>
  );
}

export function ImpactDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-muted/30"
      aria-labelledby="impact-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Nuestro impacto en tiempo real
          </span>
          <h2
            id="impact-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Transformando vidas, una artesanía a la vez
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada compra activa una red de dignidad que conecta hogares con talleres de esperanza.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          role="region"
          aria-label="Panel de estadísticas de impacto"
        >
          {impactStats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
