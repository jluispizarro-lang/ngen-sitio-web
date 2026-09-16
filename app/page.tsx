import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Landscape from "@/components/Landscape";
import ServiceCycle from "@/components/ServiceCycle";
import Specialties from "@/components/Specialties";
import TrackRecord from "@/components/TrackRecord";
import Coverage from "@/components/Coverage";
import Differentiator from "@/components/Differentiator";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Landscape />
      <ServiceCycle />
      <Specialties />
      <TrackRecord />
      <Coverage />
      <Differentiator />
      <CTASection />
      <Footer />
    </main>
  );
}
