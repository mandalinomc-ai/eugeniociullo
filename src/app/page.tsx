import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Bio from "@/components/Bio";
import WorkGallery from "@/components/WorkGallery";
import Brands from "@/components/Brands";
import LanciDaZero from "@/components/LanciDaZero";
import Services from "@/components/Services";
import SiteBuilderAI from "@/components/SiteBuilderAI";
import PaymentBanner from "@/components/PaymentBanner";
import AutomationHub from "@/components/AutomationHub";
import QuoteForm from "@/components/QuoteForm";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <Bio />
      <WorkGallery />
      <Brands />
      <LanciDaZero />
      <Services />
      <SiteBuilderAI />
      <PaymentBanner />
      <AutomationHub />
      <QuoteForm />
      <Footer />
      <ChatBot />
    </main>
  );
}
