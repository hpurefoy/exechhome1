import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Promise from "@/components/Promise";
import SevenSteps from "@/components/SevenSteps";
import BonusGuide from "@/components/BonusGuide";
import ConsultBanner from "@/components/ConsultBanner";
import TrustStrip from "@/components/TrustStrip";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider bg="bg-paper" />
        <Promise />
        <SevenSteps />
        <Divider bg="bg-navy-deep" flip />
        <BonusGuide />
        <Divider bg="bg-paper" />
        <ConsultBanner />
        <TrustStrip />
        <Testimonials />
        <Divider bg="bg-navy-deep" flip />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
