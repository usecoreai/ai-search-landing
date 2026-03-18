import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { IntegrationModes } from "@/components/landing/integration-modes";
import { Scenarios } from "@/components/landing/scenarios";
import { Analytics } from "@/components/landing/analytics";
import { Capabilities } from "@/components/landing/capabilities";
import { Team } from "@/components/landing/team";
import { Launch } from "@/components/landing/launch";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <IntegrationModes />
        <Scenarios />
        <Analytics />
        <Capabilities />
        <Team />
        <Launch />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
