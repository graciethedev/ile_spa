import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ingredients } from "@/components/Ingredients";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Ingredients />
        <Visit />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
