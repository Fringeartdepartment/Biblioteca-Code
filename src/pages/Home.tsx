import { ArchiveConcept } from "../components/ArchiveConcept";
import { Benefits } from "../components/Benefits";
import { CatalogPreview } from "../components/CatalogPreview";
import { CategorySection } from "../components/CategorySection";
import { EditorialPhilosophy } from "../components/EditorialPhilosophy";
import { Faq } from "../components/Faq";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { MidCta } from "../components/MidCta";
import { Positioning } from "../components/Positioning";
import { ProductGrid } from "../components/ProductGrid";
import { SignaturePanorama } from "../components/SignaturePanorama";
import { Subscription } from "../components/Subscription";

export function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <ArchiveConcept />
      <SignaturePanorama />
      <Subscription />
      <ProductGrid />
      <CatalogPreview />
      <CategorySection />
      <HowItWorks />
      <Benefits />
      <MidCta />
      <EditorialPhilosophy />
      <Faq />
      <FinalCta />
    </main>
  );
}
