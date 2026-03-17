import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { IntegrationModes } from "@/components/landing/integration-modes";
import { Analytics } from "@/components/landing/analytics";
import { Capabilities } from "@/components/landing/capabilities";
import { Team } from "@/components/landing/team";
import { Launch } from "@/components/landing/launch";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntegrationModes />
        <Analytics />
        <Capabilities />
        <Team />
        <Launch />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
