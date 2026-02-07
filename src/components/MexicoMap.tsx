import { MapPin } from "lucide-react";

interface MapLocation {
  id: number;
  state: string;
  centers: number;
  specialty: string;
  // Real geographic coordinates for Mexico states (approximate center points)
  // Converted to SVG viewBox coordinates (0-800 x 0-500)
  x: number;
  y: number;
}

interface MexicoMapProps {
  locations: MapLocation[];
  onLocationClick?: (location: MapLocation) => void;
  activeLocationId?: number | null;
}

export function MexicoMap({ locations, onLocationClick, activeLocationId }: MexicoMapProps) {
  return (
    <div className="relative w-full aspect-[8/5]" role="img" aria-label="Mapa de México mostrando ubicaciones de centros artesanales en 9 estados">
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Real Mexico SVG path - simplified but recognizable silhouette */}
        <path
          d="M50,180 L80,150 L120,140 L160,120 L200,100 L240,95 L280,90 L320,85 L360,80 L400,78 L440,80 L480,85 L520,100 L550,120 L570,140 L580,160 L600,180 L620,200 L640,230 L660,260 L680,300 L700,340 L720,380 L730,400 L720,420 L700,440 L660,450 L620,445 L580,430 L540,420 L500,425 L460,435 L420,445 L380,450 L340,445 L300,435 L260,425 L220,420 L180,430 L140,440 L100,435 L70,420 L50,400 L40,370 L35,340 L30,300 L35,260 L40,220 L50,180"
          fill="hsl(var(--cream))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="drop-shadow-sm"
        />
        
        {/* Baja California */}
        <path
          d="M50,180 L30,200 L20,240 L15,280 L10,320 L15,360 L25,380 L40,370 L50,340 L55,300 L50,260 L45,220 L50,180"
          fill="hsl(var(--cream))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Yucatan Peninsula */}
        <path
          d="M620,300 L660,280 L700,260 L740,250 L770,260 L780,290 L770,320 L740,340 L700,350 L660,340 L620,320 L620,300"
          fill="hsl(var(--cream))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
        
        {/* Location pins */}
        {locations.map((location) => {
          const isActive = activeLocationId === location.id;
          return (
            <g key={location.id}>
              {/* Pulse animation circle */}
              <circle
                cx={location.x}
                cy={location.y}
                r={isActive ? 20 : 15}
                fill="hsl(var(--primary) / 0.2)"
                className="animate-pulse"
              />
              {/* Main pin circle */}
              <circle
                cx={location.x}
                cy={location.y}
                r="10"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="3"
                className="cursor-pointer hover:scale-125 transition-transform origin-center"
                style={{ transformOrigin: `${location.x}px ${location.y}px` }}
              />
              {/* State abbreviation */}
              <text
                x={location.x}
                y={location.y + 4}
                textAnchor="middle"
                fill="hsl(var(--primary-foreground))"
                fontSize="8"
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                {location.centers}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Interactive overlay buttons */}
      {locations.map((location) => {
        const isActive = activeLocationId === location.id;
        return (
          <button
            key={location.id}
            onClick={() => onLocationClick?.(location)}
            className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 group"
            style={{ 
              left: `${(location.x / 800) * 100}%`, 
              top: `${(location.y / 500) * 100}%` 
            }}
            aria-label={`${location.state}: ${location.centers} centros artesanales especializados en ${location.specialty}`}
          >
            {/* Tooltip */}
            <span 
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 bg-foreground text-background rounded-xl text-sm whitespace-nowrap shadow-elevated pointer-events-none z-10 transition-opacity ${
                isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus:opacity-100'
              }`}
              role="tooltip"
            >
              <span className="font-display font-bold text-base block">{location.state}</span>
              <span className="flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {location.centers} centros
              </span>
              <span className="block text-background/80 mt-1">{location.specialty}</span>
              {/* Tooltip arrow */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-foreground" aria-hidden="true" />
            </span>
          </button>
        );
      })}
    </div>
  );
}

