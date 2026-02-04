import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Search, Filter, SlidersHorizontal } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  artisan: string;
  center: string;
  image: string;
  description: string;
}

const allProducts: Product[] = [
  {
    id: "1",
    name: "Mermelada de Higo Artesanal",
    category: "Línea Gourmet",
    price: 185,
    artisan: "Don Manuel, 78 años",
    center: "Casa del Abuelo Feliz, Oaxaca",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
    description: "Elaborada con higos frescos de temporada y el toque secreto de décadas de experiencia.",
  },
  {
    id: "2",
    name: "Vela de Cera de Abeja",
    category: "Hogar y Bienestar",
    price: 145,
    artisan: "María Elena, 82 años",
    center: "Hogar San José, Querétaro",
    image: "https://images.unsplash.com/photo-1602607666592-6f5a9a2d8d74?w=400&h=400&fit=crop",
    description: "Vela 100% natural con aroma suave, perfecta para crear ambientes de paz.",
  },
  {
    id: "3",
    name: "Bolsa de Cuero Tejido",
    category: "Cultural/Tradicional",
    price: 890,
    artisan: "Grupo Artesanal Esperanza",
    center: "CADI Luz y Vida, CDMX",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
    description: "Bolsa tejida a mano con técnicas tradicionales heredadas por generaciones.",
  },
  {
    id: "4",
    name: "Jabón de Lavanda Natural",
    category: "Hogar y Bienestar",
    price: 95,
    artisan: "Doña Lupita, 75 años",
    center: "Asilo Santa María, Guadalajara",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400&h=400&fit=crop",
    description: "Jabón artesanal con aceites esenciales de lavanda orgánica.",
  },
  {
    id: "5",
    name: "Miel de Abeja Silvestre",
    category: "Línea Gourmet",
    price: 220,
    artisan: "Don Roberto, 80 años",
    center: "Hogar de Ancianos Esperanza, Yucatán",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    description: "Miel pura recolectada de apiarios tradicionales mayas.",
  },
  {
    id: "6",
    name: "Servilletas Bordadas a Mano",
    category: "Cultural/Tradicional",
    price: 350,
    artisan: "Las Bordadoras de Luz",
    center: "Centro Vida Plena, Chiapas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "Set de 4 servilletas con bordados tradicionales de la región.",
  },
  {
    id: "7",
    name: "Aceite de Oliva Infusionado",
    category: "Línea Gourmet",
    price: 275,
    artisan: "Don Aurelio, 76 años",
    center: "Asilo San Francisco, Baja California",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    description: "Aceite extra virgen infusionado con hierbas del jardín del centro.",
  },
  {
    id: "8",
    name: "Cojín de Telar de Cintura",
    category: "Hogar y Bienestar",
    price: 580,
    artisan: "Doña Carmela, 79 años",
    center: "Casa Hogar Amanecer, Oaxaca",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    description: "Cojín decorativo tejido en telar de cintura con diseños zapotecos.",
  },
  {
    id: "9",
    name: "Café de Altura Tostado",
    category: "Línea Gourmet",
    price: 195,
    artisan: "Grupo Cafetero Sabiduría",
    center: "Hogar Tercera Edad, Veracruz",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    description: "Café de altura tostado artesanalmente con notas de chocolate.",
  },
  {
    id: "10",
    name: "Maceta de Barro Pintado",
    category: "Cultural/Tradicional",
    price: 320,
    artisan: "Don Jesús, 83 años",
    center: "Centro Geriátrico Felicidad, Michoacán",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    description: "Maceta decorativa con diseños tradicionales purépechas.",
  },
  {
    id: "11",
    name: "Sales de Baño Aromáticas",
    category: "Hogar y Bienestar",
    price: 125,
    artisan: "Doña Teresa, 77 años",
    center: "Asilo Nuestra Señora, Puebla",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
    description: "Sales minerales con mezcla de hierbas relajantes.",
  },
  {
    id: "12",
    name: "Licor de Membrillo",
    category: "Línea Gourmet",
    price: 380,
    artisan: "Don Fernando, 81 años",
    center: "Hogar San Vicente, Aguascalientes",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop",
    description: "Licor artesanal elaborado con la receta familiar del artesano.",
  },
];

const categories = [
  { id: "all", name: "Todos", count: 12 },
  { id: "gourmet", name: "Línea Gourmet", count: 5 },
  { id: "hogar", name: "Hogar y Bienestar", count: 4 },
  { id: "cultural", name: "Cultural/Tradicional", count: 3 },
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
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xs text-muted-foreground/80 mb-1">
          Por {product.artisan}
        </p>
        <p className="text-xs text-muted-foreground/60 mb-4">
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
          aria-label={`Enviar mensaje de agradecimiento al artesano ${product.artisan}`}
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

const Tienda = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "gourmet" && product.category === "Línea Gourmet") ||
      (selectedCategory === "hogar" && product.category === "Hogar y Bienestar") ||
      (selectedCategory === "cultural" && product.category === "Cultural/Tradicional");

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artisan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.center.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-sand-light to-cream py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tienda Artesanal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Cada producto cuenta una historia de superación, dignidad y maestría.
              Al comprar, activas una red de esperanza.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                placeholder="Buscar productos, artesanos o centros..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
                aria-label="Buscar productos"
              />
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-28">
                  <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="w-5 h-5 text-primary" aria-hidden="true" />
                    <h2 className="font-display text-xl font-semibold">Categorías</h2>
                  </div>
                  <nav aria-label="Categorías de productos">
                    <ul className="space-y-2" role="list">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                              selectedCategory === category.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-card hover:bg-muted"
                            }`}
                            aria-current={selectedCategory === category.id ? "true" : undefined}
                          >
                            <span className="font-medium">{category.name}</span>
                            <span
                              className={`text-sm ${
                                selectedCategory === category.id
                                  ? "text-primary-foreground/80"
                                  : "text-muted-foreground"
                              }`}
                            >
                              ({category.count})
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Price Range Info */}
                  <div className="mt-8 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Rango de Precios
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Desde $95 hasta $890 MXN
                    </p>
                  </div>

                  {/* Impact Note */}
                  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">💚 Tu impacto:</span> El 80% del precio
                      va directamente al artesano y su centro.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
                    productos encontrados
                  </p>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" aria-hidden="true" />
                    Ordenar
                  </Button>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                  role="list"
                  aria-label="Lista de productos"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-xl text-muted-foreground">
                      No encontramos productos que coincidan con tu búsqueda.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                    >
                      Limpiar filtros
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tienda;
