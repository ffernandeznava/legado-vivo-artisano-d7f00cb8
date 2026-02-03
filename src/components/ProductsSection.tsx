import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  artisan: string;
  center: string;
  image: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Mermelada de Higo Artesanal",
    category: "Línea Gourmet",
    price: 185,
    artisan: "Don Manuel, 78 años",
    center: "Casa del Abuelo Feliz, Oaxaca",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Vela de Cera de Abeja",
    category: "Hogar y Bienestar",
    price: 145,
    artisan: "María Elena, 82 años",
    center: "Hogar San José, Querétaro",
    image: "https://images.unsplash.com/photo-1602607666592-6f5a9a2d8d74?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Bolsa de Cuero Tejido",
    category: "Cultural/Tradicional",
    price: 890,
    artisan: "Grupo Artesanal Esperanza",
    center: "CADI Luz y Vida, CDMX",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Jabón de Lavanda Natural",
    category: "Hogar y Bienestar",
    price: 95,
    artisan: "Doña Lupita, 75 años",
    center: "Asilo Santa María, Guadalajara",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400&h=400&fit=crop",
  },
];

const categories = [
  {
    id: "gourmet",
    name: "Línea Gourmet",
    description: "Conservas, mermeladas y productos alimenticios artesanales",
    color: "bg-terracotta/10 text-terracotta border-terracotta/20",
  },
  {
    id: "hogar",
    name: "Hogar y Bienestar",
    description: "Velas, jabones, textiles y productos para el hogar",
    color: "bg-forest/10 text-forest border-forest/20",
  },
  {
    id: "cultural",
    name: "Cultural/Tradicional",
    description: "Artesanías tradicionales mexicanas y piezas de colección",
    color: "bg-sand-dark/30 text-foreground border-sand-dark/30",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      variant="product"
      className="group overflow-hidden"
      role="article"
      aria-labelledby={`product-${product.id}-name`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
            {product.category}
          </span>
        </div>
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground focus-visible:opacity-100"
          aria-label={`Agregar ${product.name} a favoritos`}
        >
          <Heart className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <CardContent className="p-5">
        <h3
          id={`product-${product.id}-name`}
          className="font-display text-lg font-semibold text-foreground mb-1"
        >
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Por {product.artisan}
        </p>
        <p className="text-xs text-muted-foreground/80 mb-4">
          {product.center}
        </p>
        <p className="font-display text-2xl font-bold text-primary">
          ${product.price.toLocaleString("es-MX")}
          <span className="text-sm font-normal text-muted-foreground ml-1">MXN</span>
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0 flex gap-2">
        <Button variant="default" className="flex-1" size="sm">
          Agregar al Carrito
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Enviar mensaje de agradecimiento al centro ${product.center}`}
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductsSection() {
  return (
    <section
      className="py-20"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Tienda Artesanal
          </span>
          <h2
            id="products-heading"
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Productos con Historia y Propósito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada artículo cuenta una historia de superación. Explora nuestras categorías y encuentra piezas únicas.
          </p>
        </div>

        {/* Categories */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          role="list"
          aria-label="Categorías de productos"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${category.color}`}
              aria-label={`Ver categoría ${category.name}`}
            >
              <h3 className="font-display text-lg font-semibold mb-2">
                {category.name}
              </h3>
              <p className="text-sm opacity-80">{category.description}</p>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Productos destacados"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="forest" size="lg">
            Ver Todo el Catálogo
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
