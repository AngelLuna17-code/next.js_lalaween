import Stars from "../../components/Stars";
import Hero from "../../components/Hero"
import About from "../../components/About";
import ServiceCards from "../../components/ServiceCards";
import CarruselPortafolio from "../../components/CarruselPortafolio"
import Mapa from "../../components/Mapa";
import Contacto from "../../components/Contacto";

export default function Home() {
  return (
    <main>
      <section>
        {/* Stars */}
        <Stars />
        {/* Stars */}
        {/* Hero */}
        <Hero />
        {/* Hero */}
        {/* About */}
        <About />
        {/* About */}
        {/* ServiceCards */}
        <ServiceCards />
        {/* ServiceCards */}
        {/* Portafolio */}
        <CarruselPortafolio />
        {/* Portafolio */}
        {/* Mapa */}
        <Mapa />
        {/* Mapa */}
        {/* Contacto */}
        <Contacto />
        {/* Contacto */}
      </section>
    </main>
  );
}