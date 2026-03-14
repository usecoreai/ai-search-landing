import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustBand } from "@/components/landing/trust-band";
import { IntegrationModes } from "@/components/landing/integration-modes";
import { Capabilities } from "@/components/landing/capabilities";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyUs } from "@/components/landing/why-us";
import { Integration } from "@/components/landing/integration";
import { Results } from "@/components/landing/results";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <IntegrationModes />
        <Capabilities />
        <HowItWorks />
        <WhyUs />
        <Integration />
        <Results />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
