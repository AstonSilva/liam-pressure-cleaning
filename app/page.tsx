import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { BeforeAfter } from "@/components/sections/comparison";
import { WhyUs } from "@/components/sections/why-us";
import { Areas } from "@/components/sections/areas";
import { Process } from "@/components/sections/process";
import { Gallery } from "@/components/sections/gallery";
import { About } from "@/components/sections/about";
import { EstimateCTA } from "@/components/sections/estimate-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Areas />
        <Process />
        <Gallery />
        <About />
        <EstimateCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
