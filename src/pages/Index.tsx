import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { ProductsSection } from "@/components/ProductsSection";
import { B2BSection } from "@/components/B2BSection";
import { JoinNetworkSection } from "@/components/JoinNetworkSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ImpactDashboard />
        <ProductsSection />
        <B2BSection />
        <JoinNetworkSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
