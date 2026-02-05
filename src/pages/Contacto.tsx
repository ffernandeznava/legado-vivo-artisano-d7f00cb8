 import { useState } from "react";
 import { Navigation } from "@/components/Navigation";
 import { Footer } from "@/components/Footer";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import { useToast } from "@/hooks/use-toast";
 import {
   Mail,
   Phone,
   MapPin,
   Clock,
   Send,
   MessageCircle,
   Building2,
   HelpCircle,
 } from "lucide-react";
 import { Link } from "react-router-dom";
 
 const contactMethods = [
   {
     icon: <Mail className="w-6 h-6" />,
     title: "Email",
     value: "hola@legadovivo.mx",
     description: "Respuesta en menos de 24 horas",
     link: "mailto:hola@legadovivo.mx",
   },
   {
     icon: <Phone className="w-6 h-6" />,
     title: "Teléfono",
     value: "+52 55 1234 5678",
     description: "Lunes a Viernes, 9am - 6pm",
     link: "tel:+525512345678",
   },
   {
     icon: <MessageCircle className="w-6 h-6" />,
     title: "WhatsApp",
     value: "+52 55 9876 5432",
     description: "Atención inmediata",
     link: "https://wa.me/5259876543",
   },
   {
     icon: <MapPin className="w-6 h-6" />,
     title: "Oficinas",
     value: "CDMX, México",
     description: "Visitas con cita previa",
     link: "#",
   },
 ];
 
 const quickLinks = [
   {
     icon: <Building2 className="w-5 h-5" />,
     title: "¿Eres una empresa?",
     description: "Solicita cotización para pedidos corporativos",
     link: "/empresas",
   },
   {
     icon: <HelpCircle className="w-5 h-5" />,
     title: "Preguntas frecuentes",
     description: "Encuentra respuestas rápidas",
     link: "/faq",
   },
 ];
 
 const Contacto = () => {
   const { toast } = useToast();
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     subject: "",
     message: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast({
       title: "¡Mensaje enviado!",
       description: "Nos pondremos en contacto contigo pronto.",
     });
     setFormData({ name: "", email: "", subject: "", message: "" });
   };
 
   return (
     <div className="min-h-screen bg-background">
       <Navigation />
       <main id="main-content" tabIndex={-1} className="pt-24">
         {/* Hero */}
         <section className="py-16 bg-gradient-to-br from-sand-light to-cream">
           <div className="container mx-auto px-4 lg:px-8 text-center">
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
               Contáctanos
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Estamos aquí para ayudarte. Ya sea una pregunta, sugerencia o
               colaboración, nos encantará escucharte.
             </p>
           </div>
         </section>
 
         {/* Contact Methods */}
         <section className="py-12">
           <div className="container mx-auto px-4 lg:px-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {contactMethods.map((method, index) => (
                 <a
                   key={index}
                   href={method.link}
                   className="block group"
                   target={method.link.startsWith("http") ? "_blank" : undefined}
                   rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                 >
                   <Card className="h-full transition-all group-hover:shadow-elevated group-hover:border-primary/30">
                     <CardContent className="p-6 text-center">
                       <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                         {method.icon}
                       </div>
                       <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                         {method.title}
                       </h3>
                       <p className="text-primary font-medium mb-1">{method.value}</p>
                       <p className="text-sm text-muted-foreground">
                         {method.description}
                       </p>
                     </CardContent>
                   </Card>
                 </a>
               ))}
             </div>
           </div>
         </section>
 
         {/* Form and Info */}
         <section className="py-16">
           <div className="container mx-auto px-4 lg:px-8">
             <div className="grid lg:grid-cols-3 gap-12">
               {/* Form */}
               <div className="lg:col-span-2">
                 <Card variant="elevated">
                   <CardContent className="p-8">
                     <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                       Envíanos un Mensaje
                     </h2>
                     <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="space-y-2">
                           <Label htmlFor="name">Nombre *</Label>
                           <Input
                             id="name"
                             value={formData.name}
                             onChange={(e) =>
                               setFormData({ ...formData, name: e.target.value })
                             }
                             placeholder="Tu nombre"
                             required
                           />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="email">Email *</Label>
                           <Input
                             id="email"
                             type="email"
                             value={formData.email}
                             onChange={(e) =>
                               setFormData({ ...formData, email: e.target.value })
                             }
                             placeholder="tu@email.com"
                             required
                           />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="subject">Asunto *</Label>
                         <Input
                           id="subject"
                           value={formData.subject}
                           onChange={(e) =>
                             setFormData({ ...formData, subject: e.target.value })
                           }
                           placeholder="¿En qué podemos ayudarte?"
                           required
                         />
                       </div>
                       <div className="space-y-2">
                         <Label htmlFor="message">Mensaje *</Label>
                         <Textarea
                           id="message"
                           value={formData.message}
                           onChange={(e) =>
                             setFormData({ ...formData, message: e.target.value })
                           }
                           placeholder="Escribe tu mensaje aquí..."
                           rows={5}
                           required
                         />
                       </div>
                       <Button type="submit" variant="hero" size="lg" className="w-full">
                         Enviar Mensaje
                         <Send className="w-5 h-5" aria-hidden="true" />
                       </Button>
                     </form>
                   </CardContent>
                 </Card>
               </div>
 
               {/* Sidebar */}
               <div className="space-y-6">
                 <Card className="bg-primary/5 border-primary/20">
                   <CardContent className="p-6">
                     <div className="flex items-center gap-3 mb-4">
                       <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                       <h3 className="font-display text-lg font-semibold text-foreground">
                         Horario de Atención
                       </h3>
                     </div>
                     <div className="space-y-2 text-muted-foreground">
                       <p>Lunes a Viernes: 9:00 - 18:00</p>
                       <p>Sábados: 10:00 - 14:00</p>
                       <p>Domingos: Cerrado</p>
                     </div>
                   </CardContent>
                 </Card>
 
                 {quickLinks.map((item, index) => (
                   <Link key={index} to={item.link} className="block group">
                     <Card className="transition-all group-hover:shadow-soft group-hover:border-primary/30">
                       <CardContent className="p-6">
                         <div className="flex items-start gap-4">
                           <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                             {item.icon}
                           </div>
                           <div>
                             <h3 className="font-display font-semibold text-foreground mb-1">
                               {item.title}
                             </h3>
                             <p className="text-sm text-muted-foreground">
                               {item.description}
                             </p>
                           </div>
                         </div>
                       </CardContent>
                     </Card>
                   </Link>
                 ))}
               </div>
             </div>
           </div>
         </section>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Contacto;