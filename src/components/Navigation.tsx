import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ShoppingBag } from "lucide-react";
 import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { href: "/", label: "Inicio", ariaLabel: "Ir a la página de inicio" },
  { href: "/tienda", label: "Tienda", ariaLabel: "Ver catálogo de productos" },
  { href: "/empresas", label: "Empresas", ariaLabel: "Soluciones para empresas" },
  { href: "/impacto", label: "Nuestro Impacto", ariaLabel: "Ver nuestro impacto social" },
  { href: "/unete", label: "Únete a la Red", ariaLabel: "Registrar tu centro" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
   const { toast } = useToast();
 
   const handleCartClick = () => {
     toast({
       title: "Carrito de compras",
       description: "Próximamente podrás gestionar tu carrito aquí.",
     });
   };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="skip-link"
        tabIndex={0}
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 lg:px-8"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
              aria-label="Legado Vivo - Ir al inicio"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Legado Vivo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-base font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                      aria-label={link.ariaLabel}
                      aria-current={location.pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" aria-label="Ver carrito de compras" onClick={handleCartClick}>
                  <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/tienda">
                  Comprar Ahora
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
            aria-hidden={!isOpen}
          >
            <ul className="flex flex-col gap-2 pt-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    aria-label={link.ariaLabel}
                    aria-current={location.pathname === link.href ? "page" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  variant="default"
                  className="w-full"
                  tabIndex={isOpen ? 0 : -1}
                  asChild
                >
                  <Link to="/tienda">
                  Comprar Ahora
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
