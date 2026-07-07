import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CasiStudio from "@/components/CasiStudio";
import Bio from "@/components/Bio";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Hero />
      <CasiStudio />
      <Bio />
      <Services />
      <QuoteForm />
      <Footer />
    </main>
  );
}
