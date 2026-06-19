import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Brands from "@/components/Brands";
import LanciDaZero from "@/components/LanciDaZero";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Bio />
      <Brands />
      <LanciDaZero />
      <Services />
      <QuoteForm />
      <Footer />
      <ChatBot />
    </main>
  );
}
