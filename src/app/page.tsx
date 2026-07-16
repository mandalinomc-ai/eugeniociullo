import Navbar from "@/components/Navbar";
import MetroNav from "@/components/MetroNav";
import Hero from "@/components/Hero";
import MotionMarquee from "@/components/motion/MotionMarquee";
import CustomCursor from "@/components/motion/CustomCursor";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CasiStudio from "@/components/CasiStudio";
import Bio from "@/components/Bio";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <main className="relative bg-black">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <MetroNav />
      <Hero />
      <MotionMarquee />
      <CasiStudio />
      <Bio />
      <Services />
      <QuoteForm />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
