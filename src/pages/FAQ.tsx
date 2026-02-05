 import { useState } from "react";
 import { Navigation } from "@/components/Navigation";
 import { Footer } from "@/components/Footer";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import { Input } from "@/components/ui/input";
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import { Link } from "react-router-dom";
 import {
   Search,
   HelpCircle,
   ShoppingBag,
   Truck,
   RefreshCcw,
   Building2,
   Users,
   Heart,
   ArrowRight,
 } from "lucide-react";
 
 const faqCategories = [
   { id: "compras", label: "Compras", icon: <ShoppingBag className="w-5 h-5" /> },
   { id: "envios", label: "Envíos", icon: <Truck className="w-5 h-5" /> },
   { id: "devoluciones", label: "Devoluciones", icon: <RefreshCcw className="w-5 h-5" /> },
   { id: "empresas", label: "Empresas", icon: <Building2 className="w-5 h-5" /> },
   { id: "centros", label: "Centros", icon: <Users className="w-5 h-5" /> },
   { id: "impacto", label: "Impacto", icon: <Heart className="w-5 h-5" /> },
 ];
 
 const faqs = [
   {
     category: "compras",
     question: "¿Cómo puedo realizar una compra?",
     answer: "Puedes comprar directamente en nuestra tienda en línea. Navega por las categorías, añade productos al carrito y completa el checkout con tu método de pago preferido.",
   },
   {
     category: "compras",
     question: "¿Qué métodos de pago aceptan?",
     answer: "Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal, transferencia bancaria y pago en OXXO.",
   },
   {
     category: "compras",
     question: "¿Los precios incluyen IVA?",
     answer: "Sí, todos los precios mostrados en la tienda ya incluyen IVA. Emitimos factura fiscal a solicitud.",
   },
   {
     category: "envios",
     question: "¿Cuánto tarda en llegar mi pedido?",
     answer: "Los envíos dentro de CDMX tardan 2-3 días hábiles. Para el resto del país, entre 3-7 días hábiles dependiendo de la zona.",
   },
   {
     category: "envios",
     question: "¿Cuánto cuesta el envío?",
     answer: "Envío gratis en compras mayores a $500 MXN. Para compras menores, el costo varía entre $50-$150 según la zona.",
   },
   {
     category: "envios",
     question: "¿Hacen envíos internacionales?",
     answer: "Actualmente solo realizamos envíos dentro de México. Estamos trabajando para expandir nuestro servicio internacional.",
   },
   {
     category: "devoluciones",
     question: "¿Puedo devolver un producto?",
     answer: "Sí, aceptamos devoluciones dentro de los 15 días posteriores a la entrega si el producto no cumple tus expectativas. El artículo debe estar sin usar y en su empaque original.",
   },
   {
     category: "devoluciones",
     question: "¿Cómo solicito una devolución?",
     answer: "Contacta a nuestro equipo por email o WhatsApp con tu número de pedido. Te enviaremos una guía de devolución prepagada.",
   },
   {
     category: "empresas",
     question: "¿Ofrecen precios especiales para empresas?",
     answer: "Sí, tenemos descuentos por volumen que van del 10% al 25% según la cantidad. Contacta a nuestro equipo B2B para una cotización personalizada.",
   },
   {
     category: "empresas",
     question: "¿Pueden personalizar productos con nuestro logo?",
     answer: "¡Por supuesto! Ofrecemos grabado en cuero, madera y etiquetas de papel semilla. Usa nuestro simulador para previsualizar cómo quedaría.",
   },
   {
     category: "empresas",
     question: "¿Cuánto tiempo toma un pedido corporativo?",
     answer: "Dependiendo de la cantidad y personalización, los pedidos corporativos tardan entre 3-6 semanas. Te recomendamos hacer tu pedido con anticipación.",
   },
   {
     category: "centros",
     question: "¿Cómo puedo unir mi centro a la red?",
     answer: "Visita nuestra página 'Únete a la Red' y completa el formulario de registro. Nuestro equipo se pondrá en contacto para evaluar la integración.",
   },
   {
     category: "centros",
     question: "¿Qué requisitos necesita mi centro?",
     answer: "Necesitas ser un centro de atención legalmente constituido, contar con espacio mínimo para taller (15m²), y tener al menos 5 residentes interesados.",
   },
   {
     category: "centros",
     question: "¿Hay costo de inscripción?",
     answer: "No, la integración a la red es completamente gratuita. Además, proporcionamos materiales y capacitación sin costo inicial.",
   },
   {
     category: "impacto",
     question: "¿Cómo se distribuyen los ingresos?",
     answer: "El 60% va directamente al artesano, el 20% al centro de atención, y el 20% restante cubre operaciones, materiales y desarrollo del programa.",
   },
   {
     category: "impacto",
     question: "¿Puedo conocer al artesano que hizo mi producto?",
     answer: "Cada producto incluye información del artesano y centro de origen. Además, puedes enviar mensajes de agradecimiento directos a través de nuestra plataforma.",
   },
   {
     category: "impacto",
     question: "¿Cómo verifico el impacto social?",
     answer: "Publicamos reportes de impacto trimestrales. En cada compra puedes ver exactamente qué centro y artesano se beneficia.",
   },
 ];
 
 const FAQ = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
 
   const filteredFaqs = faqs.filter((faq) => {
     const matchesSearch =
       faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
       faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
     const matchesCategory = !selectedCategory || faq.category === selectedCategory;
     return matchesSearch && matchesCategory;
   });
 
   return (
     <div className="min-h-screen bg-background">
       <Navigation />
       <main id="main-content" tabIndex={-1} className="pt-24">
         {/* Hero */}
         <section className="py-16 bg-gradient-to-br from-sand-light to-cream">
           <div className="container mx-auto px-4 lg:px-8 text-center">
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
               <HelpCircle className="w-4 h-4" aria-hidden="true" />
               Centro de ayuda
             </span>
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
               Preguntas frecuentes
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
               Encuentra respuestas rápidas a las preguntas más comunes sobre
               compras, envíos, empresas y nuestro impacto social.
             </p>
 
             {/* Search */}
             <div className="max-w-xl mx-auto relative">
               <Search
                 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                 aria-hidden="true"
               />
               <Input
                 type="search"
                 placeholder="Buscar en las preguntas..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="pl-12 h-14 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
                 aria-label="Buscar preguntas"
               />
             </div>
           </div>
         </section>
 
         {/* Categories */}
         <section className="py-8 border-b">
           <div className="container mx-auto px-4 lg:px-8">
             <div className="flex flex-wrap justify-center gap-3">
               <Button
                 variant={selectedCategory === null ? "default" : "outline"}
                 size="sm"
                 onClick={() => setSelectedCategory(null)}
               >
                 Todas
               </Button>
               {faqCategories.map((cat) => (
                 <Button
                   key={cat.id}
                   variant={selectedCategory === cat.id ? "default" : "outline"}
                   size="sm"
                   onClick={() => setSelectedCategory(cat.id)}
                   className="gap-2"
                 >
                   {cat.icon}
                   {cat.label}
                 </Button>
               ))}
             </div>
           </div>
         </section>
 
         {/* FAQ Accordion */}
         <section className="py-16">
           <div className="container mx-auto px-4 lg:px-8">
             <div className="max-w-3xl mx-auto">
               {filteredFaqs.length > 0 ? (
                 <Accordion type="single" collapsible className="space-y-4">
                   {filteredFaqs.map((faq, index) => (
                     <AccordionItem
                       key={index}
                       value={`item-${index}`}
                       className="border rounded-xl px-6 bg-card"
                     >
                       <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                         {faq.question}
                       </AccordionTrigger>
                       <AccordionContent className="text-muted-foreground">
                         {faq.answer}
                       </AccordionContent>
                     </AccordionItem>
                   ))}
                 </Accordion>
               ) : (
                 <div className="text-center py-12">
                   <HelpCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                   <p className="text-xl text-muted-foreground mb-4">
                     No encontramos respuestas para tu búsqueda.
                   </p>
                   <Button
                     variant="outline"
                     onClick={() => {
                       setSearchQuery("");
                       setSelectedCategory(null);
                     }}
                   >
                     Limpiar filtros
                   </Button>
                 </div>
               )}
             </div>
           </div>
         </section>
 
         {/* CTA */}
         <section className="py-16 bg-secondary text-secondary-foreground">
           <div className="container mx-auto px-4 lg:px-8 text-center">
             <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
               ¿No encontraste lo que buscabas?
             </h2>
             <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
               Nuestro equipo está listo para ayudarte con cualquier pregunta.
             </p>
             <Button
               variant="hero"
               size="lg"
               className="bg-primary-foreground text-secondary hover:bg-primary-foreground/90"
               asChild
             >
               <Link to="/contacto">
                 Contactar soporte
                 <ArrowRight className="w-5 h-5" aria-hidden="true" />
               </Link>
             </Button>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default FAQ;